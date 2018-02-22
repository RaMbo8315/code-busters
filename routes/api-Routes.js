var ticketControllers = require("../controllers/tickets");
var agentControllers = require("../controllers/agents");

module.exports = function (app) {
    app.get("/api/admin", allTickets);

    // need to set up ticket controller for create
    app.post("/api/admin", ticketControllers.createTicket);

    app.put("/api/admin", ticketControllers.updateTicket);

    app.get("/api/admin", findTicket);

    app.post("/api/agents", createAgent)
}
