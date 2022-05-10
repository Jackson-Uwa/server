//const User = require("../models/user");
const users = require("../demo/users");
const uuid = require("uuid");

const getUsers = (req, res) => {
  //const users = User.find();
  res.json(users).status(200);
};

const getUser = (req, res) => {
  const found = users.some((user) => user.id === req.params.id);
  if (found) {
    const memberUser = users.filter((user) => user.id === req.params.id);
    res.json(memberUser);
  } else {
    res.status(400);
    res.json({ error: `No member with id ${req.params.id}` });
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
  const member = users.find((user) => user.id === req.params.id);
  if (found) {
    member.name = req.body.name;
    member.age = req.body.age;
    res.json(users).status(200);
  } else {
    res.status(400);
    res.json({ msg: `No member with id ${req.params.id}` });
  }
};

const deleteUser = (req, res) => {
  const member = users.find((user) => user.id === req.params.id);
  if (!member) {
    res.json({ msg: `no member with id ${req.params.id}` }).status(400);
  } else {
    const index = users.indexOf(member);
    users.splice(index, 1);
    res.json(users).status(200);
  }
};

module.exports = {
  getUsers,
  getUser,
  postUser,
  updateUser,
  deleteUser,
};
