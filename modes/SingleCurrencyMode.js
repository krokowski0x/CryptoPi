const fetch = require('node-fetch');
const apiURI = 'https://api.gdax.com/products';

function SingleCurrencyMode(args) {
  args = args.filter(arg => arg.length === 3);
  const baseCurrency = args[0];
  const mainCurrency = args[1];

  fetch(`${apiURI}${mainCurrency}-${baseCurrency}/book?level=1`)
    .then(res => res.json())
  	.then(json => console.log(json.asks[0][0]));
};

module.exports = SingleCurrencyMode;
