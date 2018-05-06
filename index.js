const five = require("johnny-five");
const SerialPort = require('serialport');
const board = new five.Board({
  port: "COM3"
});

const cryptos = ['BTC 1000.45', 'ETH 700,89', 'LTC 89.76'];
let i = 0;

board.on("ready", function() {
  const motion = new five.Motion(8);
  const lcd = new five.LCD({
    pins: [2,3,4,5,6,7],
    backlight: 3,
    rows: 2,
    cols: 16
  });

  lcd.clear().print('Hello!');
  motion.on("calibrated", function() {
    console.log("calibrated");
  });

  motion.on("change", function() {
    lcd.clear().print(cryptos[i]);
    i === 2 ? i = 0 : i++;
  });

});
