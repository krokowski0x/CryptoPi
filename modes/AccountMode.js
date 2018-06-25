const GDAX = require('gdax');
const { passPhrase, APIKey, secret } = require('./secrets');
const apiURI = 'https://api.gdax.com';

function AccountMode() {
  const authenticatedClient = new GDAX.AuthenticatedClient(APIKey, secret, passPhrase, apiURI);
  authenticatedClient.getAccounts()
    .then(data => {
      for (let entry of data)
        console.log(entry.currency, Number(entry.balance).toFixed(3));
    })
    .catch(error => {
      // TODO: Error handling
  });
};

module.exports = AccountMode;
