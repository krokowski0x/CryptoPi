const GDAX = require('gdax');

function TickerTapeMode(args) {
  const baseCurrency = args.filter(arg => arg.length === 3)[0];

  const websocket = new GDAX.WebsocketClient([
    `BTC-${baseCurrency}`,
    `ETH-${baseCurrency}`,
    `LTC-${baseCurrency}`,
    `BCH-${baseCurrency}`,
  ]);

  const websocketCallback = (data) => {
    if (data.type === 'done') {
      console.log(data.price);
    }
  }

  websocket.on('message', websocketCallback);
};

module.exports = TickerTapeMode;
