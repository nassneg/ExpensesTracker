const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  name: { type: String, required: true, maxLength: 30 },
  //   powers: { type: [String], default: ["Super strength"], set: stringToArray },
  //   type: { type: String, enum: ["hero", "villain"], default: "hero" },
  //   hp: { type: Number, default: 1 },
});

const Transaction = mongoose.model("Transaction", TransactionSchema);
module.exports = Transaction;
