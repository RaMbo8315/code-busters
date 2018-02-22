
module.exports = {
    renderClient: function(req, res){
        res.render("index");
    },
    renderAdmin: function(req, res){
        res.render("admin");
    }
};