var five = require("johnny-five");
var SerialPort = require('serialport');
var board = new five.Board({
  port: "COM3"
});

board.on("ready", function() {

  const lcd = new five.LCD({
    pins: [2,3,4,5,6,7],
    backlight: 6,
    rows: 2,
    cols: 16
  });

  lcd.clear().print("Hello!");
});
