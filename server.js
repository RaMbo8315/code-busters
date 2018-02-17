var express = require("express");
var bodyparser = require("body-parser");

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

app.use(express.static("public"));

require("./routes/api-route.js")(app);
require("./routes/html-route.js")(app);

db.sequilize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listing on Port " + PORT);
    });
});