const assert = require('assert');
const { describe, it } = require('mocha');
const getPaymentTokenFromAPI = require('./6-payment_token');
const Utils = require('./utils');
const expect = require('chai').expect;

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with a successful response', function (done) {
    getPaymentTokenFromAPI(true).then((data) => {
      expect(data).to.have.property('data');
      assert.equal(data.data, 'Successful response from the API');
      done();
    });
  });
});
