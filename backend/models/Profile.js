const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  profileComplete: { type: Boolean, default: false },
  age: Number,
  job: String,
  residenceState: String,
  maritalStatus: String,
  hairColour: String,
  eyeColour: String,
  skinComplexion: String,
  height: Number,
  weight: Number,
  horoscope: String,
  bodyBuild: String,
  foodChoice: String,
  motherTongue: String,
  highestLevelOfEducation: String,
  physicalStatus: String,
  aboutMe: String,
  aboutFamily: String,
  hobbies: String,
  salaryRange: String,
  photos: [String],
});

module.exports = mongoose.model("Profile", profileSchema);
