
var express = require("express");
var bodyparser = require("body-parser");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");


app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "home" }));
app.set("view engine", "handlebars");

require("./routes/api-route.js")(app);
require("./routes/html-route.js")(app);

db.sequilize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listing on Port " + PORT);
    });
});
