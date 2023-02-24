const express = require("express");

const config = require("./utils/config");

const app = express();

app.use(express.json());

config.databaseConnection();

app.get("/", (req, res) => {
  res.status(400).send("Hello Software engineer!!");
});

module.exports = app;
