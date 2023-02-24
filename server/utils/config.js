const dotenv = require("dotenv");
const mongoose = require("mongoose");

const logger = require("./logger");

dotenv.config();

const PORT = process.env.PORT || 4000;

const SECRET = process.env.SECRET;

const databaseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    logger.info("MongoDB connection established...");
  } catch (error) {
    logger.error("Something went wrong with database connection!");
    process.exit(1);
  }
};

module.exports = {
  PORT,
  SECRET,
  databaseConnection,
};
