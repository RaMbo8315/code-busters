var ticketControllers = require("../controllers/tickets");

module.exports = function (app) {
    app.get("/api/admin", function (req, res) {
        db.Tickets.findAll({}).then(function (dbTicket) {
            res.json(dbTicket);
        });
    });

    // need to set up ticket controllerfor create
    app.post("/api/admin", ticketControllers.createTicket);

    app.put("/api/admin", ticketControllers.updateTicket);

    app.get("/api/admin", function (req, res) {
        db.Tickets.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbTicket) {
            res.json(dbTicket);
        });
    });
}
