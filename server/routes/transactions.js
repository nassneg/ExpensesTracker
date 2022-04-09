const router = require("express").Router();
const {
  getTransactions,
  getTransaction,
  postTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

router.get("/", getTransactions);
router.get("/:id", getTransaction);
router.delete("/:id", deleteTransaction);
router.post("/", postTransaction);

module.exports = router;
