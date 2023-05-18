function calculateNumber(type, a, b) {
    const x1 = Math.round(a);
    const x2 = Math.round(b);
  
    if (type === 'SUBTRACT') {
      return x1 - x2;
    }
  
    if (type === 'DIVIDE') {
      if (x2 === 0) {
        return 'Error';
      }
      return x1 / x2;
    }
  
    return x1 + x2;
  }
  
  module.exports = calculateNumber;
