const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");
process.loadEnvFile(".env");

// Multer Storage
let imageName = "";
const storage = multer.diskStorage({
  destination: path.join(__dirname, "./static/images"),
  filename: (req, file, callback) => {
    imageName = req.body.username + path.extname(file.originalname);
    callback(null, imageName);
  },
});

// Multer Upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 104857600 },
}).single("profile");

const port = process.env.PORT || 4000;

// Global Middleware
app.use(express.json());

// Static Files
app.use("/images", express.static("./static/images"));

app.get("/", (req, res) => res.send("Hello"));

// Upload test route
app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
      res.send({ message: "Error Occured: " + err.message });
    } else {
      res.send({
        message: "Image Uploaded",
        url: `http://localhost:${port}/images/${imageName}`,
      });
    }
  });
});

app.listen(port, () => console.log(`Server live on http://localhost:${port}`));
