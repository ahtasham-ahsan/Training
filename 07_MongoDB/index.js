// const mongoose = require("mongoose");

// const uri = "mongodb+srv://muhammadahtasham:ThtYfE25MVtmmIvw@cluster0.vv2zn.mongodb.net/playground?retryWrites=true&w=majority&appName=Cluster0";

// // Define a simple schema
// const playgroundSchema = new mongoose.Schema({
//   name: String,
//   createdAt: { type: Date, default: Date .now },
// });

// // Create a model (this creates the "playground" collection)
// const Playground = mongoose.model("Playground", playgroundSchema);

// async function connectDB() {
//   try {
//     await mongoose.connect(uri);
//     console.log("Connected to MongoDB (playground) successfully!");

//     // // Insert a test document (MongoDB auto-creates the collection)
//     // const doc = new Playground({ name: "Test Entry" });
//     // await doc.save();
//     console.log("Document inserted into 'playground' collection:");
//   } catch (err) {
//     console.error("Could not connect to MongoDB:", err);
//   } finally {
//     // Close the connection (optional)
//     await mongoose.disconnect();
//     console.log("MongoDB connection closed.");
//   }
// }

// // Run the function
// connectDB().catch(console.error);

// import mongoose from 'mongoose';
// import express from 'express';
// // const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// let a = await mongoose.connect('mongodb://localhost:27017');
// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });

const e = require("express");
const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/test", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
mongoose.connect('mongodb://localhost:27017/playground');
const user_Schema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  date: {
    type: Date,
    default: Date.now,
  }
});

const user = mongoose.model("User", user_Schema); // User is the name of the collection

const new_User = new user({
  name: "Ahtasham",
  email: "ahtasham@gmail.com",
  age: 22,
});
new_User
  .save()
  .then(() => {
    console.log("User added");
  })
  .catch((err) => {
    console.log(err);
  });

// async function run() {
//   const newUSER = new user({
//     name: "Ali",
//     email: "",
//     age: 22,
//   });
//   await newUSER.save(); 
//   console.log(newUSER, "User added");
// }

// run();

async function get_User() {
    /*
        Comparision Query Operators
        gt --> greater than
        gte --> greater than or equal to
        lt --> less than
        lte --> less than or equal to
        eq --> equal to
        ne --> not equal to
        in --> in
        nin --> not in
    */
  const users = await user.find({ name: "Ahtasham", age: 22 })
  .limit(1)
  .sort({ name: 1 })
  .select({ email: 1 });
  console.log(users);
}
get_User();

async function logical_Operators() {
    // 0r and
    const find_User = await user.find().or([{ name: "Ahtasham" }, { age: 11 }]);
    console.log(find_User);
}
logical_Operators();

async function regular_Expression() {
    const find_User = await user.find({ name: /^A/ });
    console.log(find_User);
}
regular_Expression();