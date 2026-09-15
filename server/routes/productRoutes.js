const express = require("express");

const upload = require("../middleware/upload");

const router = express.Router();

const {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");

// GET PRODUCTS

router.get("/", getProducts);


// CREATE PRODUCT

router.post("/", upload.single("image"), createProduct);

router.delete("/:id", deleteProduct);

router.put("/:id", updateProduct);

module.exports = router;