var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var passport = require('passport');
var session  = require('express-session');
var env = require('dotenv').load();


var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true}));
 
app.use(passport.initialize());
 
app.use(passport.session());

app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


require("./routes/api-Routes.js")(app);
require("./routes/html-Routes.js")(app, passport);
require('./config/passport.js')(passport, db.Admin);

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listing on Port " + PORT);
    });
});