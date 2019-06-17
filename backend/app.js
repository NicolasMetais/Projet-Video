//my modules
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

//redirect in my routes folder
var authoRoute = require('./routes/routes');

//
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//i use express on my routes folder
authoRoute(app);

//exports my app to use it in other folders
module.exports = app;