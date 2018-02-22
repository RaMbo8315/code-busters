var db = require("../models/tickets");

module.exports = {
   updateTicket:  function (req, res) {
    db.Tickets.update(req.body, {
        where: {
            assigned_to: req.body
        }
    }).then(function (dbTicket) {
        res.json(dbTicket);
    });
},

    createTicket: function (req, res) {
        db.Tickets.create({
            name: req.body.name,
            address: req.body.address,
            phoneNumber: req.body.PhoneNumber,
            service: req.body.service,
        }).then(function (dbTicket) {
            res.json(dbTicket);
        });
    }
}