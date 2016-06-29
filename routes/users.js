var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('user', { title: 'User' });
});

router.get('/survey', function(req, res, next) {
  res.render('user', { title: 'User Survey' });
});

module.exports = router;
