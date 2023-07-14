const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  username: { type: String, required: true },
  status: { type: String, required: true },
  amount: { type: Number, required: true },
  network: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
