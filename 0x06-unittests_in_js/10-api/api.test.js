const { describe, it } = require('mocha');
const expect = require('chai').expect;
const request = require('request');

/* eslint-disable */
describe('index page', function () {
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

describe('cart page', function () {
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
    request(
      'http://localhost:7865/cart/hello',
      function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      },
    );
  });
});

describe('available payments', function () {
  it('should return status code 200 when :id is a number', function (done) {
    request(
      'http://localhost:7865/available_payments',
      function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      },
    );
  });
  it('should return available payments', function (done) {
    const payment = {
      payment_methods: {
        credit_cards: true,
        paypal: false,
      },
    };
    request(
      'http://localhost:7865/available_payments',
      { json: true },
      function (error, response, body) {
        expect(body).to.deep.equal(payment);
        done();
      },
    );
  });
});

describe('Login', function () {
  it('check correct status ', function (done) {
    const opt = {
      url: 'http://localhost:7865/login',
      json: true,
      body: {
        userName: 'badr',
      },
    };
    request.post(opt, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('check correct content for request ', function (done) {
    const opts = {
      url: 'http://localhost:7865/login',
      json: true,
      body: {
        userName: 'badr',
      },
    };
    request.post(opts, function (err, res, body) {
      if (err) {
        expect(res.statusCode).to.not.equal(200);
      } else {
        expect(body).to.contain('Welcome badr');
      }
      done();
    });
  });
  it("check correct status code for request that's not sent properly", function (done) {
    const op = {
      url: 'http://localhost:7865/login',
      json: true,
      body: {
        usame: 'badr',
      },
    };
    request.post(op, function (err, res, body) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
/* eslint-enable */
