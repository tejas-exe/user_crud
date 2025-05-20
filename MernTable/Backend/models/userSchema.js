const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email is a required field"],
  },
  mobile: {
    type: String,
    required: [true, "Mobile no is required"],
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Users", userSchema);
