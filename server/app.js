const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const config = require("./utils/config");
const middleware = require("./utils/middleware");
const userController = require("./controllers/user");

const app = express();

dotenv.config();

config.databaseConnection();

const store = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "mySessions",
});

app.use(express.json());

app.use(
  session({
    secret: config.SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use(middleware.isAuthenticated);

app.use("/api/user", userController);

app.use(middleware.unknownEndPoint);

app.use(middleware.errorHandler);

module.exports = app;
