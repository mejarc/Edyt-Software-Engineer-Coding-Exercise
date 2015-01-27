var express = require('express')
    , router = express.Router()
    , request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Let's Talk About the Weather" });
});

/* POST home page. */
router.post('/weather', function(req, res, next) {
  var city = req.body.city
      , url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&q=' + city;
  request(url, function (error, response, data) {
    if (!error && response.statusCode == 200) {
      var obj = JSON.parse(data);
      var desc = obj.weather[0]['description']
          , degrees = obj.main['temp'];
      res.render('index', { title: "Let's Talk About the Weather", place: city, description: desc, temp: degrees });
    }
  });
});

module.exports = router;
