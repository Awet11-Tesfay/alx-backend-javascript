const mocha = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spies;

  beforeEach(() => {
    spies = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spies.restore();
  });

  it('should log 120 if a = 100 and b = 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spies.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(spies.calledOnce).to.be.true;
  });

  it('should log 20 if a = 10 and b = 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spies.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(spies.calledOnce).to.be.true;
  });
});
