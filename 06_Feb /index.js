const express = require("express");
const app = express();
const hospital_Routes = require("./Routes/Hospital_Routes");
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27018/Hospital", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Mongoose");
  })
  .catch((err) => console.error(err));

app.use("/hospital", hospital_Routes);
// app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Hospital");
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
