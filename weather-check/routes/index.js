var express = require('express')
    , router = express.Router()
    , getWeather = require('../public/javascripts/openWeather');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Let's Talk About the Weather" });
});

/* POST home page. */
router.post('/weather', function(req, res, next) {
  console.log('ha!' + req);
  console.log(getWeather.openWeather(req)); 
  res.render('index', { title: "Let's Talk About the Weather", result: 'here' });
});

module.exports = router;
