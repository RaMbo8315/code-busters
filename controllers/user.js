modules.exports = {
    // userHome: function(req, res){
    //     res.render("index");
    // },
    renderClientDash: function(req, res){
        res.render("clientdashboard", {css: ['modal.css','styles.css', 'bootstrap.min.css']});
    }
};