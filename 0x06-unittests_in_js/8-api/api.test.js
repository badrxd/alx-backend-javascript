const { describe, it } = require('mocha');
const expect = require('chai').expect;
const request = require('request');

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
