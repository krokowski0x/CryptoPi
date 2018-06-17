const { LinkedListOnSteroids, Node } = require('./LinkedListOnSteroids');

const mainMenu =         new LinkedListOnSteroids(['1. Market Prices','2. My Account','3. Exit']);
const marketPricesMenu = new LinkedListOnSteroids(['Ticker Tape Mode','Currency View Mode']);
const tickerTapeMenu =   new LinkedListOnSteroids(['BTC','USD', 'EUR', 'GBP']);
const currencyMenu =     new LinkedListOnSteroids(['BTC', 'ETH', 'LTC', 'BCH']);
const myCurrencies =     new LinkedListOnSteroids(['BTC', 'ETH', 'LTC', 'BCH']);
const exitMenu =         new LinkedListOnSteroids(['Yes', 'No']);

mainMenu.head.addChild(marketPricesMenu.head);
mainMenu.head.next.addChild(myCurrencies.head);
mainMenu.head.next.next.addChild(exitMenu.head);

marketPricesMenu.head.addChild(tickerTapeMenu.head);
marketPricesMenu.head.next.addChild(currencyMenu.head);

module.exports = {
  mainMenu,
};
