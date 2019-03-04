var express = require('express');
var router = express.Router();

const Util = require('../common/util');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(Util.SuccessResponse({message: 'Hello World'}));
});

module.exports = router;
