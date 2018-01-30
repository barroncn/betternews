const jwt = require("jsonwebtoken");
const Users = require("../models/Users.js");
const config = require("../config");
const secret = process.env.JWT_SECRET || config.jwtSecret;


//The Auth Checker Middleware function
module.exports = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).end();
    }

    //Get the last part from an authorization header string like "bearer token-value"
    const token = req.headers.authorization.split(" ")[1];

    //decode the token using a secret key-phrase
    return jwt.verify(token, secret, (err, decoded) => {
        //the 401 code is for unauthorized status
        if (err) {
            return res.status(401).end();
        }

        const userId = decoded.sub;

        //check if a user exists
        return Users.findById(userId, (userErr, user) => {
            if (userErr || !user) {
                return res.status(401).end();
            }
            res.locals.user = user;
            return next();
        });
    });
};
