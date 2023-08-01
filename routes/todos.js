var express = require('express');
var router = express.Router();
var todoController = require('../controllers/todos')


 // All actual paths start with "/todos"
 router.get('/', todoController.index)


module.exports = router;
