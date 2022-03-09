const express = require("express");
const router = express.Router();
const {
  getApplicants,
  postApplicant,
  updateApplicant,
  deleteApplicant,
} = require("../../controller/applicant");

router.get("/", getApplicants);

router.post("/", postApplicant);

router.put("/:id", updateApplicant);

router.delete("/:id", deleteApplicant);

module.exports = router;
