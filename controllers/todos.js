// controllers/todos.js

const Todo = require('../models/todo')

module.exports = {
    index
  };
  

function index(req, res) {
    res.render('todos/index', {
      todos: Todo.getAll()
    });
  }
 