var createError = require('http-errors');
var path = require('path');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const express = require('express')
var app = express();

// view engine setup
app.get
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

// start server on port 3000
app.listen(5000)

module.exports = app;
 