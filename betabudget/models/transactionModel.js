var mongoose = require('mongoose');

var transactionSchema = mongoose.Schema({
    name: String,
    amount: Number,
    type: String
});

module.exports = mongoose.model('Transaction', transactionSchema);