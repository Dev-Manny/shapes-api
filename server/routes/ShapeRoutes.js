const router = require("express").Router();
const ShapeController = require("../controllers/ShapeController");
const checkAuth = require("../middlewares/checkAuth");

router.post("/", checkAuth("user"), ShapeController.calculateShape);
router.get("/", checkAuth("user"), ShapeController.getResultByUser);

module.exports = router;
