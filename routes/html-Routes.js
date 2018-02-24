 var loginControllers = require("../controllers/login");
 var passport = require("passport");

 module.exports = function (app, passport) {

  //  app.get('/signup', authController.signup);


   app.get('/signin', loginControllers.renderAdmin);

   app.post('/signup', passport.authenticate('local-signup', {
       successRedirect: '/dashboard',

       //  failureRedirect: '/signup'
     }

   ));

   app.post('/signin', passport.authenticate('local-signin', {
       successRedirect: '/dashboard',

       failureRedirect: '/signin'
     }

   ));

   app.get("/", loginControllers.renderClient);

   app.get("/admin", loginControllers.renderAdmin);

   app.get("/dashboard", loginControllers.renderAdminDash);

   app.get("/clientdashboard", loginControllers.renderClientDash);

   function isLoggedIn(req, res, next) {
 
    if (req.isAuthenticated())

        return next();

    res.redirect('/signin');

}

 };

 //  module.exports = function(app) {
 //   app.get("/agent", Controllers.agentHome);
 // };