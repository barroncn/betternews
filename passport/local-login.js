const jwt = require("jsonwebtoken");
const User = require("../models/Users.js");
const PassportLocalStrategy = require("passport-local").Strategy;
const config = require("../config");

//Return the Passport Local Strategy object.
module.exports = new PassportLocalStrategy({
    usernameField: "email",
    passwordField: "password",
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
    const userData = {
        email: email.trim(),
        password: password.trim()
    };

    return User.findOne({ username: userData.email }, (err, user) => {
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

            const payload = {
                sub: user._id
            };

            //create a token string
            const token = jwt.sign(payload, config.jwtSecret);
            const data = {
                name: user.name,
                userID: user._id,
                userState: user.state
            };

            return done(null, token, data);
        });
    });
});
