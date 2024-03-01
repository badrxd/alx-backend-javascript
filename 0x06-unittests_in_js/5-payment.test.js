const assert = require('assert');
const { describe, it, beforeEach, afterEach } = require('mocha');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

/* eslint-disable */
describe('sendPaymentRequestToApi', function () {
  beforeEach('Set up spy to use for each test', function () {
    sinon.spy(console, 'log');
  });
  afterEach('restore spy after each test', function () {
    console.log.restore();
  });
  it('check that console.log is called with the right arg', function () {
    sendPaymentRequestToApi(100, 20);

    assert(console.log.withArgs('The total is: 120').calledOnce);
  });

  it('check that console.log is called with the right arg', function () {
    sendPaymentRequestToApi(10, 10);

    assert(console.log.withArgs('The total is: 20').calledOnce);
  });
});
/* eslint-enable */
