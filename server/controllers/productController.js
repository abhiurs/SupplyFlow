const Product = require("../models/Product");


// GET PRODUCTS

const getProducts = async (req, res) => {

  try {

    const products = await Product.find();

    res.json(products);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};


// CREATE PRODUCT

const createProduct = async (req, res) => {

  try {

    const productData = {
      ...req.body,
    };

    if (req.file) {
      productData.image = req.file.filename;
    }

    const product = await Product.create(productData);

    res.status(201).json(product);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

const deleteProduct = async (req, res) => {

  try {

    const product = await Product.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Product deleted",
      product,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

const updateProduct = async (req, res) => {

  try {

    const updatedProduct =
      await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(updatedProduct);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
};