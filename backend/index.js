const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/todoapplication");

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: { type: Date, default: Date.now },
});

const Todo = mongoose.model("Todo", TodoSchema);

app.get("/todos", async (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  const todos = await Todo.find()
    .skip((page - 1) * limit)
    .limit(Number(limit));
  const total = await Todo.countDocuments();
  res.json({ todos, total });
});

app.get("/todos/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  res.json(todo);
});

app.post("/todos", async (req, res) => {
  const todo = new Todo(req.body);
  await todo.save();
  res.json(todo);
});

app.put("/todos/:id", async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

app.delete("/todos/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

app.listen(5000, () => console.log("Backend running at http://localhost:5000"));
