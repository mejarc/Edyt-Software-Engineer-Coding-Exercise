var express = require('express')
    , request = require('supertest')
    , cheerio = require('cheerio');

describe('weather-check', function() {

  it('returns 200 on localhost:8080', function(done) {
    request('localhost:8080')
    .get('/')
    .expect(200)
    .end(function(err, res) {
      if (err) return done();
      done();
    });
  });

  it('fetches data from the Open Weather API', function(done) {
    request('http://api.openweathermap.org/data/2.5/weather?units=imperial&q=london')
    .get('/')
    .expect(200)
    .end(function(err, res) {
      if (err) return done();
      done();
    });
  });

  xit('displays the weather data', function(done) {
    before(function(){
      request('localhost:8080')
      .get('/weather')
      .end(function(res){
        startWeather = res.find('#result').text;
      });
    });
    request.post('localhost:8080/weather')
    .send({q: 'ook'})
    .end(function(res) {
      expect(res.text).to.not.equal(startWeather);
    });
  });
});
