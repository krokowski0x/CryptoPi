function next(current) {
  if (current.next) {
    current = current.next;
    lcd.clear().print(current.data);
  }
};

function ok(current) {
  if (!current.down) {
    current = current.up;
    lcd.clear().print(current.data);
    return;
  }
  args.push(current.data);
  current = current.down;
  if (typeof current.data === 'function')
    current.data(args);
  else
    lcd.clear().print(current.data);
};

function back(current) {
  if (!current.up)
    current = current.next;
  args.pop();
  current = current.up;
  lcd.clear().print(current.data);
};

module.exports = {
  next,
  ok,
  back,
};
