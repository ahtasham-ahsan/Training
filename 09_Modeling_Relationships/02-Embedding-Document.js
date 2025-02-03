const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

mongoose
  .connect("mongodb://localhost:27018/Author_Server")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const Author_Schema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String,
});

const Author = mongoose.model("Author", Author_Schema);

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    author: Author_Schema,
  })
);

async function create_Author(name, bio, website) {
  const author = new Author({
    name,
    bio,
    website,
  });
  const result = await author.save();
  console.log(result);
}

async function create_Course(name, author) {
  const course = new Course({
    name,
    author,
  });
  const result = await course.save();
  console.log(result);
}

async function list_Courses() {
  const courses = await Course.find();
  console.log(courses);
}

create_Course("Stay Hydrated", new Author({ name: "Skye" }));
async function update_Author(courseId, name) {
  const course = await Course.findById(courseId);
  course.author.name = name;
  course.save();
}

update_Author("67a0a30f9cdc22644dbe5b00", "Skye Hei");

app.listen(port, () => console.log(`Listening on port ${port}...`));
