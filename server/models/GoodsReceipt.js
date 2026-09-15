const mongoose = require("mongoose");

const goodsReceiptSchema = new mongoose.Schema(
{
    poNumber: String,

    supplier: String,

    product: String,

    quantityReceived: Number,

    batchNumber: String,

    expiryDate: Date,

    warehouse: String,

    notes: String,
},
{
    timestamps: true,
}
);

module.exports = mongoose.model(
    "GoodsReceipt",
    goodsReceiptSchema
);