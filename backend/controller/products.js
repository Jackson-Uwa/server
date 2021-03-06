//const Products = require("../models/products");
const products = require("../demo/products");
const uuid = require("uuid");

const getProducts = (req, res) => {
  res.json(products);
};

const getProduct = (req, res) => {
  const found = products.some((p) => p.id === req.params.id);
  if (found === true) {
    const item = products.filter((pr) => pr.id === req.params.id);
    res.json(item).status(200);
  } else {
    res.status(400).json({ error: `No member with id ${req.params.id}` });
  }
};

const postProduct = (req, res) => {
  const product = {
    id: uuid.v4(),
    name: req.body.name,
    price: req.body.price,
  };
  if (!product.name || !product.price) {
    res
      .status(400)
      .json({ warning: "Object must include name and price of the product" });
  } else {
    products.push(product);
    res.status(201).json(products);
  }
};

const updateProduct = (req, res) => {
  const found = products.some((p) => p.id === req.params.id);
  const p = products.find((p) => p.id === req.params.id);
  if (found) {
    p.name = req.body.name;
    p.price = req.body.price;
    res.json(products).status(200);
  } else {
    res.status(400);
    res.json({ err: `Sorry, no member with id ${req.params.id}` });
  }
};

const deleteProduct = (req, res) => {
  const found = products.find((p) => p.id === req.params.id);
  if (!found) {
    res.json({ err: `Sorry, no member with id ${req.params.id}` }).status(400);
  } else {
    const index = products.indexOf(found);
    products.splice(index, 1);
    res.json(products).status(200);
  }
};

module.exports = {
  getProducts,
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
};
