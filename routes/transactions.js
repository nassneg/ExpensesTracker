const router = require("express").Router();
const {
  getTransactions,
  getTransactionByCategory,
  postTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

const { FormValidator } = require("../validator");

router.get("/", getTransactions);
router.get("/:category", getTransactionByCategory);
router.delete("/:id", deleteTransaction);
router.post("/", [FormValidator, postTransaction]);

module.exports = router;
