// Using Noramalizaiton (using references) -> Consistency

let aurthors = {
  name: "Mosh",
};

let courses = {
  author: "id",
  course: "course",
};

// Using Embedded Documents (Denormalization) -> Performance

let courses_Embedded = {
  author: {
    name: "Mosh",
  },
};

// Hybrid
let author_Hybrid = {
  name: "Mosh",
  // 50 other properties
};

let courses_Hybrid = {
  author_Hybrid: {
    id: "ref",
    name: "Mosh",
  },
};

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27018/Test_Server")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const Author = mongoose.model(
  "Author",
  new mongoose.Schema({
    name: String,
    bio: String,
    website: String,
  })
);

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
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
  const courses = await Course.find()
    .populate("author", "name -_id")
    .select("name author");
  console.log(courses);
}

create_Author("Dalton", "Dalton bio", "Dalton Website");
create_Course("How Dalton Lives", "67a09d46c2bd15d65dc7accb");

list_Courses();

app.listen(port, () => console.log(`Listening on port ${port}...`));
