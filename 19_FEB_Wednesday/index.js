const express = require("express");
const cors = require("cors");
const path = require("path");
const todosRoutes = require("./routes/todos"); 

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(todosRoutes); 

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



































































































// const express = require("express");
// const cors = require("cors");
// const { Pool } = require("pg");
// require("dotenv").config();
// const path = require("path");

// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Set EJS as the view engine
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// // PostgreSQL Connection
// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

// pool.connect()
//   .then(() => console.log("Connected to PostgreSQL Successfully"))
//   .catch((err) => console.log("Error bro", err));

// // Routes
// // Display all todos
// app.get("/", async (req, res) => {
//   try {
//     const allTodos = await pool.query("SELECT * FROM todos");
//     res.render("index", { todos: allTodos.rows });
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// // Render form to add a todo
// app.get("/todo", (req, res) => {
//   res.render("addTodo");
// });

// // Create a todo
// app.post("/todos", async (req, res) => {
//   try {
//     const { title, description, completed } = req.body;
//     const newTodo = await pool.query(
//       "INSERT INTO todos (title, description, completed) VALUES($1, $2, $3) RETURNING *",
//       [title, description, completed]
//     );
//     res.redirect("/");
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// // Edit a todo (show the form pre-filled with data)
// app.get("/todos/:id/edit", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const todo = await pool.query("SELECT * FROM todos WHERE id = $1", [id]);
//     res.render("editTodo", { todo: todo.rows[0] });
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// // Update a todo
// app.post("/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, description, completed } = req.body;
//     await pool.query(
//       "UPDATE todos SET title = $1, description = $2, completed = $3 WHERE id = $4",
//       [title, description, completed, id]
//     );
//     res.redirect("/");
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// // Delete a todo
// app.post("/todos/:id/delete", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const todo = await pool.query("SELECT * FROM todos WHERE id = $1", [id]);

//     await pool.query("DELETE FROM todos WHERE id = $1", [id]);

//     res.send(`
//       <script>
//         alert('Todo Deleted\\nTitle: ${todo.rows[0].title}');
//         window.location.href = '/';
//       </script>
//     `);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });