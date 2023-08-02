var express = require('express');
var router = express.Router();
var todosController = require('../controllers/todos')


 // All actual paths start with "/todos"
 router.get('/', todosController.index)
 router.get('/:id', todosController.show);


module.exports = router;
