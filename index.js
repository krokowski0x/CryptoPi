const five = require("johnny-five");
const GDAX = require('gdax');

const board = new five.Board();
const webSocket = new GDAX.WebsocketClient(['ETH-EUR']);

board.on("ready", function() {
  const lcd = new five.LCD({ pins: [7, 8, 9, 10, 11, 12] });
  lcd.print("Hello");
});

webSocket.on('message', data => {
  console.log(data.price);
});
