import { motion } from "framer-motion";
import DynamicAlerts from "../components/DynamicAlerts";
import InventoryValueChart from "../components/charts/InventoryValueChart";
import { useInventory } from "../context/InventoryContext";
import { useEffect, useState } from "react";
import { readExcelFile } from "../utils/readExcel";
import UpcomingDeliveries from "../components/UpcomingDeliveries";
import SupplierPerformance from "../components/SupplierPerformance";
import CategoryBreakdown from "../components/CategoryBreakdown";
import AddProductModal from "../components/AddProductModal";
import CreatePOModal from "../components/CreatePOModal";
import ReceiveGoodsModal from "../components/ReceiveGoodsModal";
import StockTransferModal from "../components/StockTransferModal";
import { Truck , BarChart3,PieChart as PieIcon,Package,ShoppingCart,  ArrowLeftRight,Zap,} from "lucide-react";
import { LayoutDashboard } from "lucide-react";

import {
  FiAlertTriangle,
  FiClock,
  FiPackage,
} from "react-icons/fi";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  FaBox,
  FaTruck,
  FaExclamationTriangle,
  FaUsers,
} from "react-icons/fa";

const trendData = [
  { name: "Apr 24", stock: 22000 },
  { name: "May 1", stock: 32000 },
  { name: "May 8", stock: 28000 },
  { name: "May 12", stock: 42000 },
  { name: "May 18", stock: 52000 },
];

const COLORS = [
  "#2563eb",
  "#10b981",
  "#f59e0b",
  "#8b5cf6",
];
const cardStyle = `
min-w-0
bg-white
rounded-3xl
border border-slate-200/70
shadow-sm
hover:shadow-xl
transition-all
duration-300
`;

const categoryData = [
  {
    name: "Food",
    value: 38,
    amount: "7.01L",
    percent: "38%",
    color: "#4F46E5",
  },
  {
    name: "Household",
    value: 25,
    amount: "4.61L",
    percent: "25%",
    color: "#3B82F6",
  },
  {
    name: "Personal Care",
    value: 18,
    amount: "3.32L",
    percent: "18%",
    color: "#22C55E",
  },
  {
    name: "Healthcare",
    value: 19,
    amount: "3.51L",
    percent: "19%",
    color: "#F59E0B",
  },
];

const Dashboard = () => {

  const [products, setProducts] = useState([]);

  const [showAddProductModal, setShowAddProductModal] =
  useState(false);

const [showPOModal, setShowPOModal] =
  useState(false);

const [showReceiveGoods, setShowReceiveGoods] =
  useState(false);

const [showStockTransfer, setShowStockTransfer] =
  useState(false);

useEffect(() => {

  const loadProducts = async () => {

    const data = await readExcelFile(
      "/data/inventory.xlsx",
      "Products"
    );

    console.log(data);

    setProducts(data);

  };

  loadProducts();

}, []);

const totalProducts = products.length;
const inventoryValue = products.reduce(
  (acc, item) =>
    acc +
    Number(item.Stock || 0) *
    Number(item.Price || 0),
  0
);
const lowStockItems = products.filter(
  item =>
    Number(item.Stock) <=
    Number(item["Reorder Level"])
).length;
const activeSuppliers = new Set(
  products.map(item => item.Supplier)
).size;

  return (

    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="
  min-h-screen
  bg-gradient-to-br from-slate-50 to-slate-100
  p-4
  md:p-6
  lg:p-8
  max-w-[1600px] mx-auto
"
>

      {/* HEADER */}
      <div className="mb-8">

        <div className="flex items-center gap-4">

  <div
    className="
      w-16 h-16
      rounded-2xl
      bg-indigo-100
      flex items-center
      justify-center
    "
  >

    <LayoutDashboard
      size={34}
      className="text-indigo-600"
    />

  </div>

  <div>

    <h1
      className="
        text-5xl
        font-bold
        tracking-tight
        text-slate-800
      "
    >
      Dashboard
    </h1>

    <p className="text-slate-500 mt-2">
      Monitor business performance and inventory operations
    </p>

  </div>

</div>

      </div>

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

       <div className={`${cardStyle} p-6`}>
          <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-400">
            Inventory Value
          </h3>

          <h1 className="text-3xl  md:text-4xl font-bold mt-3 text-slate-800  break-words">
            ₹{inventoryValue.toLocaleString()}
          </h1>

          <p className="text-sm font-medium text-green-500 mt-4">
            +12.5% This Month
          </p>
        </div>

       <div className={`${cardStyle} p-7`}>
          <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-400">
            Pending POs
          </h3>

          <h1 className="text-4xl font-bold mt-3 text-slate-800">
            {totalProducts}
          </h1>

          <p className="text-sm font-medium text-orange-500 mt-4">
            2 Awaiting Approval
          </p>
        </div>

       <div className={`${cardStyle} p-7`}>
          <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-400">
            Low Stock Items
          </h3>

          <h1 className="text-4xl font-bold mt-3 text-slate-800">
            {lowStockItems}
          </h1>

          <p className="text-sm font-medium text-red-500 mt-4">
            3 Critical
          </p>
        </div>

       <div className={`${cardStyle} p-7`}>
          <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-400">
            Active Suppliers
          </h3>

          <h1 className="text-4xl font-bold mt-3 text-slate-800">
            {activeSuppliers}
          </h1>

          <p className="text-sm font-medium text-blue-500 mt-4">
            View All
          </p>
        </div>

      </div>

      {/* SECOND ROW */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-8">

  {/* INVENTORY TREND */}
 <div className={`${cardStyle} xl:col-span-8 p-6`}>

    <div className="flex items-center gap-4">

  <div
    className="
      w-12 h-12
      rounded-2xl
      bg-blue-100
      flex items-center
      justify-center
    "
  >

    <BarChart3
      size={24}
      className="text-blue-600"
    />

  </div>

  <div>

    <h2
      className="
        text-[32px]
        tracking-tight
        font-bold
        text-slate-800
      "
    >
      Inventory Trend
    </h2>

  </div>

</div>

    <div className="h-[380px] pt-6">

 <InventoryValueChart />

</div>

  </div>

  {/* ALERTS */}
 <div className={`${cardStyle} xl:col-span-4 p-6 h-fit`}>

    <div className="flex items-center gap-4 mb-6">

  <div
    className="
      w-12 h-12
      rounded-2xl
      bg-red-100
      flex items-center
      justify-center
    "
  >

    <FiAlertTriangle
      size={24}
      className="text-red-600"
    />

  </div>

  <div>

    <h2
      className="
        text-4xl
        font-bold
        text-slate-900
      "
    >
      Alerts
    </h2>

  </div>

</div>

  <DynamicAlerts />

</div>

  </div>

{/* THIRD ROW */}
<div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 mt-8">

  {/* UPCOMING DELIVERIES */}
 <div className={`${cardStyle} p-7`}>

    <div
  className="
    flex items-center gap-4
    border-b border-slate-100
    pb-5 mb-5
  "
>

  {/* ICON BOX */}
  <div
    className="
      w-14 h-14
      rounded-2xl
      bg-indigo-100
      flex items-center
      justify-center
      shrink-0
    "
  >

    <Truck
      size={26}
      className="text-indigo-600"
    />

  </div>

  {/* TITLE */}
  <div>

    <h2
      className="
        text-3xl
        font-bold
        text-slate-800
      "
    >
      Upcoming Deliveries
    </h2>

  </div>

</div>

    <UpcomingDeliveries />
    

  </div>

  {/* SUPPLIER PERFORMANCE */}
 <div className={`${cardStyle} p-7`}>

    <div
  className="
    flex items-center gap-4
    border-b border-slate-100
    pb-5 mb-5
  "
>

  <div
    className="
      w-14 h-14
      rounded-2xl
      bg-indigo-100
      flex items-center
      justify-center
      shrink-0
    "
  >

    <BarChart3
      size={26}
      className="text-indigo-600"
    />

  </div>

  <div>

    <h2 className="text-3xl font-bold text-slate-800">
      Supplier Performance
    </h2>

  </div>

</div>

    <SupplierPerformance />

  </div>

  {/* CATEGORY BREAKDOWN */}

<div
  className="
    bg-white
    rounded-3xl
    border border-slate-200
    shadow-sm
    p-6
    hover:shadow-xl
    transition-all
    duration-300
  "
>

  {/* HEADER */}
        <div className="flex items-center gap-4 mb-8">
  
          <div
            className="
              w-12 h-12
              rounded-2xl
              bg-indigo-100
              flex items-center
              justify-center
            "
          >
  
            <PieIcon
              size={24}
              className="
                text-indigo-600
              "
            />
  
          </div>
  
          <div>
  
            <h2
              className="
                text-3xl
                font-bold
                text-slate-800
              "
            >
  
              Category Breakdown
  
            </h2>
            
          </div>
  
        </div>

         <div
    className="
      border-b
      border-slate-200
    "
  />


  {/* CONTENT */}
  <CategoryBreakdown />


    </div>

  </div>

  {/* QUICK ACTIONS */}

<div
  className="
    bg-white
    rounded-3xl
    border border-slate-200
    shadow-sm
    p-8
    mt-8
    hover:shadow-xl
    transition-all
    duration-300
  "
>

  {/* HEADER */}

  <div className="flex items-center gap-4 mb-3">

  {/* ICON */}
    <div
      className="
        w-12 h-12
        rounded-2xl
        bg-amber-100
        flex items-center
        justify-center
        shrink-0
      "
    >

      <Zap
        size={24}
        className="text-amber-600"
        strokeWidth={2.2}
      />

    </div>

    <div className="flex flex-col justify-center">

    <h2
      className="
        text-3xl
        font-bold
        tracking-tight
        text-slate-800
        leading-none
      "
    >

      Quick Actions

    </h2>

  </div>
  
  </div>

  <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mt-5" />

  {/* ACTION GRID */}

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* ADD PRODUCT */}

    <button
      onClick={() =>
        setShowAddProductModal(true)
      }
      className="
  group
  bg-white
  border border-slate-200
  rounded-3xl
  p-6
  text-left
  transition-all
  duration-300
  hover:scale-[1.02]
  hover:shadow-2xl
  hover:bg-gradient-to-br
  hover:from-indigo-500
  hover:to-blue-600
  hover:border-transparent
"
    >

      <div
        className="
          w-14 h-14
          rounded-2xl
          bg-indigo-100
group-hover:bg-white/20
          flex items-center
          justify-center
          mb-5
        "
      >

        <Package
          className="text-indigo-600"
          size={28}
        />

      </div>

      <h3
        className="
          text-2xl
          font-bold
          text-slate-800
group-hover:text-white
        "
      >

        Add Product

      </h3>

      <p className="text-slate-500
group-hover:text-white/80 mt-2">

        Add inventory items

      </p>

    </button>

    {/* CREATE PO */}

    <button
      onClick={() =>
        setShowPOModal(true)
      }
      className="
  group
  bg-white
  border border-slate-200
  rounded-3xl
  p-6
  text-left
  transition-all
  duration-300
  hover:scale-[1.02]
  hover:shadow-2xl
  hover:bg-gradient-to-br
  hover:from-indigo-500
  hover:to-blue-600
  hover:border-transparent
"
    >

      <div
        className="
          w-14 h-14
          rounded-2xl
          bg-indigo-100
          flex items-center
          justify-center
          mb-5
        "
      >

        <ShoppingCart
          className="text-indigo-600"
          size={28}
        />

      </div>

      <h3
        className="
          text-2xl
          font-bold
          text-slate-800
group-hover:text-white
        "
      >

        Create PO

      </h3>

      <p className="text-slate-500
group-hover:text-white/80 mt-2">

        Generate purchase orders

      </p>

    </button>

    {/* RECEIVE GOODS */}

    <button
      onClick={() =>
        setShowReceiveGoods(true)
      }
      className="
  group
  bg-white
  border border-slate-200
  rounded-3xl
  p-6
  text-left
  transition-all
  duration-300
  hover:scale-[1.02]
  hover:shadow-2xl
  hover:bg-gradient-to-br
  hover:from-indigo-500
  hover:to-blue-600
  hover:border-transparent
"
    >

      <div
        className="
          w-14 h-14
          rounded-2xl
          bg-green-100
          flex items-center
          justify-center
          mb-5
        "
      >

        <Truck
          className="text-green-600"
          size={28}
        />

      </div>

      <h3
        className="
          text-2xl
          font-bold
          text-slate-800
group-hover:text-white
        "
      >

        Receive Goods

      </h3>

      <p className="text-slate-500
group-hover:text-white/80 mt-2">

        Update incoming stock

      </p>

    </button>

    {/* STOCK TRANSFER */}

    <button
      onClick={() =>
        setShowStockTransfer(true)
      }
      className="
  group
  bg-white
  border border-slate-200
  rounded-3xl
  p-6
  text-left
  transition-all
  duration-300
  hover:scale-[1.02]
  hover:shadow-2xl
  hover:bg-gradient-to-br
  hover:from-indigo-500
  hover:to-blue-600
  hover:border-transparent
"
    >

      <div
        className="
          w-14 h-14
          rounded-2xl
          bg-orange-100
          flex items-center
          justify-center
          mb-5
        "
      >

        <ArrowLeftRight
          className="text-orange-500"
          size={28}
        />

      </div>

      <h3
        className="
          text-2xl
          font-bold
          text-slate-800
group-hover:text-white
        "
      >

        Stock Transfer

      </h3>

      <p className="text-slate-500
group-hover:text-white/80 mt-2">

        Move stock between warehouses

      </p>

    </button>

  </div>

</div>

{/* ADD PRODUCT MODAL */}

{
  showAddProductModal && (

    <AddProductModal
      onClose={() =>
        setShowAddProductModal(false)
      }
    />

  )
}

{/* CREATE PO MODAL */}

{
  showPOModal && (

    <CreatePOModal
    isOpen={showPOModal}
      onClose={() =>
        setShowPOModal(false)
      }
    />

  )
}

{/* RECEIVE GOODS MODAL */}

{
  showReceiveGoods && (

    <ReceiveGoodsModal
      onClose={() =>
        setShowReceiveGoods(false)
      }
    />

  )
}

{/* STOCK TRANSFER MODAL */}

{
  showStockTransfer && (

    <StockTransferModal
      onClose={() =>
        setShowStockTransfer(false)
      }
    />

  )
}

</motion.div>

  );

};

export default Dashboard;