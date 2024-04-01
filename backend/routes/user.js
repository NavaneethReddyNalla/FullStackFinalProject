const express = require("express");
const expressAsyncHandler = require("express-async-handler");

const userModel = require("../models/User");

const userRouter = express.Router();

userRouter.post(
  "/new-user",
  expressAsyncHandler(async (req, res) => {
    const newUser = req.body;
  })
);

module.exports = userRouter;
