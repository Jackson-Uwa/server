const express = require("express");
const {
  getProducts,
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
} = require("../../controller/products");
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", postProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
