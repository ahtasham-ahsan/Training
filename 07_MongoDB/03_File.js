const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:28017/course");

const course_Schema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  data: {
    type: Date,
    default: 2000,
  },
  isPublished: Boolean,
  price: Number,
});

const course = mongoose.model("Course", course_Schema);

async function createCourse() {
  const new_course = new course({
    name: "Node.js",
    price: 10,
    author: "Dr ABC",
    tags: ["node", "backend"],
    isPublished: true,
  });
  const result = await new_course.save();
  console.log(result);
}
async function getCourses() {
  const courses = await course
    .find({ author: "Dr ABC", isPublished: true })
    .or([{ price: { $gte: 15 } }, { name: /.*by.*/i }])
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}
async function updateCourse(id) {
  const courses = await course.findById(id);
  if (!courses) return;
  courses.isPublished = true;
  courses.author = "Dr XYZ";
  courses.set({
    name: "Python",
    price: 20,
  });

  const result = await course.save();
  console.log(result);
}
updateCourse("5f3b3b3b3b3b3b3b3b3b3b3b");
