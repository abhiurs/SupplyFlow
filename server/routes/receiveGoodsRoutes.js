const express = require("express");
const router = express.Router();

const GoodsReceipt = require("../models/GoodsReceipt");
const PurchaseOrder = require("../models/PurchaseOrder");
const Product = require("../models/Product");

// SAVE GOODS RECEIPT

// SAVE GOODS RECEIPT

router.post("/", async (req, res) => {
  try {

    const {
      poNumber,
      supplier,
      product,
      quantityReceived,
      batchNumber,
      expiryDate,
      warehouse,
      notes,
    } = req.body;

    // 1. Save Goods Receipt

    const receipt = await GoodsReceipt.create({
      poNumber,
      supplier,
      product,
      quantityReceived,
      batchNumber,
      expiryDate,
      warehouse,
      notes,
    });

    // 2. Update Purchase Order Status

    await PurchaseOrder.findOneAndUpdate(
      { poNumber },
      {
        status: "Received",
      }
    );

    // 3. Increase Product Stock

    await Product.findOneAndUpdate(
    { name: product },
    {
        $inc: {
            quantity: quantityReceived,
        },
    }
);

    res.status(201).json({
      success: true,
      message: "Goods received successfully",
      receipt,
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
});

module.exports = router;