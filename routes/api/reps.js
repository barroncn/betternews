const router = require("express").Router();
const repsController = require("../../controllers/repsController");

// Matches with "/api/reps"
router.route("/")
  .get(repsController.findAll)
  .post(repsController.create);

// Matches with "/api/reps/chamber/:chamber"
router.route("/chamber/:chamber")
  .get(repsController.findByChamber);

// Matches with "/api/reps/details/:id"
router.route("/details/:id")
  .get(repsController.findById)
  .put(repsController.update)
  .delete(repsController.remove);

// Matches with "/api/reps/:reptype/:state"
router
  .route("/:reptype/:state")
  .get(repsController.findRepsbyState);

module.exports = router;
