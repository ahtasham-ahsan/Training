import AWS from 'aws-sdk';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config(); // Load .env file

// Configure AWS
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION // e.g., "us-east-1"
});

// Create an S3 instance
const s3 = new AWS.S3();

// File to upload
const filePath = path.resolve('TECHNOLOGY.pdf');  // Change file path as needed
const fileStream = fs.createReadStream(filePath);
const fileName = path.basename(filePath);

// Upload parameters
const uploadParams = {
    Bucket: process.env.AWS_BUCKET_NAME,  // Replace with your bucket name
    Key: `uploads/${fileName}`,  // File path inside S3
    Body: fileStream,
    ContentType: 'application/pdf',  // Adjust for other file types
};

// Upload function
const uploadFile = async () => {
    try {
        const data = await s3.upload(uploadParams).promise();
        console.log('File uploaded successfully:', data.Location);
    } catch (err) {
        console.error('Error uploading file:', err);
    }
};

uploadFile();





// ------------------------------------------------------------------------------------------------
// const AWS = require('aws-sdk');
// const S3 = new AWS.S3();

// (async () => {
//     await s3.putObject({
//         Body: "Hello World!",
//         Bucket: "bucket-name",
//         Key: "Name-of-File"
//    }).promise();
// })();