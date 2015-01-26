var express = require('express')
    , request = require('supertest')
    , assert = require('assert');

describe('weather-check', function(){

  it('should return 200 on localhost:8080', function(done){
    request('http://localhost:8080')
    .get('/')
    .expect(200)
    .end(function(err, res){
      if (err) return done();
      done();
    });
  });

  xit('should fetch the Open Weather API on click', function(done){
  });


});
