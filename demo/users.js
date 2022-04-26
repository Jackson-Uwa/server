const uuid = require("uuid");

const users = [
  { id: uuid.v4(), name: "Jackson Iyamu", age: 24 },
  { id: uuid.v4(), name: "Jerkins Iyamu", age: 26 },
  { id: uuid.v4(), name: "Adesuwa Iyamu", age: 28 },
  { id: uuid.v4(), name: "Nathaniel Iyamu", age: 30 },
];

module.exports = users;
