const express = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

const userRouter = express.Router();

userRouter.post("/signup", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ msg: "All fields are required!" });
    }

    let userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "User already exist!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hassedPswd = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hassedPswd,
    });

    newUser.save();

    res.status(201).json({ newUser });
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
