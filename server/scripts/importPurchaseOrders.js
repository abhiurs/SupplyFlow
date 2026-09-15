require("dotenv").config();

const mongoose = require("mongoose");
const XLSX = require("xlsx");

const PurchaseOrder = require("../models/PurchaseOrder");

async function importPurchaseOrders() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    const workbook = XLSX.readFile("./data/inventory.xlsx");

    // IMPORTANT
    const sheet = workbook.Sheets["PurchaseOrders"];

    const rows = XLSX.utils.sheet_to_json(sheet);

console.log(rows[0]);

console.log(`Found ${rows.length} Purchase Orders`);

const purchaseOrders = rows.map((row) => ({
  poNumber: row["PO Number"],
  supplier: row["Supplier"],
  product: row["Product"],
  quantity: Number(row["Quantity"]),
  amount: Number(row["Amount"]),
  orderDate: new Date(row["Order Date"]),
  deliveryDate: new Date(row["Delivery Date"]),
  status: row["Status"],
}));

await PurchaseOrder.deleteMany();

await PurchaseOrder.insertMany(purchaseOrders);

    console.log("Purchase Orders Imported Successfully");

    process.exit();

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

importPurchaseOrders();