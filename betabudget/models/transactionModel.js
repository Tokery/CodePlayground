var mongoose = require('mongoose');

var transactionSchema = mongoose.Schema({
    name: String,
    amount: Number
});

module.exports = mongoose.model('Transaction', transactionSchema);