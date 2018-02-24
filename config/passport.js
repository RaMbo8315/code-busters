var bCrypt = require('bcrypt-nodejs');
var passport = require("passport");

var db = require("../models");


module.exports = function (passport, admin) {
    var Admin = admin;
    var LocalStrategy = require('passport-local').Strategy;

    passport.use('local-signin', new LocalStrategy(
        {       
            usernameField: 'user_name',
            passwordField: 'password',
            passReqToCallback: true 
        },
     
        function(req, user_name, password, done) {
            var Admin = Admin;    
            var isValidPassword = function(adminPass, password) {
                return bCrypt.compareSync(password, adminPass);     
            }    
            db.Admin.findOne({
                where: {
                    user_name: user_name
                }
            }).then(function(admin) {
                console.log(admin)
                if (!admin) {
                    return done(null, false, {
                        message: 'Email does not exist'
                    });
                }
                if (!isValidPassword(Admin.password, password)) {     
                    return done(null, false, {
                        message: 'Incorrect password.'
                    });
                }
                var adminInfo = db.Admin.get();
                return done(null, adminInfo);
            }).catch(function(err) {     
                console.log("Error:", err);     
                return done(null, false, {
                    message: 'Something went wrong with your Signin'
                });
            });
        }
    ));

    passport.use('local-signup', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function (req, user_name, password, done) {
            var generateHash = function (password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };
            User.findOne({
                where: {
                    user_name: user_name
                }
            }).then(function (client) {
                if (client) {
                    return done(null, false, {
                        message: 'That email is already taken'
                    });
                } else {
                    var userPassword = generateHash(password);
                    var data = {
                        email: email,
                        password: userPassword,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname
                    };

                    client.create(data).then(function (newClient, created) {
                        if (!newClient) {
                            return done(null, false);
                        }
                        if (newClient) {
                            return done(null, newClient);
                        }
                    });
                }
            });
        }
    ));

    passport.serializeUser(function (admin, done) {
        done(null, admin);

    });
    passport.deserializeUser(function (id, done) {
       db.Admin.findById(id).then(function (admin) {
            if (admin) {
                done(null, admin.get());
            } else {
                done(admin.errors, null);
            }
        });
    });
}