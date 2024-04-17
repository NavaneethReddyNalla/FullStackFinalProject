const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const verifyToken = require("../middleswares/verifyToken");

const ProfileModel = require("../models/Profile");

const profileRouter = express.Router();

// Complete Profile by updating
profileRouter.put(
  "/update/:profileId",
  verifyToken,
  expressAsyncHandler(async (req, res) => {
    const profileId = req.params.profileId;
    const profile = req.body;
    const dbProfile = await ProfileModel.findByIdAndUpdate(
      profileId,
      { ...profile, profileComplete: true },
      {
        new: true,
      }
    );

    delete dbProfile.__v;
    delete dbProfile.user;

    res.send({ message: "Profile Updated", status: 7, profile: dbProfile });
  })
);

module.exports = profileRouter;