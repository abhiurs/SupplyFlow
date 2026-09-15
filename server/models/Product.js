const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
{
  productId: String,

  name: {
    type: String,
    required: true,
  },

  sku: String,

  category: String,

  quantity: {
    type: Number,
    default: 0,
  },

  reorderLevel: {
    type: Number,
    default: 0,
  },

  supplier: String,

  image: String,

  purchasePrice: {
    type: Number,
    default: 0,
  },

  sellingPrice: {
    type: Number,
    default: 0,
  },

  warehouse: String,

  unit: String,

  status: {
    type: String,
    default: "In Stock",
  },

  sales: {
    type: Number,
    default: 0,
  },
},
{
  timestamps: true,
}
);

module.exports = mongoose.model("Product", productSchema);