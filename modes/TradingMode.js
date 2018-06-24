const GDAX = require('gdax');
const { passPhrase, APIKey, secret } = require('./secrets');
const { display, displayDigit } = require('../setup/HardwareSetup');
const apiURI = 'https://api.gdax.com';

function TradingMode() {
  decBtn.on("up", () => lcd.clear().print('- works'));
  incBtn.on("up", () => lcd.clear().print('+ works'));
};

module.exports = TradingMode;
