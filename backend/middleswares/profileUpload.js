const path = require("path");
const multer = require("multer");
process.loadEnvFile(".env");

const profileStorage = multer.diskStorage({
  destination: path.join(__dirname, `../static/images/profile_pics`),
  filename: (req, file, callback) => {
    const imageName = req.body.username + path.extname(file.originalname);
    callback(null, imageName);
  },
});

const profileUpload = multer({
  storage: profileStorage,
  limits: { fileSize: 30 * 1024 * 1024 },
}).single("profilePic");

module.exports = profileUpload;
