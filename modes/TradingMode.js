const GDAX = require("gdax");
const { passPhrase, APIKey, secret } = require("./secrets");
const { display, displayDigit } = require("../setup/HardwareSetup");
const apiURI = "https://api.gdax.com";
let i = 0;

function TradingMode() {
	decBtn.on("up", () => {
		if (i > 0) {
			buyLed.on();
			sellLed.off();
		} else if (i < 0) {
			buyLed.off();
			sellLed.on();
		} else {
			buyLed.off();
			sellLed.off();
		}
		display(Math.abs(i));
		i--;
	});

	incBtn.on("up", () => {
		if (i > 0) {
			buyLed.on();
			sellLed.off();
		} else if (i < 0) {
			buyLed.off();
			sellLed.on();
		} else {
			buyLed.off();
			sellLed.off();
		}
		display(Math.abs(i));
		i++;
	});
}

module.exports = TradingMode;
