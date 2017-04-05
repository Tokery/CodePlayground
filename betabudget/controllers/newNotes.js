// Save a transaction to the database
var mongoose = require('mongoose');
var exports = module.exports = {};

 // Move this to app.js, add routes to db.once

exports.addTransaction = function (transactionName, transactionAmount) {
    
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        var transactionSchema = mongoose.Schema({
            name: String,
            amount: Number
        });

        transactionSchema.methods.getName = function () {
            var name = this.name
                ? "My name is " + this.name
                : "No name";
            console.log(name);
        }

        var Transaction = mongoose.model('Transaction', transactionSchema);

        var testTransaction = new Transaction({ name: transactionName, amount: transactionAmount });
        testTransaction.save(function (err, testTransaction) {
            if (err) { return console.error(err); }
            testTransaction.getName();
        })
    });
}