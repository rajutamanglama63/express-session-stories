const express = require("express");

const Story = require("../models/Story");
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

storyRouter.get("/", async (req, res, next) => {
  try {
    const stories = await Story.find();

    res.status(200).json(stories);
  } catch (error) {
    next(error);
  }
});

module.exports = storyRouter;
