var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/survey', function(req, res, next) {
  res.render('observer_survey', { title: 'A Survey' });
});

router.get('/query', function(req, res, next) {
  res.render('observer_query', { title: 'A Query' });
});

module.exports = router;
