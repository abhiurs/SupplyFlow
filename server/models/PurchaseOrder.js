const mongoose = require("mongoose");

const purchaseOrderSchema = new mongoose.Schema(
  {
    poNumber: String,
    supplier: String,
    product: String,
    quantity: Number,
    amount: Number,
    orderDate: Date,
    deliveryDate: Date,
    status: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PurchaseOrder", purchaseOrderSchema);