const GDAX = require('gdax');
const fetch = require('node-fetch');
const { passPhrase, APIKey, secret } = require('./secrets');

const publicClient = new GDAX.PublicClient();
const apiURI = 'https://api.gdax.com/products';

function tickerTapeView(baseCurrency) {
  const websocket = new GDAX.WebsocketClient([
    `BTC-${baseCurrency}`,
    `ETH-${baseCurrency}`,
    `LTC-${baseCurrency}`,
    `BCH-${baseCurrency}`,
  ]);
  const websocketCallback = (data) => {
    if (data.type === 'done') {
      console.log(price);
    }
  }
  websocket.on('message', websocketCallback);
}

function currencyView(firstCurrency, baseCurrency) {
  fetch(`https://api.gdax.com/products/${firstCurrency}-${baseCurrency}/book?level=1`)
    .then(res => res.json())
  	.then(json => console.log(json.asks[0][0]));
}

function tradeRequest() {
  const authenticatedClient = new GDAX.AuthenticatedClient(APIKey, secret, passPhrase, apiURI);
  authenticatedClient.getAccounts()
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      // handle the error
    });
}

function onExit() {
  process.exit();
}

module.exports = {
  tickerTapeView,
  currencyView,
  tradeRequest,
  onExit,
}
