const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const winston = require("winston");

app.use(express.json());
mongoose.connect("mongodb://localhost:27018/Tester");

winston.add(new winston.transports.File({ filename: "logfile.log" }));
app.use(function (err, req, res, next) {
  winston.log("error", err.message);
  // res.status(500).send("Something went wrong. " + err.message);
});

const Test_schema = new mongoose.Schema({
  name: String,
  courseTitle: String,
});

const Test_Model = mongoose.model("Test", Test_schema);

app.get("/", async (req, res, next) => {
  throw new Error("Couldn't connect to the server.");
  const courses = await Test_Model.find();
  res.send(courses);
  // res.status(500).send(err);
});

app.listen(port);
