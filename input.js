const readline = require('readline');
const { connect } = require('./client');
readline.emitKeypressEvents(process.stdin);

// Stores the active TCP connection object.
let connection;

const handleUserInput = (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  }

  if (key.name === 'w') {
    console.log("up");
    connection.write('Move: up');
  }
  if (key.name === 'a') {
    console.log("left");
    connection.write('Move: left');
  }
  if (key.name === 's') {
    console.log("down");
    connection.write('Move: down');
  }
  if (key.name === 'd') {
    console.log("right");
    connection.write('Move: right');
  }

  if (key.name === 'z') {
    connection.write('Say: SSsssSSss');
  }
  if (key.name === 'x') {
    connection.write('Say: Hello!!!!');
  }
  if (key.name === 'r') {
    connection.write('Say: *Rattle*');
  }

}
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('keypress', handleUserInput);
  return stdin;
}

module.exports = { setupInput };