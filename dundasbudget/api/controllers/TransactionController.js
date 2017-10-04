/**
 * TransactionController
 *
 * @description :: Server-side logic for managing Transactions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `TransactionController.index()`
   */
  index: function (req, res) {
    Transaction.find({}).exec(function cb(err, records){
      return res.json(records);
    })    
  },


  /**
   * `TransactionController.create()`
   */
  create: function (req, res) {
    var params = req.params.all();
    var date = new Date(params.createdAt)
    Transaction.create({
      text: params.text,
      dateCreated: date,
      createdBy: params.createdBy
    }).exec(function cb(err, created) {
      if (err) {
        return res.serverError(err); 
      }
      return res.json({
        notice: 'Created transaction with' + created.text
      });
    })
  },


  /**
   * `TransactionController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `TransactionController.delete()`
   */
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }
};

