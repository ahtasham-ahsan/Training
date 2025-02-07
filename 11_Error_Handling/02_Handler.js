const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

app.use(express.json());
mongoose.connect("mongodb://localhost:27018/Tester");

app.use(function (err, req, res, next) {
  res.status(500).send("Something went wrong. " + err.message);
});

const Test_schema = new mongoose.Schema({
  name: String,
  courseTitle: String,
});

const Test_Model = mongoose.model("Test", Test_schema);

function asyn_Middle_Ware(handler) {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (err) {
      next(err);
    }
  };
}
app.get(
  "/",
  asyn_Middle_Ware(async (req, res, next) => {
    const courses = await Test_Model.find();
    res.send(courses);
    // res.status(500).send(err);
  })
);

app.listen(port);
