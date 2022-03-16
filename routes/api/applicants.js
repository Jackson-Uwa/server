const express = require("express");
const router = express.Router();
const {
  getApplicants,
  getApplicant,
  postApplicant,
  updateApplicant,
  deleteApplicant,
} = require("../../controller/applicant");

router.get("/", getApplicants);

router.get("/:id", getApplicant)

router.post("/", postApplicant);

router.put("/:id", updateApplicant);

router.delete("/:id", deleteApplicant);

module.exports = router;
