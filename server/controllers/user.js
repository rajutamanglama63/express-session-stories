const express = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/User");
const middleware = require("../utils/middleware");

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

    res
      .status(201)
      .json({ success: true, msg: "User successfully registered.", newUser });
  } catch (error) {
    next(error);
  }
});

userRouter.post("/signin", async (req, res, next) => {
  console.log("res: ", res.body);
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "All fields are required!" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "User not found!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials!" });
    }

    req.session.isAuth = true;
    req.session.id = user.id;
    req.session.username = user.username;

    res.status(200).json({
      success: true,
      msg: "Successfully logged in.",
      user: user,
    });
  } catch (error) {
    next(error);
  }
});

userRouter.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).populate("stories");

    console.log("logged user: ", user);

    res.status(200).json({ success: true, user: user });
  } catch (error) {
    next(error);
  }
});

userRouter.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ msg: err.message });
    } else {
      return res.status(200).json({ msg: "Logout successfully." });
    }
  });
});

module.exports = userRouter;
