const express = require("express");
const mongoose = require("mongoose");

const Story = require("../models/Story");
const User = require("../models/User");
const middleware = require("../utils/middleware");

const storyRouter = express.Router();

storyRouter.post(
  "/create",
  middleware.isAuthenticated,
  async (req, res, next) => {
    try {
      const { title, content, date, likes, comments } = req.body;

      const newStory = new Story({
        title,
        content,
        storyTeller: req.session.username,
        date,
        likes,
        comments,
      });

      await newStory.save();

      const user = await User.findOne({ username: req.session.username });

      user.stories.unshift(newStory.id);

      await user.save();

      res.status(201).json({
        success: true,
        msg: "Story successfully created.",
        story: newStory,
      });
    } catch (error) {
      next(error);
    }
  }
);

storyRouter.get(
  "/like/unlike/:id",
  middleware.isAuthenticated,
  async (req, res, next) => {
    try {
      const story = await Story.findById(req.params.id);

      if (!story) {
        return res.status(404).json({
          success: false,
          msg: "Story not found, unsuccessful attempt!",
        });
      }

      if (story.likes.includes(req.session.username)) {
        const index = story.likes.indexOf(req.session.username);

        story.likes.splice(index, 1);

        await story.save();

        return res.status(200).json({ success: true, msg: "Story unliked." });
      } else {
        story.likes.push(req.session.username);

        await story.save();

        return res.status(200).json({ success: true, msg: "Story liked." });
      }
    } catch (error) {
      next(error);
    }
  }
);

storyRouter.delete(
  "/delete/:id",
  middleware.isAuthenticated,
  async (req, res, next) => {
    try {
      const story = await Story.findById(req.params.id);

      if (!story) {
        return res
          .status(404)
          .json({ success: false, msg: "Story not found!" });
      }

      if (story.storyTeller !== req.session.username) {
        return res.status(401).json({ success: false, msg: "Unauthorized!" });
      }

      await story.remove();

      const user = await User.findOne({ username: req.session.username });

      const index = user.stories.indexOf(story.id);

      user.stories.splice(index, 1);

      await user.save();

      res.status(200).json({ success: true, msg: "Successfully deleted." });
    } catch (error) {
      next(error);
    }
  }
);

storyRouter.put(
  "/update/:id",
  middleware.isAuthenticated,
  async (req, res, next) => {
    try {
      const story = await Story.findById(req.params.id);

      if (!story) {
        return res
          .status(404)
          .json({ success: false, msg: "Story not found!" });
      }

      if (story.storyTeller !== req.session.username) {
        return res.status(401).json({ success: false, msg: "Unauthorized!" });
      }

      const { title, content } = req.body;

      const updatedStory = { title, content };

      await Story.findByIdAndUpdate(story.id, updatedStory, { new: true });

      res.status(200).json({ success: true, msg: "Successfully updated." });
    } catch (error) {
      next(error);
    }
  }
);

// adding plus updating comment
storyRouter.put(
  "/comment/:id",
  middleware.isAuthenticated,
  async (req, res, next) => {
    try {
      const story = await Story.findById(req.params.id);

      if (!story) {
        return res
          .status(404)
          .json({ success: false, msg: "Story not found!" });
      }

      let indexOfComment = -1;

      story.comments.forEach((comment, index) => {
        if (comment.user === req.session.username) {
          indexOfComment = index;
        }
      });

      if (indexOfComment !== -1) {
        story.comments[indexOfComment].comment = req.body.comment;

        await story.save();

        return res
          .status(200)
          .json({ success: true, msg: "Comment updated successfully." });
      } else {
        story.comments.push({
          user: req.session.username,
          comment: req.body.comment,
        });
        await story.save();

        return res
          .status(201)
          .json({ success: true, msg: "Comment added successfully." });
      }
    } catch (error) {
      next(error);
    }
  }
);

// delete comment
// 1. logged in user or owner of post can delete each and every comment of it's post
// 2. any user can delete his/her comment in other's post but he/she can not delete comment of other user
storyRouter.delete(
  "/delete/comment/:id",
  middleware.isAuthenticated,
  async (req, res, next) => {
    try {
      const story = await Story.findById(req.params.id);

      if (!story) {
        return res
          .status(404)
          .json({ success: false, msg: "Story not found!" });
      }

      if (story.storyTeller === req.session.username) {
        if (req.body.commentId === undefined) {
          return res
            .status(400)
            .json({ success: false, msg: "Comment id is required!" });
        }

        story.comments.forEach((comment, index) => {
          if (comment._id.toString() === req.body.commentId.toString()) {
            return story.comments.splice(index, 1);
          }
        });

        await story.save();

        return res
          .status(200)
          .json({ success: true, msg: "Selected comment has deleted." });
      } else {
        story.comments.forEach((comment, index) => {
          if (comment.user === req.session.username) {
            return story.comments.splice(index, 1);
          }
        });
        await story.save();

        return res
          .status(200)
          .json({ success: true, msg: "Your comment has deleted." });
      }
    } catch (error) {
      next(error);
    }
  }
);

storyRouter.get("/", async (req, res, next) => {
  try {
    const stories = await Story.find();

    res.status(200).json(stories);
  } catch (error) {
    next(error);
  }
});

module.exports = storyRouter;
