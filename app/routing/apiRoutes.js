
var db = require("../models");

module.exports = function(app) {
    app.get("/api/admin", function(req, res) {
        db.Tickets.findAll({}).then(function(dbTicket){
            res.json(dbTicket);
        });
    });

    app.post("/api/admin", function(req, res){
        db.Ticket.create({
            name: req.body.name,
            address: req.body.address,
            phoneNumber: req.body.PhoneNumber,
            service: req.body.service,
        });
    });

    app.put("/api/admin", function(req, res){
        db.Ticket.update({
            where: {
                body: req.body
            }
        });
    });

    app.get("/api/admin", function(req, res){
        db.ticket.findOne({
        
        })
    })
}