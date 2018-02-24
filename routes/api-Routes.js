var dataControllers = require("../controllers/data");
var passport = require("passport");


module.exports = function (app, passport) {
    // need to set up ticket controller for create
    app.post("/api/admin", dataControllers.createTicket);

    app.put("/api/admin", dataControllers.updateTicket);

    app.get("/api/admin", dataControllers.findTicket);

    app.get("/api/admin", dataControllers.allTickets);

    app.post("/api/createTechs", dataControllers.createTech);

    app.get("/api/allAdmins", dataControllers.allAdmins);

    app.post("/api/createAdmin", dataControllers.createAdmin);

    app.post("/api/createClient", dataControllers.createClient)

    app.get("/api/allClient", dataControllers.allClients)

    app.get("/api/findClient", dataControllers.findClient)
    
    app.post("/api/signin", passport.authenticate("local-signin"), function(req, res) {
        // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
        // So we're sending the user back the route to the members page because the redirect will happen on the front end
        // They won't get this or even be able to access this page if they aren't authed
        res.json("/dashboard");
      });

}
