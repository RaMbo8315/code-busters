
module.exports = {
    renderClient: function(req, res){
        res.render("index", {css: ['style.css']});
    },
    renderAdmin: function(req, res){
        res.render("admin", {css: ['style.css']});
    },
    renderAdminDash: function(req, res){
        res.render("dashboard", {css: ['styles.css', 'bootstrap.min.css']});
    }
};