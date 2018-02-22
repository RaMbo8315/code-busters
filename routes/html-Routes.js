 var homeControllers = require("../controllers/login");

 module.exports = function(app){
<<<<<<< HEAD
   app.get("home", homeControllers.renderUser);
=======
   app.get("/home", homeControllers.renderHome);
>>>>>>> f16cd6037201ec8ce87aec8318d6b16fbba39b3c
 
   app.get("/admin", adminControllers.renderAdmin);
 };

//  module.exports = function(app) {
//   app.get("/agent", Controllers.agentHome);
// };
