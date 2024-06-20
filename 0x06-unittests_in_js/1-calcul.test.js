// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 0 when inputs are -1.4 and 1.4', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, 1.4), 0);
    });

    it('should handle large numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 1000.4, 2000.5), 3001);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return -3 when inputs are -1.4 and 1.4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 1.4), -3);
    });

    it('should handle large numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3000.4, 1000.5), 1999);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return -1 when inputs are -1.4 and 1.4', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, 1.4), -1);
    });

    it('should return "Error" when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should handle large numbers correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4000.5, 2000.5), 2);
    });
  });

  it('should throw an error for invalid types', () => {
    assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), /Invalid type/);
  });
});
