const five = require("johnny-five");
const Raspi = require("raspi-io");
const board = new five.Board({
  io: new Raspi(),
});

const cryptos = ['BTC 1000.45', 'ETH 700,89', 'LTC 89.76'];
let i = 0;

board.on("ready", function() {
  const motion = new five.Motion('P1-8');
  const lcd = new five.LCD({
    pins: ['P1-37', 'P1-35', 'P1-33', 'P1-31', 'P1-29', 'P1-23'],
    backlight: 3,
    rows: 2,
    cols: 16,
  });
  const led = new five.Led('P1-7');

  led.blink();
  lcd.clear().print('Hello!');
  motion.on("calibrated", function() {
    console.log("calibrated");
  });

  motion.on("change", function() {
    lcd.clear().print(cryptos[i]);
    i === 2 ? i = 0 : i++;
  });

});
