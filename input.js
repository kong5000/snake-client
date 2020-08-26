const readline = require('readline');
readline.emitKeypressEvents(process.stdin);

const handleUserInput = (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  }
}
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('keypress', handleUserInput);
  return stdin;
}

module.exports = {setupInput};