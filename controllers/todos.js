// controllers/todos.js

const Todo = require('../models/todo')

module.exports = {
    index,
    show
  };
  

function index(req, res) {
    res.render('todos/index', {
      todos: Todo.getAll()
    });
  }

  function show(req, res) {
    console.log("dsdsd", Todo.getOne(req.params.id))
    res.render('todos/show', {
      todo: Todo.getOne(req.params.id),
    });
  }
 