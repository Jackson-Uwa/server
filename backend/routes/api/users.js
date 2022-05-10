const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUser,
  postUser,
  updateUser,
  deleteUser,
} = require("../../controller/users");

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", postUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
