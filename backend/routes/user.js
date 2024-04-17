const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
process.loadEnvFile(".env");

const UserModel = require("../models/User");
const ProfileModel = require("../models/Profile");
const verifyToken = require("../middleswares/verifyToken");
const profileUpload = require("../middleswares/profileUpload");

const userRouter = express.Router();

// User Registration
userRouter.post(
  "/new-user",
  expressAsyncHandler(async (req, res) => {
    const newUser = req.body;
    req.body.password = await bcryptjs.hash(
      req.body.password,
      +process.env.BCRYPT_SALT
    );

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

// User Login
userRouter.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    const user = req.body;

    const dbUser = await UserModel.findOne(
      {
        username: user.username,
      },
      { _id: false, __v: false }
    )
      .populate("profile", "-user -__v") // Populate the profile without the Profile user and __v
      .lean();

    if (dbUser === null)
      return res.send({ message: "User doesn't exist", status: 4 });

    const passwordCheck = await bcryptjs.compare(
      user.password,
      dbUser.password
    );

    if (!passwordCheck)
      return res.send({ message: "Password didn't match", status: 5 });

    const signedToken = jwt.sign(
      { username: user.username },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    delete dbUser.password;

    res.send({
      message: "Login Successful",
      status: 6,
      user: dbUser,
      token: signedToken,
    });
  })
);

userRouter.post("/profile-pic", (req, res) => {
  profileUpload(req, res, (err) => {
    if (err) {
      console.log(err.message);
      res.send({
        message: "Error occured while uploading the profile pic",
        status: 8,
      });
    } else {
      res.send({
        message: "Successfully uploaded",
        status: 9,
        url: `/images/profile_pics/${req.file.filename}`,
      });
    }
  });
});

// Protected route test
userRouter.get(
  "/protected",
  verifyToken,
  expressAsyncHandler(async (req, res) => {
    const users = await UserModel.find();
    res.send({ message: "All Users", payload: users });
  })
);

module.exports = userRouter;
