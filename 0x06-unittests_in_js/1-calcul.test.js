const calculateNumber = require('./1-calcul');
const assert = require('assert');
describe('calculateNumber', function () {
  it('Tests around the “rounded” part and the type of calculation', function () {
    let number = calculateNumber('SUM', 1, 3);
    assert.equal(number, 4);

    number = calculateNumber('SUBTRACT', 1.5, -3.7);
    assert.equal(number, 6);
    number = calculateNumber('SUBTRACT', -5.5, -3.7);
    assert.equal(number, -1);

    number = calculateNumber('DIVIDE', 1.4, 4.5);
    assert.equal(number, 0.2);
    number = calculateNumber('DIVIDE', -9.6, 10);
    assert.equal(number, -1);
    number = calculateNumber('DIVIDE', 9.6, -10);
    assert.equal(number, -1);
    number = calculateNumber('DIVIDE', 1.5, 0);
    assert.equal(number, 'Error');
  });
});
