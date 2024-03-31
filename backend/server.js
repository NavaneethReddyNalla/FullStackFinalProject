const express = require("express");
const app = express();
process.loadEnvFile(".env");

const port = process.env.PORT || 4000;

// Global Middleware
app.use(express.json());

// Static Files
app.use("/images", express.static("./static/images"));

app.listen(port, () => console.log(`Server live on http://localhost:${port}`));
