const router = require("express").Router();
const userRoutes = require("./profile.js");

// Book routes
router.use("/user", userRoutes);

module.exports = router;
