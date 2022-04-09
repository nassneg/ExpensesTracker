const router = require("express").Router();

const transactionsRouter = require("./transactions.js");

router.use("/transactions", transactionsRouter);

module.exports = router;
