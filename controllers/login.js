
module.exports = {
    renderClient: function(req, res){

        // exports.signup = function(req, res) {
 
        //     res.render('signup');
         
        // }

        res.render("index", {css: ['style.css']});
    },
    renderAdmin: function(req, res){
        res.render("admin", {css: ['style.css']});
    },
    renderAdminDash: function(req, res){
        res.render("dashboard", {css: ['modal.css','styles.css', 'bootstrap.min.css']});
    },

    renderClientDash: function(req, res){
        res.render("clientdashboard", {css: ['modal.css','styles.css', 'bootstrap.min.css']});
    }

};

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
}