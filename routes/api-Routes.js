var dataControllers = require("../controllers/data");

module.exports = function (app) {
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
}
