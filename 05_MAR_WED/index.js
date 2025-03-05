const express = require("express");
const connectDB = require("./config/db");
const healthRouter = require("./routes/healthRouter");
const todoRouter = require("./routes/todoRouter");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.use("/health", healthRouter);
app.use("/todos", todoRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
