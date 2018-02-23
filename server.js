var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


require("./routes/api-Routes.js")(app);
require("./routes/html-Routes.js")(app);

db.sequelize.sync({force: true}).then(function () {
    app.listen(PORT, function () {
        console.log("App listing on Port " + PORT);
    });
});