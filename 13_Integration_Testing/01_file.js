const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27018/integration_tests").then(() => {
  console.log("Connected to Mongo");
});

app.use(express.json());

const test_Schema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const test_Model = mongoose.model("TestModel", test_Schema);

app.get("/", async (req, res) => {
  const resp = await test_Model.find();
  res.send(resp);
});

app.post("/add", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const age = req.body.age;
  // const { name, email, age } = req.body;
  const new_Test_case = new test_Model({
    name: name,
    email: email,
    age: age,
  });

  const resp = await new_Test_case.save();
  res.send(resp);
});

const server = app.listen(port);
exports.server = server;
exports.app = app;
exports.test_Model = test_Model;
