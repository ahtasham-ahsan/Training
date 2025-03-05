const express = require("express");
const Todo = require("../models/Todo");

const router = express.Router();
router.post("/", async (req, res) => {
    try {
        const { title, description, status } = req.body;

        if (!title || !description) {
            return res.status(400).json({ message: "Title and description are required" });
        }

        const newTodo = new Todo({ title, description, status });
        await newTodo.save();

        res.status(201).json({ message: "Todo created successfully!", todo: newTodo });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const todos = await Todo.find(); 
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

module.exports = router;