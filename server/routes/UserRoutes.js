const router = require("express").Router();
const User = require("../controllers/UserController");

router.post("/signup", User.postSignup);
router.post("/login", User.postLogin);

module.exports = router;
