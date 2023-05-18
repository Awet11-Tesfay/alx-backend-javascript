const assert = require('assert');
const mocha = require('mocha');

const calculateNumber = require('./1-calcul');

const SUM = 'SUM';
const SUBTRACT = 'SUBTRACT';
const DIVIDE = 'DIVIDE';
const INVALID = 'INVALID';

describe('calculateNumber', () => {
  describe('type SUM', () => {
    it('should return sum of integers', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
      assert.strictEqual(calculateNumber(SUM, 2, -2), 0);
      assert.strictEqual(calculateNumber(SUM, 1, -4), -3);
    });

    it('should return sum of rounded floats', () => {
      assert.strictEqual(calculateNumber(SUM, 1.4, 4.5), 6);
    });
  });

  describe('type SUBTRACT', () => {
    it('should return difference of integers', () => {
      assert.strictEqual(calculateNumber(SUBTRACT, 1.4, 4.5), -4);
    });
  });

  describe('type DIVIDE', () => {
    it('should return quotient of integers', () => {
      assert.strictEqual(calculateNumber(DIVIDE, 1.4, 4.5), 0.2);
    });

    it('should return "ERROR" if divisor rounds to 0', () => {
      assert.strictEqual(calculateNumber(DIVIDE, 1.4, 0), 'ERROR');
    });
  });
});
