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
            inStatus: req.body.inStatus,
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
            password: req.body.password
        }).then(function (dbTech) {
            res.json(dbTech);
        });
    },

    allAdmins: function (req, res) {
        db.Admin.findAll({}).then(function (dbAdmin) {
            res.json(dbAdmin);
        });
    },

    createAdmin: function (req, res) {
        db.Admin.create({
            name: req.body.name,
            phone_number: req.body.phone_number,
            user_name: req.body.user_name,
            password: req.body.password
        }).then(function (dbAdmin) {
            res.json(dbAdmin);
        });
    },

    createClient: function (req, res) {
        db.Clients.create({
            name: "john",
            address: "6573 abercrombie ct",
            phone_number: 4074463684,
            user_name: "john@gmail.com",
            password: "jdhfjdshfj"
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