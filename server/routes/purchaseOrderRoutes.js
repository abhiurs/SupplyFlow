const express = require("express");
const router = express.Router();

const PurchaseOrder = require("../models/PurchaseOrder");

// GET ALL PURCHASE ORDERS
router.get("/", async (req, res) => {
  try {
    const orders = await PurchaseOrder.find();

    res.json(orders);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;