const express = require("express");
const router = express.Router();
const members = require("../../store/Members");


router.get("/", (req, res) => {
  res.json(members);
});

router.get("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json(`No member with id ${req.params.id}`);
  }
});

router.post("/", (req, res) => {
  const newMember = {
    id: members.length + 1,
    name: req.body.title,
    degree: req.body.content,
  };
  members.push(newMember);
  console.log(members);
  res.status(200).json(members);
});

router.put("/:id", (req, res) => {
  const id = members.find((member) => member.id === parseInt(req.params.id));
  if (!id) res.status(400).json({ error: `no member with id ${req.params.id}` });
    id.title = req.body.title;
    id.content = req.body.content;
    res.status(2000).json(members);
});

router.delete("/:id", (req, res) => {
  const id = members.find((member) => member.id === parseInt(req.params.id));
  if (!id) {
    return res
      .status(400)
      .json({ error: `no member with id ${req.params.id}` });
  }
  const index = members.indexOf(id);
  members.splice(index, 1);
  console.log(members);
  res.status(200);
});

module.exports = router;
