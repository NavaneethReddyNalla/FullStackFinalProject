const express = require("express");
const app = express();
process.loadEnvFile(".env");

const port = process.env.PORT || 4000;

app.get("/", (req, res) => res.send("Hello"));

app.listen(port, () => console.log(`Server Listening on port ${port}`));
