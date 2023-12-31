var express = require('express');
var router = express.Router();
var todosController = require('../controllers/todos');
const todos = require('../controllers/todos');


 // All actual paths start with "/todos"
 //path 1: for main page of todos which 
 router.get('/', todosController.index);

//Path 3: new todo route
router.get('/new', todosController.new);

 //path 2: for showing individual todos once they are clicked
 router.get('/:id', todosController.show);

 //path 4: for creating the todo added through new functionality(path in step 3)
 router.post('/', todosController.create);

 //path 5: deleting a todo. since method has been changed to delete by method override, use router.delete
 router.delete('/:id', todosController.delete)

 //path 6: editing a single todo
 router.get('/:id/edit', todosController.edit)

 //path 7: updating a todo
 router.put('/:id', todosController.update)


module.exports = router;

//editing a particular resource
// router.get('/:id/edit', todosController.edit)