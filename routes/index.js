var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const title = "Express To Do"
  res.render('index', { title: 'Express To-Do' });
});

module.exports = router;
