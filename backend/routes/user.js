const express = require("express");
const expressAsyncHandler = require("express-async-handler");

const UserModel = require("../models/User");
const ProfileModel = require("../models/Profile");

const userRouter = express.Router();

userRouter.post(
  "/new-user",
  expressAsyncHandler(async (req, res) => {
    const newUser = req.body;
    const userInstance = new UserModel(newUser);
    const profileInstance = new ProfileModel({ user: userInstance._id });
    userInstance.profile = profileInstance._id;

    try {
      await userInstance.save();
      await profileInstance.save();
    } catch (err) {
      if (err.message.includes("username")) {
        return res.send({ message: "Username already taken!", status: 2 });
      } else if (err.message.includes("email")) {
        return res.send({ message: "Email aready registered", status: 3 });
      } else {
        throw err;
      }
    }

    res.send({ message: "User Registered", status: 1 });
  })
);

module.exports = userRouter;
