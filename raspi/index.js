const readline = require('readline');
const mainMenu = require('../setup/MenuSetup');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/***** MAIN *****/

let current = mainMenu.head;
let args = [];
rl.write(`${current.data}\n`);

rl.on('line', (input) => {
  switch(input) {

    case 'n':
      if (current.next) {
        current = current.next;
        rl.write(`${current.data}\n`);
      }
    break;

    case 'k':
      if (!current.down) {
        current = current.up;
        rl.write(`${current.data}\n`);
        break;
      }
      args.push(current.data);
      current = current.down;
      if (typeof current.data === 'function')
        current.data(args);
      else
        rl.write(`${current.data}\n`);
    break;

    case 'b':
      while(!current.up)
        current = current.next;
      args.pop();
      current = current.up;
      rl.write(`${current.data}\n`);
    break;
  }
});
