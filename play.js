const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });
  conn.setEncoding("utf8");
  // interpret incoming data as text
  conn.on("connect", () => {
    console.log("hey i am connected!")
  })
  conn.on("data", (data) => {
    return console.log("Server outputs:", data);
  });

  return conn
};

console.log("Connecting ...");
connect();

