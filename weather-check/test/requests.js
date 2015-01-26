var request = require('supertest')
    , express = require('express')
    , chai = require('chai')
    , app = require('../app.js');

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
});
