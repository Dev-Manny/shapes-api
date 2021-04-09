const router = require("express").Router();
const ShapeController = require("../controllers/ShapeController");
const checkAuth = require("../middlewares/checkAuth");

router.post("/", checkAuth("user"), ShapeController.calculateShape);

module.exports = router;
