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

      res
        .status(201)
        .json({ msg: "Story successfully created.", story: newStory });
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
