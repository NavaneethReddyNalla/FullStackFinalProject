// Global Imports
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

// Project imports
const userRouter = require("./routes/user");
const profileRouter = require("./routes/profile");
const errorHandler = require("./middleswares/errorHandler");

// Loading  the Environment variables
process.loadEnvFile(".env");

// Connecting to the database
mongoose.connect(process.env.DB_URL);

const port = process.env.PORT || 4000;

// Serving the React project
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Global Middleware
app.use(express.json());

// Static Files
app.use("/images", express.static("./static/images"));

// Routing
app.use("/user", userRouter);
app.use("/profile", profileRouter);

// Error Handling
app.use(errorHandler);

// Listening to requests
app.listen(port, () => console.log(`Server live on http://localhost:${port}`));
