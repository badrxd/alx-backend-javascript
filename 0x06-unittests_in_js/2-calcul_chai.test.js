const calculateNumber = require('./2-calcul_chai');
const expect = require('chai').expect;
const { describe, it } = require('mocha');

describe('calculateNumber', function () {
  let number = undefined;
  describe('SUM', function () {
    it('checking if return 4', function () {
      number = calculateNumber('SUM', 1, 3);
      expect(number).to.equal(4);
    });
    it('checking if return 4', function () {
      number = calculateNumber('SUM', 1.1, 3.6);
      expect(number).to.equal(5);
    });
  });

  describe('SUBTRACT', function () {
    it('checking if return 6', function () {
      number = calculateNumber('SUBTRACT', 1.5, -3.7);
      expect(number).to.equal(6);
    });
    it('checking if return 6', function () {
      number = calculateNumber('SUBTRACT', 2.5, 3.7);
      expect(number).to.equal(-1);
    });
    it('checking if return -1', function () {
      number = calculateNumber('SUBTRACT', -5.5, -3.7);
      expect(number).to.equal(-1);
    });
  });

  describe('DIVIDE', function () {
    it('checking if return 0.2', function () {
      number = calculateNumber('DIVIDE', 1.4, 4.5);
      expect(number).to.equal(0.2);
    });
    it('checking if return -1', function () {
      number = calculateNumber('DIVIDE', -9.6, 1.5);
      expect(number).to.equal(-5);
    });
    it('checking if return Rrror', function () {
      number = calculateNumber('DIVIDE', 1.5, 0);
      expect(number).to.equal('Error');
    });
  });
});
