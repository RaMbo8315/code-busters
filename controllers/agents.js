var db = require("../models/tickets");

module.exports = {
    createAgent: function (req, res) {
        db.Tickets.create({
            name: req.body.name,
            phone_number: req.body.phone_number,
            user_name: req.body.user_name,
            password: re.body.password
        }).then(function (dbTicket) {
            res.json(dbAgent);
        });
    },
}