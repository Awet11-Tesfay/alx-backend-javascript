var chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  describe('SUM no Round', function () {
    it('should return 7', function () {
      chai.expect(calculateNumber('SUM', 2, 5)).to.equal(7);
    });
  });

  describe('SUM first round', function () {
    it('should return 8', function () {
      chai.expect(calculateNumber('SUM', 3.4, 5)).to.equal(8);
    });
  });

  describe('SUM second round ', function () {
    it('should return 8', function () {
      chai.expect(calculateNumber('SUM', 5, 3.4)).to.equal(8);
    });
  });

  describe('SUM both round', function () {
    it('should return 8', function () {
      chai.expect(calculateNumber('SUM', 2.4, 5.5)).to.equal(8);
    });
  });

  describe('SUBTRACT no round', function () {
    it('should return 2', function () {
      chai.expect(calculateNumber('SUBTRACT', 6, 4)).to.equal(2);
    });
  });

  describe('SUBTRACT first round', function () {
    it('should return -3', function () {
      chai.expect(calculateNumber('SUBTRACT', 3, 5.5)).to.equal(-3);
    });
  });

  describe('SUBTRACT second round', function () {
    it('should return 3', function () {
      chai.expect(calculateNumber('SUBTRACT', 5.5, 3)).to.equal(3);
    });
  });

  describe('SUBTRACT both round', function () {
    it('should return -4', function () {
      chai.expect(calculateNumber('SUBTRACT', 2.4, 5.5)).to.equal(-4);
    });
  });

  describe('DIVIDE no round', function () {
    it('should return 2', function () {
      chai.expect(calculateNumber('DIVIDE', 10, 5)).to.equal(2);
    });
  });

  describe('DIVIDE first round', function () {
    it('should return 6', function () {
      chai.expect(calculateNumber('DIVIDE', 11.5, 2)).to.equal(6);
    });
  });

  describe('DIVIDE second round', function () {
    it('should return 0.2', function () {
      chai.expect(calculateNumber('DIVIDE', 2, 9.5)).to.equal(0.2);
    });
  });

  describe('DIVIDE both round', function () {
    it('should return 0.4', function () {
      chai.expect(calculateNumber('DIVIDE', 2.4, 5.5)).to.equal(0.4);
    });
  });

  describe('DIVIDE Error', function () {
    it('should return Error', function () {
      chai.expect(calculateNumber('DIVIDE', 2.4, 0)).to.equal('Error');
    });
  });
});
