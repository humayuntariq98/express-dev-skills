var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override')

var indexRouter = require('./routes/index');
var todosRouter = require('./routes/todos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//custom middleware example
//req and res are express objects
//res.locals -> locals is an object inside the res object.
//with res.locals.time, we are adding a time property to the locals object inside res.
app.use(function(req,res,next){
  res.locals.time = new Date().toLocaleTimeString();
  next()
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//query parameters (req.query) are ways of sending additional information to the server using the URL while not impacting routing.
//query parameters are seperated using & sign.
//todos/?sort=name   (query parameter starts after the question mark. has a propety of sort which is assigned to name)
app.use(methodOverride("_method"));
//mounting the router for the root route. 
app.use('/', indexRouter);
//mounting the router for the todos route.
app.use('/todos', todosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
