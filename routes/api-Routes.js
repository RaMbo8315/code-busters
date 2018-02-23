var dataControllers = require("../controllers/data");

module.exports = function (app) {
    // need to set up ticket controller for create
    app.post("/api/admin", dataControllers.createTicket);

    app.put("/api/admin", dataControllers.updateTicket);

    app.get("/api/admin", dataControllers.findTicket);

    app.get("/api/admin", dataControllers.allTickets);

    app.post("/api/createAgents", dataControllers.createTech);

    app.post("/api/createClient", dataControllers.createClient)

    app.get("/api/createClient", dataControllers.allClients)

    app.get("/api/createClient", dataControllers.findClient)
}
