const router = require("express").Router();
const {
  getTransactions,
  getTransaction,
  postTransaction,
} = require("../controllers/transactionController");

router.get("/", getTransactions);
router.get("/:id", getTransaction);
router.post("/", postTransaction);

module.exports = router;
