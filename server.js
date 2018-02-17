// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var bodyparser = require("body-parser");
var mysql = require("mysql");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 3306;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "home" }));
app.set("view engine", "handlebars");
