var express = require('express');
var router = express.Router();
var todosController = require('../controllers/todos')


 // All actual paths start with "/todos"
 //path 1: for main page of todos which 
 router.get('/', todosController.index)

 //path 2: for showing individual todos once they are clicked
 router.get('/:id', todosController.show);


module.exports = router;

//editing a particular resource
// router.get('/:id/edit', todosController.edit)