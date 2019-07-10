const router = require("express").Router();
const usersRoutes = require("./users");

// user routes
router.use("/users", usersRoutes);

module.exports = router;
