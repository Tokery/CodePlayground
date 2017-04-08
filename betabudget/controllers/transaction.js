var Transaction = require('../models/transactionModel.js');


exports.newIncome = function (req, res) {
    var testTransaction = new Transaction ({ name: req.body.name, amount: req.body.amount, type: 'income' });
    testTransaction.save(function (err, testTransaction) {
        if (err) { return console.error(err); }
        testTransaction.getName();
    })
}

exports.all = function (req, res, next) {
    Transaction.find(function(err, threads){
        next(threads);
    })
}