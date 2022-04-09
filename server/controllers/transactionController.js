const Transaction = require("../models/Transaction");

const postTransaction = (req, res) => {
  let newTransaction = new Transaction(req.body);
  newTransaction
    .save()
    .then((result) => {
      res.json({
        data: newTransaction,
        url: `/api/transactions/${newTransaction._id}`,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getTransactions = (req, res) => {
  Transaction.find({})
    .exec()
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getTransaction = (req, res) => {
  Transaction.findOne({ _id: req.params.id })
    .exec()
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const deleteTransaction = (req, res) => {
  Transaction.findOne({ _id: req.params.id })
    .remove()
    .exec()
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  postTransaction,
  getTransaction,
  getTransactions,
  deleteTransaction,
};
