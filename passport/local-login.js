const jwt = require("jsonwebtoken");
const User = require("../models/Users.js");
const PassportLocalStrategy = require("passport-local").Strategy;
const config = require("../config");
const secret = process.env.JWT_SECRET || config.jwtSecret;

//Return the Passport Local Strategy object.
module.exports = new PassportLocalStrategy({
    usernameField: "username",
    passwordField: "password",
    session: false,
    passReqToCallback: true
}, (req, username, password, done) => {
    const userData = {
        username: username.trim(),
        password: password.trim()
    };

    return User.findOne({ username: userData.username }, (err, user) => {
        if (err) { return done(err); }

        if (!user) {
            const error = new Error("Incorrect email or password");
            error.name = "IncorrectCredentialsError";

            return done(error);
        }

        //Check if a hashed user's password is equal to a value saved in the database
        return user.comparePassword(userData.password, (passwordErr, isMatch) => {
            if (err) { return done(err); }

            if (!isMatch) {
                const error = new Error("Incorrect Email or Password");
                error.name = "IncorrectCredentialsError";

                return done(error);
            }

            let payload = {
                sub: user._id
            };

            //create a token string
            let token = jwt.sign(payload, secret);
            let data = {
                name: user.name,
                userID: user._id.valueOf(),
                userState: user.state
            };

            return done(null, token, data);
        });
    });
});
