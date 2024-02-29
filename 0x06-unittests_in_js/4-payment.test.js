const assert = require('assert');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

/* eslint-disable */
describe('sendPaymentRequestToApi', function () {
  it('should return 10 and log the correct message', function () {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);

    assert(spy.withArgs('The total is: 10').calledOnce);
    assert(stub.withArgs('SUM', 100, 20).calledOnce);

    spy.restore();
    stub.restore();
  });
});
/* eslint-enable */
