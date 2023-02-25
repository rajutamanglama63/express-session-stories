const logger = require("./logger");

const unknownEndPoint = (req, res, next) => {
  res.status(404).json({ err: "unknown endpoint" });
};

const errorHandler = (err, req, res, next) => {
  logger.error(err.message);

  if (err.name === "CastError") {
    res.status(400).send({ err: "malformatted id" });
  } else if (err.name === "ValidationError") {
    res.status(400).send({ err: err.message });
  }

  next(err);
};

const isAuthenticated = (req, res, next) => {
  if (req.session.isAuth) {
    next();
  } else {
    return res.status(401).json({ msg: "Authentication error!" });
  }
};

module.exports = {
  unknownEndPoint,
  errorHandler,
  isAuthenticated,
};
