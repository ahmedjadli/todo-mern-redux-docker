const Todo = require("../models/todo");
const { json } = require("body-parser");

exports.createTodo = (req, res, next) => {
  const todo = new Todo(req.body);
  todo.save((err) => {
    if (err) {
      return res.status(400).json({ succuess: false, err });
    }
    return res.status(201).json({ success: true, todo });
  });
};

exports.getAllTodos = (req, res, next) => {
  Todo.find((err, todos) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true, todos });
  });
};

exports.getTodo = (req, res, next) => {
  Todo.findOne(
    {
      _id: req.params.id,
    },
    (err, todo) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, todo });
    }
  );
};

exports.updateTodo = (req, res, next) => {
  let todo = new Todo({ _id: req.params.id });
  console.log({ todo });
  todo = {
    _id: req.params.id,
    text: req.body.text,
    completed: todo.completed,
  };
  console.log({ todo });
  Todo.updateOne({ _id: req.params.id }, todo, (err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(201).json({ success: true, text: todo.text });
  });
};

exports.completeTodo = (req, res, next) => {
  let todo = Todo.findOne({ _id: req.params.id }, (err, todo) => {
    if (err) return res.status(404).json({ success: false, err });
    let edTodo = {
      _id: req.params.id,
      text: todo.text,
      completed: !todo.completed,
    };
    Todo.updateOne({ _id: req.params.id }, edTodo, (err) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(201).json({ success: true });
    });
  });
};

exports.deleteTodo = (req, res, next) => {
  Todo.deleteOne({ _id: req.params.id }, (err, todo) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true, todo });
  });
};

exports.CompleteAllTodos = (req, res, next) => {
  Todo.find((err, todos) => {
    if (err) return res.status(404).json({ success: false, err });
    const allMarked = todos.every((todo) => todo.completed);
    Todo.updateMany(null, { completed: !allMarked }, (err) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, todos });
    });
  });
};

exports.clearCompleted = (req, res, next) => {
  Todo.deleteMany({ completed: true }, (err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};
