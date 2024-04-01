// Global Imports
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Project imports
const userRouter = require("./routes/user");
const errorHandler = require("./middleswares/errorHandler");

// Loading  the Environment variables
process.loadEnvFile(".env");

// Connecting to the database
mongoose.connect(process.env.DB_URL);

const port = process.env.PORT || 4000;

// Global Middleware
app.use(express.json());

// Static Files
app.use("/images", express.static("./static/images"));

// Routing
app.use("/user", userRouter);

// Error Handling
app.use(errorHandler);

// Listening to requests
app.listen(port, () => console.log(`Server live on http://localhost:${port}`));
