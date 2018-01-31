const PassportLocalStrategy = require("passport-local").Strategy;

//Return the Passport Logal Strategy object.
module.exports = new PassportLocalStrategy({
    usernameField: "username",
    passwordField: "password",
    session: false,
    passReqToCallback: true
}, (req, username, password, done) => {
    return done(null);
});
