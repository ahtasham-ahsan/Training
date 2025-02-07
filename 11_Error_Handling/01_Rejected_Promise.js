const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

app.use(express.json());
mongoose.connect("mongodb://localhost:27018/Tester");

const Test_schema = new mongoose.Schema({
  name: String,
  courseTitle: String,
});

const Test_Model = mongoose.model("Test", Test_schema);

app.get("/", async (req, res) => {
  try {
    const courses = await Test_Model.find();
    res.send(courses);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port);
