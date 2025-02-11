const express = require("express");
const app = express();
const mongoose = require("mongoose");
async function startServer() {
  try {
    await mongoose.connect("mongodb://localhost:27018/integration_tests");
    console.log("Connected to MongoDB server");

    const port = process.env.PORT || 3000;
    const server = app.listen(port, () =>
      console.log(`Listening on port ${port}...`)
    );

    module.exports = server;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
}

startServer();

const test_schemas = new mongoose.Schema({
  name: String,
  age: Number,
  contact: Number,
});

const testModel = mongoose.model("testModel", test_schemas);

app.get("/", (req, res) => {
  const test = testModel.find();
  res.status(200).send(test);
});

app.post("/add", async (req, res) => {
  const { name, age, contact } = req.params;
  const new_test = new testModel({
    name: name,
    age: age,
    contact: contact,
  });

  const response = await new_test.save();
  res.send(response);
});
