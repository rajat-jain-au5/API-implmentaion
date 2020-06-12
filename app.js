var express = require('express');
var path = require('path');

var logger = require('morgan');

var articleRouter = require('./routes/article');
var usersRouter = require('./routes/users');
var cors = require('cors')
var app = express();
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use("/", articleRouter);
app.use('/', usersRouter);

module.exports = app;
