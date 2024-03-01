const { describe, it } = require('mocha');
const { expect } = require('chai');
const request = require('request');

/* eslint-disable */
describe('getPaymentTokenFromAPI', function () {
  it('status code should be 200', function (done) {
    request('http://localhost:7865', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('should return correct result', function (done) {
    request('http://localhost:7865', function (error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('getPaymentTokenFromAPI_2', function () {
  it('should return status code 200 when :id is a number', function (done) {
    request('http://localhost:7865/cart/12', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('should return correct result', function (done) {
    request('http://localhost:7865/cart/12', function (error, response, body) {
      expect(body).to.equal('Payment methods for cart :12');
      done();
    });
  });
  it('should return status code 404 when :id is NOT a number', function (done) {
    request('http://localhost:7865/cart/:id', function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
/* eslint-enable */
