var express = require('express');
var router = express.Router();

// redirect to the default home page
router.get('/', function(req, res, next) {
  res.redirect('/home');
});

router.get('/home', function(req, res, next) {
  res.render('home');
});


module.exports = router;
