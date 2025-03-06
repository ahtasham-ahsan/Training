const mongoose = require("mongoose");

// User Model
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  emailAddress: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  verificationCode: { type: Number }
});

const User = mongoose.model("User", userSchema);
module.exports = User;