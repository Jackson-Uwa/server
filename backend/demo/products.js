const uuid = require("uuid");

const products = [
  { id: uuid.v4(), name: "Moet & Chandon", price: 12.99 },
  { id: uuid.v4(), name: "Ciroc", price: 23.33 },
  { id: uuid.v4(), name: "Martini", price: 33.96 },
  { id: uuid.v4(), name: "Belaire", price: 66.0 },
];

module.exports = products;
