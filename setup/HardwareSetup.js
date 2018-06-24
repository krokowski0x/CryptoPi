const sleep = require('sleep').msleep;

function display(digit) {
  let first = Math.floor(digit/10);
  let second = digit % 10;
  const DISP_1 = new five.Led('P1-18');
  const DISP_2 = new five.Led('P1-16');
  
  DISP_1.on();
  DISP_2.off();
  displayDigit(first);
  sleep(10);
  DISP_1.off();
  DISP_2.on();
  displayDigit(second);
  sleep(10);
};

function displayDigit(digit) {
  const SEG_C =  new five.Led('P1-40');
  const SEG_E =  new five.Led('P1-38');
  const SEG_D =  new five.Led('P1-36');
  const SEG_B =  new five.Led('P1-32');
  const SEG_G =  new five.Led('P1-26');
  const SEG_A =  new five.Led('P1-24');
  const SEG_F =  new five.Led('P1-22');

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

module.exports = {
  display,
  displayDigit,
};
