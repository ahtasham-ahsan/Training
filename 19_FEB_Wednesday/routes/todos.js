const express = require("express");
const pool = require("../db"); 
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todos");
    res.render("index", { todos: allTodos.rows });
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/todo", (req, res) => {
  res.render("addTodo");
});

router.post("/todos", async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todos (title, description, completed) VALUES($1, $2, $3) RETURNING *",
      [title, description, completed]
    );
    res.redirect("/");
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/todos/:id/edit", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todos WHERE id = $1", [id]);
    res.render("editTodo", { todo: todo.rows[0] });
  } catch (err) {
    console.error(err.message);
  }
});
router.post("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    await pool.query(
      "UPDATE todos SET title = $1, description = $2, completed = $3 WHERE id = $4",
      [title, description, completed, id]
    );
    res.redirect("/");
  } catch (err) {
    console.error(err.message);
  }
});

router.post("/todos/:id/delete", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todos WHERE id = $1", [id]);

    await pool.query("DELETE FROM todos WHERE id = $1", [id]);

    res.send(`
      <script>
        alert('Todo Deleted\\nTitle: ${todo.rows[0].title}');
        window.location.href = '/';
      </script>
    `);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
