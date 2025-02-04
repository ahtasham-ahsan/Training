const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27018/Test_User")
  .then(() => console.log("Connected to MongoDB..."))
  .catch(() => console.log("Could not connect to MongoDB..."));

app.get("/", (req, res) => {
  res.send("Login or Signup!");
});

const User = mongoose.model(
  "Test_User",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 1024,
    },
  })
);

async function Signup(name, email, password) {
  const result = await User.findOne({ email: email });
  if (result) return "User already registered!";
  const user = await new User({
    name: name,
    email: email,
    password: password,
  });
  await user.save();
}

app.post("/signup", async (req, res) => {
  const user = await Signup(req.body.name, req.body.email, req.body.password);
  res.send(user);
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("User not found!");
  if (user.password !== req.body.password)
    return res.status(400).send("Invalid password!");
  res.send("Login successful!");
});

app.listen(port, () => console.log("Connected to port 3000..."));
