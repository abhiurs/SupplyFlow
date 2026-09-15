const purchaseOrderRoutes = require("./routes/purchaseOrderRoutes");
const path = require("path");
const productRoutes = require("./routes/productRoutes");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const receiveGoodsRoutes = require("./routes/receiveGoodsRoutes");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(
    "/uploads",
    express.static(
        path.join(__dirname, "uploads")
    )
);
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/purchase-orders", purchaseOrderRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/receive-goods", receiveGoodsRoutes);

app.get("/", (req, res) => {
  res.send("SupplyFlow API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});