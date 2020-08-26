const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  conn.on('connect', () => {
    console.log("Successful connection!");
    conn.write('Name: US');
    // conn.write('Move: up');
    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 200)

  })

  conn.on('data', (data) => {
    console.log(data);
  })
  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
}

module.exports = {connect};


// // exit game via ctrl-c
// if (key === '\u0003') {
//   //connection.disconnect();
//   process.exit();
// }
// // move snake
// if (key === 'w'){
//   connection.write("Move: up");
// }

// process.stdin.on('keypress', (str, key) => {
//     if (key.ctrl && key.name === 'c') {
//       process.exit();
//     } else {
//       console.log(`You pressed the "${str}" key`);
//       console.log();
//       console.log(key);
//       console.log();
//     }
//   });
  