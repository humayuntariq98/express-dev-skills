// controllers/todos.js

const Todo = require('../models/todo')

module.exports = {
    index,
    show
  };
  

function index(req, res) {
    res.render('todos/index', {
      todos: Todo.getAll(),
      heading: "List of All Todos",
      title: 'All To-Dos'
    });
  }

  function show(req, res) {
    res.render('todos/show', {
    todo: Todo.getOne(req.params.id),
    title: (Todo.getOne(req.params.id)).todo
    });
  }
 
