const express = require("express");
const router = express.Router();

const GoodsReceipt = require("../models/GoodsReceipt");
const PurchaseOrder = require("../models/PurchaseOrder");

router.post("/", async (req, res) => {
  try {
    const receipt = await GoodsReceipt.create(req.body);

    await PurchaseOrder.findByIdAndUpdate(
      req.body.purchaseOrderId,
      {
        status: "Received",
      }
    );

    res.json(receipt);

  } catch (err) {

    res.status(500).json({
      error: err.message,
    });

  }
});

module.exports = router;