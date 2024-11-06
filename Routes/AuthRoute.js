const { Signup } = require("../controller/Authcontroller");
const router = require("express").Router();

router.post("/signup", Signup);

module.exports = router;