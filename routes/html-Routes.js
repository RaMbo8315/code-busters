 var homeControllers = require("../controllers/login");

 module.exports = function(app){
   app.get("home", homeControllers.renderUser);
 
   app.get("admin", adminControllers.renderAdmin);
 };

//  module.exports = function(app) {
//   app.get("/agent", Controllers.agentHome);
// };
