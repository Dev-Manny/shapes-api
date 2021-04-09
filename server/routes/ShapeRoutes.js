const router = require("express").Router();
const ShapeController = require("../controllers/ShapeController");

router.post("/", ShapeController.calculateShape);

module.exports = router;
