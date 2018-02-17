 var Controllers = require("../controllers");

 module.exports = function(app){
   app.get("/admin", Controllers.adminHome);
 };

 module.exports = function(app) {
   app.get("/user", Controllers.userHome);
 };

 module.exports = function(app) {
  app.get("/agent", Controllers.agentHome);
};
