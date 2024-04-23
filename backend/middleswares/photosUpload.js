const path = require("path");
const multer = require("multer");
process.loadEnvFile(".env");

const photosStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    const username = req.body.username;
    const destination = path.join(
      __dirname,
      `../static/images/photos/${username}`
    );
    callback(null, destination);
  },
  filename: (req, file, callback) => {
    const imageName = Date.now() + path.extname(file);
    callback(null, imageName);
  },
});

const photosUpload = multer({
  storage: photosStorage,
}).array("photos");

module.exports = photosUpload;
