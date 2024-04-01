const express = require("express");
const userRouter = express.Router();

userRouter.get("/test", (req, res) => res.send({ message: "Route Working" }));

userRouter.post("/test", (req, res) => {
  res.send({ message: "echo", payload: req.body });
});

module.exports = userRouter;
