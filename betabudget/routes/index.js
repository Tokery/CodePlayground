var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var api = require('../controllers/transaction');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next){
  console.log(req.body);
  res.json(req.body);
  api.new(req,res);
  //res.sendStatus(200);
})

module.exports = router;
