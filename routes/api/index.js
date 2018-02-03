const router = require("express").Router();
const portfolioRouter = require("./portfolio");

router.use("/portfolio", portfolioRouter);

module.exports = router;