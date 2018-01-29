const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/user/profile"
// router.route("/")
//   .get(usersController.findAll)
//   .post(usersController.create);

// Matches with "/user/profile/id/:id"
router
  .route("id/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
