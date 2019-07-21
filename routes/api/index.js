const router = require("express").Router();
const usersRoutes = require("./users");
const searchRoutes = require("./search");

// user routes
router.use("/users", usersRoutes);

// search routes
router.use("/search", searchRoutes);

module.exports = router;
