import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { readExcelFile } from "../utils/readExcel";
import InventoryValueChart from "../components/charts/InventoryValueChart";
import CategoryBreakdownChart from "../components/charts/CategoryBreakdownChart";
import InventoryTable from "../components/tables/InventoryTable";
import AnimatedNumber from "../components/AnimatedNumber";
import TopSellingProducts from "../components/analytics/TopSellingProducts";
import WarehousePerformanceChart from "../components/analytics/WarehousePerformanceChart";
import AddProductModal from "../components/AddProductModal";


const Inventory = () => {

  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
const [statusFilter, setStatusFilter] = useState("All");
const [categoryFilter, setCategoryFilter] = useState("All");
  const [startDate, setStartDate] = useState("2025-06-01");
const [endDate, setEndDate] = useState("2025-06-30");
const [showAddModal, setShowAddModal] = useState(false);
const [showStockCount, setShowStockCount] = useState(false);
const [showAdjustments, setShowAdjustments] = useState(false);
const [showBatchExpiry, setShowBatchExpiry] = useState(false);
const [activeAction, setActiveAction] = useState("");
  
const topSellingProducts = products
  .sort((a, b) => Number(b.Stock) - Number(a.Stock))
  .slice(0, 5);


const filteredProducts = products.filter((product) => {

  const matchesSearch =
    product["Product Name"]
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());

  let matchesStatus = true;

  if (statusFilter === "Low Stock") {
    matchesStatus = Number(product.Stock) < 100;
  }

  else if (statusFilter === "Out OfStock") {
    matchesStatus = Number(product.Stock) === 0;
  }

  return matchesSearch && matchesStatus;
});


  const totalProducts = products.length;

const totalStock = products.reduce((acc, item) => {

  const stock = parseFloat(item["Stock"]);

  return acc + (isNaN(stock) ? 0 : stock);

}, 0);

const totalValue = products.reduce((acc, item) => {

  const stock = parseFloat(item["Stock"]);
  const price = parseFloat(item["Price"]);

  return (
    acc +
    (isNaN(stock) ? 0 : stock) *
    (isNaN(price) ? 0 : price)
  );

}, 0);

const lowStock = products.filter(
  item =>
    Number(item["Stock"] || 0) <=
    Number(item["Reorder Level"] || 0)
).length;

const outOfStock = products.filter(
  item =>
    Number(item["Stock"] || 0) === 0
).length;

  const isMainInventoryPage =
    location.pathname === "/inventory";


    const statCards = [
  {
    title: "Total Products",
    value: totalProducts,
    change: "+12 this month",
  },

  {
  title: "Total Stock",
  value: totalStock,
  change: "+9.8% vs last month",
},

  {
  title: "Stock Value",
  value: totalValue,
  change: "+10.2% vs last month",
},

  {
    title: "Low Stock",
    value: lowStock,
    change: "Requires attention",
  },

  {
    title: "Out of Stock",
    value: outOfStock,
    change: "Needs immediate action",
  },
];

const lowStockItems = products.filter(
  (product) =>
    Number(product["Stock"] || 0) <=
      Number(product["Reorder Level"] || 0) &&
    Number(product["Stock"] || 0) > 0
).length;

const outOfStockItems = products.filter(
  (product) => Number(product["Stock"] || 0) === 0
).length;

const expiringSoon = products.filter(
  (product) => {
    if (!product["Expiry Date"]) return false;

    const expiryDate = new Date(product["Expiry Date"]);
    const today = new Date();

    const diffDays =
      (expiryDate - today) / (1000 * 60 * 60 * 24);

    return diffDays > 0 && diffDays <= 30;
  }
).length;

const slowMoving = products.filter(
  (product) =>
    Number(product["Stock"] || 0) > 100
).length;


  useEffect(() => {
  const loadProducts = async () => {
    const data = await readExcelFile(
      "/data/inventory.xlsx",
      "Products"
    );

    setProducts(data);

    console.log(Object.keys(data[0]));
  };

  loadProducts();
}, []);

if (!isMainInventoryPage) {
  return <Outlet />;
}

const handleAddProduct = () => {
  setActiveAction("add");
  setShowAddModal(true);
};

const handleViewLowStock = () => {

  setActiveAction("lowstock");

  setStatusFilter("Low Stock");

  setTimeout(() => {

    document
      .getElementById("inventory-products")
      ?.scrollIntoView({
        behavior: "smooth",
      });

  }, 100);
};

const handleStockCount = () => {
  setActiveAction("stockcount");
  setShowStockCount(true);
};

const handleAdjustments = () => {
  setActiveAction("adjustments");
  setShowAdjustments(true);
};

const handleBatchExpiry = () => {
  setActiveAction("batch");
  setShowBatchExpiry(true);
};

const handleImportProducts = () => {

  setActiveAction("import");

  document
    .getElementById("importProductsInput")
    .click();
};


  return (

    <div className="space-y-8 max-w-[1700px] mx-auto">

      {/* HEADER */}

<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

  <div>

    <h1 className="text-4xl font-bold tracking-tight text-slate-800">
      Inventory Overview
    </h1>

    <p className="text-slate-500 mt-2 text-lg">
      Monitor stock levels, warehouse performance and inventory analytics
    </p>

  </div>

  <div className="flex flex-wrap gap-3">

    <div className="flex items-center gap-4 flex-wrap">

  {/* START DATE */}
  <input
    type="date"
    value={startDate}
    onChange={(e) => setStartDate(e.target.value)}
    className="
      bg-white
      border border-slate-200
      rounded-2xl
      px-5 py-3
      shadow-sm
      text-slate-700
      outline-none
      focus:ring-2
      focus:ring-indigo-500
      transition
    "
  />

  {/* END DATE */}
  <input
    type="date"
    value={endDate}
    onChange={(e) => setEndDate(e.target.value)}
    className="
      bg-white
      border border-slate-200
      rounded-2xl
      px-5 py-3
      shadow-sm
      text-slate-700
      outline-none
      focus:ring-2
      focus:ring-indigo-500
      transition
    "
  />

  {/* FILTER BUTTON */}
  <button
    className="
      bg-indigo-600
      hover:bg-indigo-700
      text-white
      px-6 py-3
      rounded-2xl
      font-medium
      shadow-lg
      transition-all
      duration-300
    "
  >
    Filters
  </button>

</div>

  </div>

</div>

      {/* STATS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-6">

        {statCards.map((card, index) => (

          <div
            key={index}
            className="
bg-white/90
backdrop-blur-xl
rounded-3xl
p-6
border border-slate-100
shadow-[0_8px_30px_rgb(0,0,0,0.06)]
hover:shadow-[0_10px_40px_rgb(0,0,0,0.10)]
hover:-translate-y-1
transition-all
duration-300
"
          >

            <h3 className="text-slate-500 font-medium">
              {card.title}
            </h3>

            <h1 className="text-4xl font-bold mt-3">

  {card.title === "Stock Value" ? (
    `₹${Number(card.value).toLocaleString()}`
  ) : (
    <AnimatedNumber value={Number(card.value)} />
  )}

</h1>

            <p className="text-green-600 mt-3 text-sm">
              {card.change}
            </p>

          </div>

        ))}

      </div>

      {/* ANALYTICS */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* STOCK STATUS */}

        <div className="grid grid-cols-1 xl:grid-cols-a bg-white/90
backdrop-blur-xl
rounded-3xl
p-7
border border-slate-100
shadow-[0_8px_30px_rgb(0,0,0,0.06)]
hover:shadow-[0_10px_40px_rgb(0,0,0,0.10)]
transition-all
duration-300 gap-6">

          <h2 className="text-xl font-bold mb-6">
            Stock Status
          </h2>

          <div className="flex items-center justify-center">

            <div className="w-64 h-64 rounded-full border-[18px] border-indigo-500 shadow-inner bg-indigo-50 flex items-center justify-center">

              <div className="text-center">

                <h1 className="text-5xl font-bold">
                  {totalProducts}
                </h1>

                <p className="text-slate-500">
                  Total Products
                </p>

              </div>

            </div>

          </div>

          <div className="mt-8 space-y-4">

            <div className="flex justify-between">

              <span className="text-green-600">
                In Stock
              </span>

              <span>
                {totalProducts - lowStock - outOfStock}
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-orange-500">
                Low Stock
              </span>

              <span>
                {lowStock}
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-red-500">
                Out of Stock
              </span>

              <span>
                {outOfStock}
              </span>

            </div>

          </div>

        </div>

        <CategoryBreakdownChart products={products} />

        {/* TREND */}

        <div className="grid grid-cols-1 xl:grid-cols-a bg-white/90
backdrop-blur-xl
rounded-3xl
p-7
border border-slate-100
shadow-[0_8px_30px_rgb(0,0,0,0.06)]
hover:shadow-[0_10px_40px_rgb(0,0,0,0.10)]
transition-all
duration-300 gap-6">

          <h2 className="text-xl font-bold mb-6">
            Stock Value Trend
          </h2>


          <InventoryValueChart products={products} />

        </div>

      </div>

      {/* ALERTS */}

      <div className="grid grid-cols-1 xl:grid-cols-a bg-white/90
backdrop-blur-xl
rounded-3xl
p-7
border border-slate-100
shadow-[0_8px_30px_rgb(0,0,0,0.06)]
hover:shadow-[0_10px_40px_rgb(0,0,0,0.10)]
transition-all
duration-300 gap-6">

        <h2 className="text-2xl font-bold mb-6">
          Inventory Alerts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="bg-slate-50
rounded-3xl
p-6
hover:bg-white
hover:shadow-lg
transition-all
duration-300">

            <h1 className="text-3xl font-bold text-orange-500">
              {lowStockItems}
            </h1>

            <p className="mt-2 font-medium">
              Low Stock Items
            </p>

          </div>

          <div className="bg-slate-50
rounded-3xl
p-6
hover:bg-white
hover:shadow-lg
transition-all
duration-300">

            <h1 className="text-3xl font-bold text-red-500">
             {outOfStockItems}
            </h1>

            <p className="mt-2 font-medium">
              Out Of Stock
            </p>

          </div>

          <div className="bg-slate-50
rounded-3xl
p-6
hover:bg-white
hover:shadow-lg
transition-all
duration-300">

            <h1 className="text-3xl font-bold text-purple-500">
              {expiringSoon}
            </h1>

            <p className="mt-2 font-medium">
              Expiring Soon
            </p>

          </div>

          <div className="bg-slate-50
rounded-3xl
p-6
hover:bg-white
hover:shadow-lg
transition-all
duration-300">

            <h1 className="text-3xl font-bold text-blue-500">
              {slowMoving}
            </h1>

            <p className="mt-2 font-medium">
              Slow Moving
            </p>

          </div>

        </div>

      </div>

<div  id="inventory-products" className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 mt-8">

  {/* TOP HEADER */}
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-6">

    {/* LEFT SIDE */}
    <div>
      <h2 className="text-4xl font-bold text-slate-900">
        Inventory Products
      </h2>

      <p className="text-slate-500 mt-2 text-lg">
        Manage stock and products
      </p>
    </div>

    {/* RIGHT SIDE */}
    <div className="flex gap-4">

      {/* SEARCH */}
      <input
  type="text"
  placeholder="Search products..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-[#4F46E5]"
/>
<select
  value={statusFilter}
  onChange={(e) => setStatusFilter(e.target.value)}
  className="bg-gray-50 border border-gray-200 rounded-2xl px-4"
>
  <option value="All">All</option>
  <option value="Low Stock">Low Stock</option>
  <option value="Out Of Stock">Out Of Stock</option>
</select>


      {/* FILTER */}
      <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
        className="
          bg-slate-50
          border
          border-slate-200
          rounded-2xl
          px-5
          py-4
          text-lg
          outline-none
          focus:ring-2
          focus:ring-indigo-500
        "
      >
        <option value="All">All</option>
        <option value="Office">Office</option>
        <option value="Electronics">Electronics</option>
        <option value="Packaging">Packaging</option>
        <option value="Furniture">Furniture</option>
        <option value="Hardware">Hardware</option>
      </select>

    </div>
  </div>

  {/* TABLE */}
  <InventoryTable products={filteredProducts} />

</div>

        {/* STOCK COUNTS */}

        <div className="
  bg-white
  rounded-3xl
  border
  border-slate-100
  shadow-sm
  p-8
  mt-10
">
  
  <div className="mb-8">
    <h2 className="text-3xl font-bold text-slate-800">
      Recent Stock Counts
    </h2>

    <p className="text-slate-500 mt-2">
      Latest inventory stock updates
    </p>
  </div>

  <InventoryTable products={products.slice(0, 10)} />

</div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

  <TopSellingProducts
  products={topSellingProducts}
/>

</div>

<WarehousePerformanceChart
  products={products}
/>
  

      {/* QUICK ACTIONS */}

      <div className="grid grid-cols-1 xl:grid-cols-a bg-white/90
backdrop-blur-xl
rounded-3xl
p-7
border border-slate-100
shadow-[0_8px_30px_rgb(0,0,0,0.06)]
hover:shadow-[0_10px_40px_rgb(0,0,0,0.10)]
transition-all
duration-300 gap-6">

        <h2 className="text-2xl font-bold mb-6">
          Quick Actions
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-6">

          <button
  onClick={handleAddProduct}
  className={`rounded-3xl p-6 text-xl font-semibold border transition-all duration-300
${
  activeAction === "add"
    ? "bg-[#4F46E5] text-white shadow-lg scale-105"
    : "bg-white text-black hover:bg-gray-50"
}`}
>
  Add Product
</button>

<button
  onClick={handleViewLowStock}
  className={`rounded-3xl p-6 text-xl font-semibold border transition-all duration-300
${
  activeAction === "lowstock"
    ? "bg-[#4F46E5] text-white shadow-lg scale-105"
    : "bg-white text-black hover:bg-gray-50"
}`}
>
  View Low Stock
</button>

<button
  onClick={handleStockCount}
  className={`rounded-3xl p-6 text-xl font-semibold border transition-all duration-300
${
  activeAction === "stockcount"
    ? "bg-[#4F46E5] text-white shadow-lg scale-105"
    : "bg-white text-black hover:bg-gray-50"
}`}
>
  Start Stock Count
</button>

<button
  onClick={handleAdjustments}
  className={`rounded-3xl p-6 text-xl font-semibold border transition-all duration-300
${
  activeAction === "adjustments"
    ? "bg-[#4F46E5] text-white shadow-lg scale-105"
    : "bg-white text-black hover:bg-gray-50"
}`}
>
  Stock Adjustments
</button>

<button
  onClick={handleBatchExpiry}
  className={`rounded-3xl p-6 text-xl font-semibold border transition-all duration-300
${
  activeAction === "batch"
    ? "bg-[#4F46E5] text-white shadow-lg scale-105"
    : "bg-white text-black hover:bg-gray-50"
}`}
>
  Batch & Expiry
</button>

<button
  onClick={handleImportProducts}
  className={`rounded-3xl p-6 text-xl font-semibold border transition-all duration-300
${
  activeAction === "import"
    ? "bg-[#4F46E5] text-white shadow-lg scale-105"
    : "bg-white text-black hover:bg-gray-50"
}`}
>
  Import Products
</button>

      <Outlet/>

      <input
  type="file"
  id="importProductsInput"
  accept=".xlsx,.csv"
  className="hidden"
/>

      {/* ADD PRODUCT MODAL */}



    </div>

    </div>

    {showAddModal && (
  <AddProductModal
    onClose={() => setShowAddModal(false)}
  />
)}

{showStockCount && (

  <div className="fixed inset-0 w-screen h-screen bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">

    <div className="bg-white w-[450px] rounded-[32px] shadow-2xl p-8 relative animate-scaleIn">

      <h2 className="text-3xl font-bold mb-6">
        Start Stock Count
      </h2>

      <input
        type="text"
        placeholder="Warehouse Name"
        className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 mb-4 outline-none focus:ring-2 focus:ring-[#4F46E5]"
      />

      <button
        className="w-full bg-[#4F46E5] text-white p-4 rounded-xl"
      >
        Start Count
      </button>

      <button
        onClick={() => {
  setShowStockCount(false);
  setActiveAction("");
}}
        className="mt-4 w-full border border-gray-200 p-4 rounded-2xl font-medium hover:bg-gray-100 transition"
      >
        Cancel
      </button>

    </div>

  </div>
)}

{showAdjustments && (

  <div className="fixed inset-0 w-screen h-screen bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">

    <div className="bg-white w-[450px] rounded-[32px] shadow-2xl p-8 relative animate-scaleIn">

      <h2 className="text-3xl font-bold mb-6">
        Stock Adjustment
      </h2>

      <input
        type="text"
        placeholder="Product Name"
        className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 mb-4 outline-none focus:ring-2 focus:ring-[#4F46E5]"
      />

      <input
        type="number"
        placeholder="Adjust Quantity"
        className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 mb-4 outline-none focus:ring-2 focus:ring-[#4F46E5]"
      />

      <button
        className="w-full bg-[#4F46E5] hover:bg-[#4338CA] transition text-white p-4 rounded-2xl font-semibold shadow-lg">
        Save Adjustment
      </button>

      <button
        onClick={() => {
  setShowAdjustments(false);
  setActiveAction("");
}}
        className="w-full mt-3 border border-gray-200 p-4 rounded-2xl font-medium hover:bg-gray-100 transition"
      >
        Cancel
      </button>

    </div>

  </div>
)}

{showBatchExpiry && (

  <div className="fixed inset-0 w-screen h-screen bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">

    <div className="bg-white w-[450px] rounded-[32px] shadow-2xl p-8 relative animate-scaleIn">

      <h2 className="text-3xl font-bold mb-6">
        Batch & Expiry
      </h2>

      <input
        type="text"
        placeholder="Batch Number"
        className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 mb-4 outline-none focus:ring-2 focus:ring-[#4F46E5]"
      />

      <input
        type="date"
        className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 mb-4 outline-none focus:ring-2 focus:ring-[#4F46E5]"
      />

      <button
        className="w-full bg-[#4F46E5] hover:bg-[#4338CA] transition text-white p-4 rounded-2xl font-semibold shadow-lg"
      >
        Save Batch
      </button>

      <button
        onClick={() => {
  setShowBatchExpiry(false);
  setActiveAction("");
}}
        className="mt-4 w-full border border-gray-200 p-4 rounded-2xl font-medium hover:bg-gray-100 transition"
      >
        Cancel
      </button>

    </div>

  </div>
)}

    </div>


  );

};

export default Inventory;
