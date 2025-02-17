require("dotenv").config();
const express = require("express");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const imageStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads/images",
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

const videoStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads/videos",
    resource_type: "video",
    allowed_formats: ["mp4", "avi", "mov"],
  },
});

const imageUpload = multer({ storage: imageStorage });
const videoUpload = multer({ storage: videoStorage });

app.set("view engine", "ejs");

// app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/image-upload", (req, res) => {
  res.render("image-upload");
});

app.get("/video-upload", (req, res) => {
  res.render("video-upload");
});

app.post("/upload-image", imageUpload.single("image"), (req, res) => {
  res.send(`Image uploaded successfully: <a href="${req.file.path}" target="_blank">${req.file.path}</a>`);
});
app.post("/upload-video", videoUpload.single("video"), (req, res) => {
  res.send(`Video uploaded successfully: <a href="${req.file.path}" target="_blank">${req.file.path}</a>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
