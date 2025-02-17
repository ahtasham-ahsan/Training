require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const url = cloudinary.url("thisisapublicurlIamGivinGtothisImage", {
  transformation: [{ fetch_format: "auto" }],
});
console.log(url);

(async function(){
  const result = await cloudinary.uploader.upload('./images/')
  console.log(result);
}
)();