const router = require("express").Router();
const profileRoutes = require("./profile.js");

// Book routes
router.use("/profile", profileRoutes);

module.exports = router;
