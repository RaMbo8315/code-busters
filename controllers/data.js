var db = require("../models");

module.exports = {
    updateTicket: function (req, res) {
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
            assigned_to: req.body.assigned_to,
            service: req.body.service,
            comments: req.body.comments,
            inStatus: re.body.inStatus,
            complete: req.body.complete
        }).then(function (dbTicket) {
            res.json(dbTicket);
        });
    },

    findTicket: function (req, res) {
        db.Tickets.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbTicket) {
            res.json(dbTicket);
        });
    },

    allTickets: function (req, res) {
        db.Tickets.findAll({}).then(function (dbTicket) {
            res.json(dbTicket);
        });
    },

    createTech: function (req, res) {
        db.Techs.create({
            name: req.body.name,
            phone_number: req.body.phone_number,
            user_name: req.body.user_name,
            password: re.body.password
        }).then(function (dbTicket) {
            res.json(dbAgent);
        });
    },

    createClient: function (req, res) {
        db.Clients.create({
            name: req.body.name,
            address: req.body.address,
            phone_number: req.body.phone_number,
            user_name: req.body.user_name,
            password: re.body.password
        }).then(function (dbClient) {
            res.json(dbClient);
        });
    },

    allClients: function (req, res) {
        db.Clients.findAll({}).then(function (dbClients) {
            res.json(dbClients);
        });
    },

    findClient: function (req, res) {
        db.Tickets.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbTicket) {
            res.json(dbTicket);
        });
    },
}