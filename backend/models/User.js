const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  password: { type: String, required: true },
  photo: { type: String, required: true },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
    unique: true,
  },
});

userSchema.plugin(uniqueValidator, { message: "{PATH} must be unique" });

module.exports = mongoose.model("User", userSchema);
