const { CircularLinkedList, Node } = require('./CircularLinkedList');
const TickerTapeMode = require('../modes/TickerTapeMode');
const SingleCurrencyMode = require('../modes/SingleCurrencyMode');
const AccountMode = require('../modes/AccountMode');
const TradingMode = require('../modes/TradingMode');

const mainMenu = new CircularLinkedList(['1. Market Prices','2. My Account','3. Exit']);
const modePicker = new CircularLinkedList(['Ticker Tape Mode','Currency View Mode']);
const accountModePicker = new CircularLinkedList(['Show My Cryptos','Trade Cryptos']);

// TickerTapeMode options
const currPicker = new CircularLinkedList(['BTC','USD', 'EUR', 'GBP']);

// SingleCurrencyMode options
const baseCurrPicker = new CircularLinkedList(['BTC','USD', 'EUR', 'GBP']);
const mainCurrPicker = new CircularLinkedList(['BTC', 'ETH', 'LTC', 'BCH']);

// Exit options
const exitOpts = new CircularLinkedList(['Yes', 'No']);

const TTMode = new Node(TickerTapeMode);
const SCMode = new Node(SingleCurrencyMode);
const ACMode = new Node(AccountMode);
const TRMode = new Node(TradingMode);

// 1. Market Prices -> TickerTapeMode or SingleCurrencyMode
mainMenu.head.addChild(modePicker.head);
  // Ticker Tape Mode -> Base Currency Picker
  modePicker.head.addChild(currPicker.head);
    // Base Currency -> TTMode()
    for (let node of currPicker.nodes)
      node.addChild(TTMode);

  // Currency View Mode -> Base Currency Picker
  modePicker.head.next.addChild(baseCurrPicker.head);
    // Base Currency -> Main Currency
    for (let base of baseCurrPicker.nodes)
      base.addChild(mainCurrPicker.head);
      // Base Currency -> SCMode()
      for (let main of mainCurrPicker.nodes)
        main.addChild(SCMode);

// 2. My Account
mainMenu.head.next.addChild(accountModePicker.head);
accountModePicker.head.addChild(ACMode);
accountModePicker.head.next.addChild(TRMode);

// 3. Exit
mainMenu.head.next.next.addChild(exitOpts.head);
exitOpts.head.addChild(process.exit);

module.exports = mainMenu;
