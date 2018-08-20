const GDAX = require("gdax");
// Secret login data for my GDAX account (secrets.js is in .gitignore - sorry not sorry)
const { passPhrase, APIKey, secret } = require("./secrets");
const apiURI = "https://api.gdax.com";
let currencies = "";
let prices = "";

function AccountMode() {
	const authenticatedClient = new GDAX.AuthenticatedClient(
		APIKey,
		secret,
		passPhrase,
		apiURI
	);
	// Get account data
	authenticatedClient
		.getAccounts()
		.then(data => {
			// For each currency of available
			for (let entry of data) {
				// Currency names, BTC, ETH etc.
				currencies += entry.currency;
				// Prices in the same order
				prices += Number(entry.balance).toFixed(3);
			}
		})
		.then(() => {
			lcd
				.clear()
				.cursor(0, 0)
				.print(currencies)
				.cursor(0, 1)
				.print(prices);
		})
		.catch(error => {
			// TODO: Error handling
		});
}

module.exports = AccountMode;
