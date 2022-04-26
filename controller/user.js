//const User = require("../models/user");
const users = require("../demo/users");
const uuid = require("uuid");

const getUsers = (req, res) => {
  //const users = User.find();
  res.json(users).status(200);
};

const getUser = (req, res) => {
  //const found = users.some((user) => user.id === req.params.id);
  try {
    const user = users.filter((use) => use.id === req.params.id);
    res.json(user).status(200);
  } catch (error) {
    res.json(error).status(400);
  }
};

const postUser = (req, res) => {
  const newPost = {
    id: uuid.v4(),
    name: req.body.name,
    age: req.body.age,
  };
  users.push(newPost);
  res.status(201).json(users);
};

const updateUser = (req, res) => {
  const found = users.some((user) => user.id === req.params.id);
  const p = users.find((user) => user.id === req.params.id);
  try {
    if (found) {
      p.name = req.body.name;
      p.age = req.body.age;
      res.json(users).status(200);
    }
  } catch (error) {
    res.status(400).json({ msg: error } || { msg: `No member with id ${req.params.id}` });
  }
};

const deleteUser = (req, res) => {
  const num = users.find((user) => user.id === req.params.id);
  if (!num) res.json({ msg: `no member with id ${req.params.id}` }).status(400);
  const index = users.indexOf(num);
  users.splice(index, 1);
  res.json(users).status(200);
};

module.exports = {
  getUsers,
  getUser,
  postUser,
  updateUser,
  deleteUser,
};
