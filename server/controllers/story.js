const express = require("express");

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

      console.log("userStories: ", user);

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

      const user = await User.findById(req.session.id);

      const index = user.stories.indexOf(req.params.id);

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
storyRouter.post(
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
        if (comment.user === req.session.id) {
          indexOfComment = index;
        }
      });

      if (indexOfComment !== -1) {
        story.comments[indexOfComment] = req.body.comment;

        await story.save();

        return res
          .status(200)
          .json({ success: true, msg: "Comment updated successfully." });
      } else {
        story.comments.push({
          user: req.session.id,
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

storyRouter.get("/", async (req, res, next) => {
  try {
    const stories = await Story.find();

    res.status(200).json(stories);
  } catch (error) {
    next(error);
  }
});

module.exports = storyRouter;
