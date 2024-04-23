const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const verifyToken = require("../middleswares/verifyToken");

const ProfileModel = require("../models/Profile");
const photosUpload = require("../middleswares/photosUpload");

const profileRouter = express.Router();

// Complete Profile by updating
profileRouter.put("/update/:profileId", verifyToken, (req, res) => {
  photosUpload(
    req,
    res,
    expressAsyncHandler(async (err) => {
      if (err) {
        console.log(err);
        return res.send({
          message: "Error Occured while uploading the images",
          status: 11,
        });
      } else {
        // console.log(req.files);
        const profileId = req.params.profileId;
        const profile = JSON.parse(req.body.user);
        profile.photos = req.files.map((file) => file.filename);
        // console.log(profile);

        // const profile = req.body;

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
      }
    })
  );
});

module.exports = profileRouter;
