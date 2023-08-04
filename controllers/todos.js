// controllers/todos.js

const Todo = require('../models/todo')

module.exports = {
    index,
    show,
    new: newTodo,
    create,
    delete: deleteTodo,
    edit,
    update
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
    console.log(req.body) //req.body is an object with todo property. the property is named todo because in our form, our input button had a name of todo. Whatever is submitted the req.body will contain a property for it
    Todo.create(req.body)
    res.redirect('/todos') //res.redirect tells the browser to make a new get request. We want the user to see the page of all todos after submiting form hence '/todos'
  }

  function deleteTodo(req,res){
    Todo.deleteTodoFromData(req.params.id)
    res.redirect('/todos');
  }

  function edit(req,res){
    const todo = Todo.getOne(req.params.id)
    // console.log("humayun",req.body) //req.body is an object and has a property for the "name" in input 
    res.render('todos/edit', {
      title: 'Edit To-Do',
      todo
    })
  }
  
  function update(req,res) {
    req.body.done = !!req.body.done;
    Todo.update(req.params.id, req.body);
    //redirect always makes a GET request. we need the redirect to go to the individual show page. the route for that is /todos/:id. Though we need to substitute the :id with req.params.id
    res.redirect(`/todos/${req.params.id}`)
  }