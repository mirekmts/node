var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongodb = require('mongodb').MongoClient;


module.exports = function() {
    passport.use(new LocalStrategy({
        usernameField: 'userName',
        passwordField: 'password'
    },
    function(username, password, done) {
        var url = "mongodb://localhost:27017/mydb";

        mongodb.connect(url, function(err, db) {
            var collection = db.collection('users');
            collection.findOne({
                    username: username
                },
                function(err, results) {
                    if(results.password === password) {
                        var user = results;
                        done(null, user);
                    } else {
                        done(null, false, {MESSAGE: 'bAD PASSWORD'});
                    }

                }
            );
        });
        // var user = {
        //     username: username,
        //     password: password
        // };
        // done(null, user);
    }));
};
