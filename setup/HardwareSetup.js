const five = require("johnny-five");
const Raspi = require("raspi-io");
const sleep = require('sleep').msleep;
const board = new five.Board({
  io: new Raspi(),
});

board.on("ready", function() {

  // LCD display
  const lcd = new five.LCD({
    pins: ['P1-37', 'P1-35', 'P1-33', 'P1-31', 'P1-29', 'P1-23'],
    backlight: 6,
    rows: 2,
    cols: 16,
  });

  // Menu control buttons
  const backBtn = new five.Button({ pin: 'P1-21', isPullup: true });
  const okBtn =   new five.Button({ pin: 'P1-19', isPullup: true });
  const nextBtn = new five.Button({ pin: 'P1-15', isPullup: true });

  // Motion detector
  const motion = new five.Motion('P1-13');

  // Buy/sell control
  const buyLed =  new five.Led('P1-11');
  const sellLed = new five.Led('P1-7');

  // 7-segment display -/+ control
  const decBtn = new five.Button('P1-8');
  const incBtn = new five.Button('P1-8');

  // Double 7-segment display
  const SEG_C =  new five.Led('P1-2');
  const SEG_E =  new five.Led('P1-3');
  const SEG_D =  new five.Led('P1-4');
  const SEG_B =  new five.Led('P1-5');
  const SEG_G =  new five.Led('P1-6');
  const SEG_A =  new five.Led('P1-7');
  const SEG_F =  new five.Led('P1-8');
  const DISP_1 = new five.Led('P1-10');
  const DISP_2 = new five.Led('P1-9');

  lcd.clear();
  // motion.on("change", function() {
  //   lcd.clear().print(Math.random()*100);
  // });
});

function display(digit) {
  let first = Math.floor(digit/10);
  let second = digit % 10;
  while(true) {
    DISP_1.on();
    DISP_2.off();
    displayDigit(first);
    sleep(10);
    DISP_1.off();
    DISP_2.on();
    displayDigit(second);
    sleep(10);
  }
};

function displayDigit(digit) {
  switch (digit) {
    case 0:
        SEG_A.on();
        SEG_B.on();
        SEG_C.on();
        SEG_D.on();
        SEG_E.on();
        SEG_F.on();
        SEG_G.off();
    break;

    case 1:
        SEG_A.off();
        SEG_B.on();
        SEG_C.on();
        SEG_D.off();
        SEG_E.off();
        SEG_F.off();
        SEG_G.off();
    break;

    case 2:
        SEG_A.on();
        SEG_B.on();
        SEG_C.off();
        SEG_D.on();
        SEG_E.on();
        SEG_F.off();
        SEG_G.on();
    break;

    case 3:
        SEG_A.on();
        SEG_B.on();
        SEG_C.on();
        SEG_D.on();
        SEG_E.off();
        SEG_F.off();
        SEG_G.on();
    break;

    case 4:
        SEG_A.off();
        SEG_B.on();
        SEG_C.on();
        SEG_D.off();
        SEG_E.off();
        SEG_F.on();
        SEG_G.on();
    break;

    case 5:
        SEG_A.on();
        SEG_B.off();
        SEG_C.on();
        SEG_D.on();
        SEG_E.off();
        SEG_F.on();
        SEG_G.on();
    break;

    case 6:
        SEG_A.on();
        SEG_B.off();
        SEG_C.on();
        SEG_D.on();
        SEG_E.on();
        SEG_F.on();
        SEG_G.on();
    break;

    case 7:
        SEG_A.on();
        SEG_B.on();
        SEG_C.on();
        SEG_D.off();
        SEG_E.off();
        SEG_F.off();
        SEG_G.off();
    break;

    case 8:
        SEG_A.on();
        SEG_B.on();
        SEG_C.on();
        SEG_D.on();
        SEG_E.on();
        SEG_F.on();
        SEG_G.on();
    break;

    case 9:
        SEG_A.on();
        SEG_B.on();
        SEG_C.on();
        SEG_D.on();
        SEG_E.off();
        SEG_F.on();
        SEG_G.on();
    break;
  }
};
