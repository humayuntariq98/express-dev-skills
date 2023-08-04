// controllers/todos.js

const Todo = require('../models/todo')

module.exports = {
    index,
    show,
    new: newTodo,
    create,
    delete: deleteTodo
  };
  

function index(req, res) {
    res.render('todos/index', {
      todos: Todo.getAll(),
      heading: "List of All Todos",
      title: 'All To-Dos',
    });
  }

  function show(req, res) {
    res.render('todos/show', {
    todo: Todo.getOne(req.params.id),
    title: (Todo.getOne(req.params.id)).todo
    });
  }
 
  function newTodo (req,res) {
    res.render('todos/new', {
      title: "New To-Do"
    })
  }

  function create(req,res){
    console.log(req.body) //req.body is a function with todo property. the property is named todo because in our form, our input button had a name of todo.
    Todo.create(req.body)
    res.redirect('/todos') //res.redirect tells the browser to make a new get request. We want the user to see the page of all todos after submiting form hence '/todos'
  }

  function deleteTodo(req,res){
    Todo.deleteTodoFromData(req.params.id)
    res.redirect('/todos');
  }

  