const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });
  conn.setEncoding("utf8");
  // interpret incoming data as text
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write('Name: PP');
    // conn.write('Move: up');

  }
  )

  conn.on("data", (data) => {
    console.log("Server outputs:", data);

  });

  return conn
};


console.log("Connecting ...");
connect();

module.exports = connect;