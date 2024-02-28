const calculateNumber = require('./2-calcul_chai');
const expect = require('chai').expect;

describe('calculateNumber', function () {
  it('Tests around the “rounded” part and the type of calculation', function () {
    it('checking if return -1', function () {
      let number = calculateNumber('SUM', 1, 3);
      expect(number).to.equal(4);
    });

    it('checking if return -1', function () {
      number = calculateNumber('SUBTRACT', 1.5, -3.7);
      expect(number).to.equal(6);
    });
    it('checking if return -1', function () {
      number = calculateNumber('SUBTRACT', -5.5, -3.7);
      expect(number).to.equal(-1);
    });

    it('checking if return -1', function () {
      number = calculateNumber('DIVIDE', 1.4, 4.5);
      expect(number).to.equal(0.2);
    });
    it('checking if return -1', function () {
      number = calculateNumber('DIVIDE', -9.6, 10);
      expect(number).to.equal(-1);
    });
    it('checking if return -1', function () {
      number = calculateNumber('DIVIDE', 9.6, -10);
      expect(number).to.equal(-1);
    });
    it('checking if return Rrror', function () {
      number = calculateNumber('DIVIDE', 1.5, 0);
      expect(number).to.equal('Error');
    });
  });
});
