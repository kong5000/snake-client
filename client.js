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
    console.log(data)
  })
  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
}

module.exports = {connect};