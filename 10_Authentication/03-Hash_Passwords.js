const bcrypt = require("bcrypt");
// Salt: A string that is added to the password before hashing to make the hash more secure.

async function run(password) {
  // this function returns a promise that resolves to a salt.
  const salt = await bcrypt.genSalt(10); // 10 is the number of rounds you want to use to generate the salt.
  const hashed_Pass = await bcrypt.hash(password, salt); // this function returns a promise that resolves to a hashed password.
  console.log(hashed_Pass);
}

run("121212");

// Authentication
// Login - User is what he claims to be

// Authorization
// User has permission to do what he is trying to do

const Joi = require("joi");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const _ = require("lodash");

app.use(express.json());
mongoose
  .connect("mongodb://localhost:27018/Users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => {
    console.error("Could not connect to MongoDB...", err);
  });

const User = mongoose.model(
  "Users",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
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
      minlength: 5,
      maxlength: 1024,
    },
  })
);
// const Joi = require("joi");

function validate_User(user) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(user); // ✅ Correct
}

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.post("/users", async (req, res) => {
  const { error } = validate_User(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered");
  const salt = await bcrypt.genSalt(11);
  user = new User(_.pick(req.body, ["name", "email", "password"]));
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  res.send(_.pick(user, ["name", "email", "_id"]));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
