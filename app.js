var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

/** Setting default environment as development */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function (req, res, next) {
    const error = new ApplicationError.NotFound('Path Not Found');
    error.statusCode = 404;
    next(error);
});

app.use(errorHandler);

app.listen(config[process.env.NODE_ENV].port, function () {
    console.log("server started at port: " + config[process.env.NODE_ENV].port);
});

module.exports = app;
