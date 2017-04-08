var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var api = require('../controllers/transaction');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// Get all sources of income
router.get('/income', function(req, res, next) {
  res.render('income');
});


// Add a source of income
router.post('/income', function(req, res, next){
  console.log(req.body);
  res.json(req.body);
  api.new(req,res);
  //res.sendStatus(200);
});

// Add an expense
router.post('/expense', function(req,res,next){
  console.log(req.body)
})

module.exports = router;
