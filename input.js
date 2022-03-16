let connection;
const { MOVE_UP_KEYS, MOVE_LEFT_KEYS, MOVE_DOWN_KEYS, MOVE_RIGHT_KEYS } = require("./constants");

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};



const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  } if (key === MOVE_UP_KEYS) {
    connection.write('Move: up');
  } if (key === MOVE_LEFT_KEYS) {
    connection.write('Move: left');
  } if (key === MOVE_DOWN_KEYS) {
    connection.write('Move: down');
  } if (key === MOVE_RIGHT_KEYS) {
    connection.write('Move: right');
  } if (key === 'p') {
    connection.write('Say: Yay!');
  }
};

module.exports = setupInput; 