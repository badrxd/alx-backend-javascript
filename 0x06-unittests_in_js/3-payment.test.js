const assert = require('assert');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

/* eslint-disable */
describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber called once', function () {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    assert(spy.calledOnce);
    spy.restore();
  });
});
/* eslint-enable */
