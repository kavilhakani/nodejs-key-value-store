var express = require('express');
require('dotenv').config()
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var debug = require('debug')('key_val_store_api:app');
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA
});
  var app = express();
 
  connection.connect(function(err){
  if(!err) {
    debug("Database is connected ...");  
  } else {
    debug("Error connecting database ...");  
  }
  connection.end();
  });

var object = require('./routes/object');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/object', object);

module.exports = app;
