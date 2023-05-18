const Utils = {
    calculateNumber(type, a, b) {
      const anum = Math.round(a);
      const bnum = Math.round(b);
  
      if (type === 'SUBTRACT') {
        return anum - bnum;
      }
  
      if (type === 'DIVIDE') {
        if (bnum === 0) {
          return 'Error';
        }
        return anum / bnum;
      }
  
      return anum + bnum;
    },
  };
  
  module.exports = Utils;
