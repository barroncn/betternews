const router = require("express").Router();
const loginRoutes = require("./login.js");

// Book routes
router.use("/login", loginRoutes);

module.exports = router;
