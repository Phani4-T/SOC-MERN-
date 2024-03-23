const express = require('express');
const router = express.Router();
router.get('/', function(req, res) {
  res.send('Welcome to our website!');
});

router.get('/about', function(req, res) {
  res.send('Learn more about our company.');
});

router.get('/contact', function(req, res) {
  res.send('Contact us for more information.');
});

module.exports = router;
