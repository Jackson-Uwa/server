const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(cards);
});

router.get("/:id", (req, res) => {
  const found = cards.find((card) => card.id === parseInt(req.params.id));
  if (found) {
    res.json(cards.filter((card) => card.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `no member with id ${req.params.id}` });
  }
});

router.post("/", (req, res) => {
  const newPost = {
    id: cards.length + 1,
    img: req.body.img,
    head: req.body.head,
    param: req.body.param,
  };
  if (!newPost.head || !newPost.param) {
    res.json({ msg: "You must include both parameters" });
  }
  cards.push(newPost);
  res.status(201).json(cards);
});

router.put("/:id", (req, res) => {
  const found = cards.find((card) => card.id === parseInt(req.params.id));
  if (!found) res.json({ msg: `no member with id ${id}` });
  found.head = req.body.head;
  found.param = req.body.param;
  res.json(cards).status(200);
});

router.delete("/:id", (req, res) => {
  const num = cards.find((card) => card.id === parseInt(req.params.id));
  if (!num) res.json({ msg: `no member with id ${req.params.id}` }).status(400);
  const index = cards.indexOf(num);
  cards.splice(index, 1);
  res.json(cards).status(200);
});

module.exports = router;
