const mongoose = require("mongoose");
const XLSX = require("xlsx");
const Product = require("../models/Product");
require("dotenv").config();

async function importProducts() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    // Read Excel
    const workbook = XLSX.readFile("./data/inventory.xlsx");

    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    const data = XLSX.utils.sheet_to_json(sheet);

    console.log(`Found ${data.length} rows`);

    // Remove old data
    await Product.deleteMany({});

    const products = data.map((row) => ({
      name: row["Product Name"],
      sku: row["SKU"],
      category: row["Category"],
      quantity: Number(row["Stock"]) || 0,
      reorderLevel: Number(row["Reorder Level"]) || 0,
      supplier: row["Supplier"],
      purchasePrice: Number(row["Price"]) || 0,
sellingPrice: Number(row["Price"]) || 0,
      status: row["Status"] || "In Stock",
      warehouse: row["Warehouse"],
      unit: row["Unit"],
      sales: Number(row["Sales"]) || 0,
    }));

    await Product.insertMany(products);

    console.log(`${products.length} Products Imported`);

    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
}

importProducts();