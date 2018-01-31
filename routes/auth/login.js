const express = require("express");
const passport = require("passport");

const router = new express.Router();

//matches route "auth/login"
router.post("/", (req, res, next) => {
    return passport.authenticate("local-login", (err, token, userData) => {

        if (err) {
            if (err.name === "IncorrectCredentialError") {
                return res.json({
                    success: false,
                    message: err.message
                });
            }

            return res.json({
                sucess: false,
                message: "Could not process the form."
            });
        }

        return res.json({
            success: true,
            message: "You have successfully logged in!",
            token,
            user: userData
        });
    })(req, res, next);
});

module.exports = router;
