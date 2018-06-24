var request = require('supertest')
, express = require('express');

var app = require('../app.js');

describe('POST', function(){
it('respond with json', function(done){
  request(app)
  .post('/')
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json')
  .send('{"minuend": 9, "subtrahend": 5}')
  .expect('Content-Type', /json/)
  .expect(200, done);
})
})
