const five = require('johnny-five');
const Raspi = require('raspi-io');
const  { display, displayDigit } = require('../setup/HardwareSetup');

const board = new five.Board({ io: new Raspi() });

board.on("ready", () => {

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
  const decBtn = new five.Button({ pin: 'P1-12', isPullup: true });
  const incBtn = new five.Button({ pin: 'P1-10', isPullup: true });

  // Double 7-segment display
  const SEG_C =  new five.Led('P1-40');
  const SEG_E =  new five.Led('P1-38');
  const SEG_D =  new five.Led('P1-36');
  const SEG_B =  new five.Led('P1-32');
  const SEG_G =  new five.Led('P1-26');
  const SEG_A =  new five.Led('P1-24');
  const SEG_F =  new five.Led('P1-22');
  const DISP_1 = new five.Led('P1-18');
  const DISP_2 = new five.Led('P1-16');

  lcd.clear();
  display(53);
  buyLed.blink(500);
  sellLed.blink(300);
  motion.on("change", () => lcd.clear().print('Motion works'));
  decBtn.on("up", () => lcd.clear().print('- works'));
  incBtn.on("up", () => lcd.clear().print('+ works'));
  backBtn.on("up", () => lcd.clear().print('back works'));
  okBtn.on("up", () => lcd.clear().print('ok works'));
  nextBtn.on("up", () => lcd.clear().print('next works'));
});
