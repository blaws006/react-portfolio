const router = require("express").Router();
var portfolioController = require("../../controller/portfolio");

router.get("/", portfolioController.findAll);

module.exports = router;