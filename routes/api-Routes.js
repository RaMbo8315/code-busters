var db = require("../models/tickets");

module.exports = function (app) {
    app.get("/api/admin", function (req, res) {
        db.Tickets.findAll({}).then(function (dbTicket) {
            res.json(dbTicket);
        });
    });

    app.post("/api/admin", function (req, res) {
        db.Tickets.create({
            name: req.body.name,
            address: req.body.address,
            phoneNumber: req.body.PhoneNumber,
            service: req.body.service,
        }).then(function (dbTicket) {
            res.json(dbTicket);
        });
    });

    app.put("/api/admin", function (req, res) {
        db.Tickets.update(req.body, {
            where: {
                assigned_to: req.body
            }
        }).then(function (dbTicket) {
            res.json(dbTicket);
        });
    });

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
