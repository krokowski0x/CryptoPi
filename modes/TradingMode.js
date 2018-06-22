const GDAX = require('gdax');
const { passPhrase, APIKey, secret } = require('./secrets');
const apiURI = 'https://api.gdax.com';

function TradingMode() {
  console.log('I\'ll be here really soon!');
};

module.exports = TradingMode;
