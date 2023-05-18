var chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

  describe('SUM first round', function () {
    it('should return 6', function () {
      chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT first round', function () {
    it('should return -4', function () {
      chai.expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE no round', function () {
    it('should return 0.2', function () {
      chai.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
  });

  describe('DIVIDE Error', function () {
    it('should return Error', function () {
      chai.expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
