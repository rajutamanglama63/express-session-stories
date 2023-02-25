const express = require("express");
const Story = require("../models/Story");

const storyRouter = express.Router();

storyRouter.post("/create", async (req, res, next) => {
  try {
    const { title, content, date, likes, comments } = req.body;

    const newStory = new Story({
      title,
      content,
      date,
      likes,
      comments,
    });

    await newStory.save();

    res.status(201).json({ msg: "Story successfully created." });
  } catch (error) {
    next(error);
  }
});

module.exports = storyRouter;
