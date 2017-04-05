// Models would go here
var Transaction = require('../models/transactionModel.js');


exports.new = function (req, res) {
    var testTransaction = new Transaction ({ name: req.body.name, amount: req.body.amount });
    testTransaction.save(function (err, testTransaction) {
        if (err) { return console.error(err); }
        testTransaction.getName();
    })
}

exports.all = function (req, res) {
    Transaction.find(function(err, threads){
        
    })
}