const router = require("express").Router();
const articlesRoutes = require("./articles");
const repsRoutes = require("./reps");
const usersRoutes = require("./users");

// Book routes
router.use("/articles", articlesRoutes);
router.use("/reps", repsRoutes);
router.use("/users", usersRoutes);

module.exports = router;