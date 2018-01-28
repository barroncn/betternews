const router = require("express").Router();
const articlesRoutes = require("./articles");
const repsRoutes = require("./reps");
const apiUserRoutes = require("./user");

// router.get("/dashbord", (req, res) => {
//     res.status(200).json({
//         message: "You're authorized to see this secret message."
//     });
// });

// Book routes
router.use("/articles", articlesRoutes);
router.use("/reps", repsRoutes);
router.use("/user", apiUserRoutes);

module.exports = router;
