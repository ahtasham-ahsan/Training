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

  user = new User(
    _.pick(req.body, ["name", "email", "password"])
    // {
    // name: req.body.name,
    // email: req.body.email,
    // password: req.body.password,
    //   }
  );
  await user.save();

  //   _.pick(user, ['name', 'email']);

  res.send(_.pick(user, ["name", "email", "_id"]));
  //   res.send({
  //     name: user.name,
  //     email: user.email
  //   }); // One way of hiding password from user.
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
