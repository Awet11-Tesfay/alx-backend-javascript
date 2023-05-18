const Utils = require('./utils');

module.exports = function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const total_result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${total_result}`);
  return total_result;
};
