const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  photo: { type: String, required: true },
  profile: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("User", userSchema);
