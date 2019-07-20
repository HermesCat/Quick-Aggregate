const router = require("express").Router();
const searchController = require("../../controllers/searchController");

//search route
router.route("/")
    .post(searchController.create)
    .get(searchController.findAll)

router.route("/tweets")
    .get(searchController.findByHashTag)
    
//search route ID
router.route("/:id")
    .get(searchController.findById)
    .delete(searchController.findByIdAndRemove)

module.exports = router;