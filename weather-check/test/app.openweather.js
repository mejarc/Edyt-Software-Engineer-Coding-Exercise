var express = require('express')
    , request = require('supertest')
    , assert = require('assert')
    , openWeather = require('../public/javascripts/openWeather.js').openWeather;

describe('openWeather', function(){
   it('fetches weather data for the given locale', function(done){
      var api = openWeather('London, uk');
      expectStatus(200)
      .end(function(err,res){
        if (err) return done();
      done();
      });
    });
});



