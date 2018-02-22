 var loginControllers = require("../controllers/login");

 module.exports = function(app){
   app.get("/", loginControllers.renderClient);
 
   app.get("/admin", loginControllers.renderAdmin);

   app.get("/dashboard", loginControllers.renderAdminDash);
 };

//  module.exports = function(app) {
//   app.get("/agent", Controllers.agentHome);
// };
