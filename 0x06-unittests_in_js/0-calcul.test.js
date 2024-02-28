const calculateNumber = require('./0-calcul');
const assert = require('assert');
describe('calculateNumber', function () {
  it('Tests around the “rounded” part', function () {
    let number = calculateNumber(1, 3);
    assert.equal(number, 4);
    number = calculateNumber(1, 3.7);
    assert.equal(number, 5);
    number = calculateNumber(1.2, 3.7);
    assert.equal(number, 5);
    number = calculateNumber(1.5, 3.7);
    assert.equal(number, 6);
    number = calculateNumber(1.5, -3.7);
    assert.equal(number, -2);
  });
});
