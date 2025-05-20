// for env variables
require("dotenv").config();
const mongoose = require("mongoose");

// connection to mongo db server
const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_DB_URI);
    if (connection) {
      console.log("Connected to mongo db");
    }
  } catch (error) {
    console.log("error while connecting server");
  }
};

module.exports = dbConnect;
