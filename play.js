/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const readline = require('readline');
readline.emitKeypressEvents(process.stdin);

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
      process.exit();
    }
  });
  return stdin;
}
setupInput();

const handleUserInput = (chunk,key) => {
  console.log("helllo hello")
}

const { connect } = require('./client');
console.log('Connecting ...');
connect();