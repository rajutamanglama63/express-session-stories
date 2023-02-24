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

module.exports = {
  unknownEndPoint,
  errorHandler,
};
