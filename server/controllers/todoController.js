const Todo = require("../models/Todo");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createTodo = async (req, res) => {
  const newTodo = new Todo(req.body);
  try {
    await newTodo.save();
    res.status(200).send(newTodo);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateTodo = async (req, res) => {
  try {
    await Todo.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json("todo updated");
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json("todo deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
