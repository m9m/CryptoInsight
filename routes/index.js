var express = require('express');
var router = express.Router();

// redirect to the default home page
router.get('/', function(req, res, next) {
  res.redirect('/home');
});

router.get('/home', function(req, res, next) {
  res.render('home');
});

router.get('/development', function(req, res, next) {
  res.render('development');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

module.exports = router;
