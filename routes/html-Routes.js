 var homeControllers = require("../controllers/home");
 var adminControllers = require("../controllers/admin");

 module.exports = function(app){
   app.get("/home", homeControllers.renderHome);
 
   app.get("/admin", adminControllers.renderAdmin);
 };

//  module.exports = function(app) {
//   app.get("/agent", Controllers.agentHome);
// };
