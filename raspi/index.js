const readline = require('readline');
const mainMenu = require('./menuFactory').mainMenu;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/***** MAIN *****/

let current = mainMenu.head;
rl.write(`${mainMenu.head.data}\n`);

rl.on('line', (input) => {
  switch(input) {
    case 'next':
      current = current.next;
      rl.write(`${current.data}\n`);
    break;
    case 'ok':
      current = current.down;
      rl.write(`${current.data}\n`);
    break;
    case 'back':
    if (current.up) {
      current = current.up;
    } else {
      while(!current.up)
        current = current.next;
      current = current.up;
    }
    rl.write(`${current.data}\n`);
    break;
  }
});
