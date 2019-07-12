const router = require("express").Router();
const searchController = require("../../controllers/searchController");

router.route("/")
    .post(searchController.create);


module.exports = router;