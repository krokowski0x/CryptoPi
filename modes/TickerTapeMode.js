const GDAX = require('gdax');

function TickerTapeMode(args) {
  const baseCurrency = args.filter(arg => arg.length === 3)[0];
  const BTC = `BTC-${baseCurrency}`;
  const ETH = `ETH-${baseCurrency}`;
  const LTC = `LTC-${baseCurrency}`;
  const BCH = `BCH-${baseCurrency}`;
  const prices = {
    'BTC': 0,
    'ETH': 0,
    'LTC': 0,
    'BCH': 0,
  };
  const websocket = new GDAX.WebsocketClient([BTC, ETH, LTC, BCH]);
  const frames = [':arrowne:',':arrowse:'];

  let upper = `BTC     ETH     LTC     BCH     `;
  let lower = ` ${prices['BTC']}   ${prices['ETH']}   ${prices['LTC']}   ${prices['BCH']}`;

  const websocketCallback = (data) => {
    if (data.product_id && data.type === 'done' && Math.abs(prices[data.product_id] - data.price) > 5)
      prices[data.product_id] = Number(data.price).toFixed(2);
  }

  lcd.useChar("arrowne");
  lcd.useChar("arrowse");
  lcd.clear();

  websocket.on('message', websocketCallback);
  setInterval(TickerTape, 500);
};

function TickerTape() {
  lcd.clear()
     .cursor(0,0).print(upper.substring(0,15))
     .cursor(1,0).print(lower.substring(0,15));
     
  upper = upper.split('');
  upper.push(upper.shift());
  upper = upper.join('');

  lower = lower.split('');
  lower.push(lower.shift());
  lower = lower.join('');
};

module.exports = TickerTapeMode;
