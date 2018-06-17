const five = require("johnny-five");
const Raspi = require("raspi-io");
const board = new five.Board({
  io: new Raspi(),
});

board.on("ready", function() {
  const lcd = new five.LCD({
    pins: ['P1-37', 'P1-35', 'P1-33', 'P1-31', 'P1-29', 'P1-38'],
    backlight: 6,
    rows: 2,
    cols: 16,
  });
  lcd.clear();
});
// const motion = new five.Motion('P1-8');
// motion.on("calibrated", function() {
//   console.log("calibrated");
// });
//
// motion.on("change", function() {
//   lcd.clear().print(Math.random()*100);
// });
