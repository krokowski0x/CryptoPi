const five = require("johnny-five");
const Raspi = require("raspi-io");
const { next, ok, back } = require("./utils");
const mainMenu = require("../setup/MenuSetup");

const board = new five.Board({ io: new Raspi() });

board.on("ready", () => {
	/***** SETUP *****/

	// LCD display
	const lcd = new five.LCD({
		pins: ["P1-37", "P1-35", "P1-33", "P1-31", "P1-29", "P1-23"],
		backlight: 6,
		rows: 2,
		cols: 16
	});

	// Menu control buttons
	const backBtn = new five.Button({ pin: "P1-21", isPullup: true });
	const okBtn = new five.Button({ pin: "P1-19", isPullup: true });
	const nextBtn = new five.Button({ pin: "P1-15", isPullup: true });

	// Motion detector
	const motion = new five.Motion("P1-13");

	// Buy/sell control
	const buyLed = new five.Led("P1-11");
	const sellLed = new five.Led("P1-7");

	// 7-segment display -/+ control
	const decBtn = new five.Button({ pin: "P1-12", isPullup: true });
	const incBtn = new five.Button({ pin: "P1-8", isPullup: true });

	/***** MAIN *****/

	let current = mainMenu.head;
	let args = [];
	lcd.clear().print(current.data);

	// Register event listeners
	backBtn.on("up", () => back(current));
	okBtn.on("up", () => ok(current));
	nextBtn.on("up", () => next(current));
});
