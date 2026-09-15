import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import CreatePOModal from "../components/CreatePOModal";
import ReceiveGoodsModal from "../components/ReceiveGoodsModal";
import RecordPaymentModal from "../components/RecordPaymentModal";
import AddSupplierModal from "../components/AddSupplierModal";

const Procurement = () => {
  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  const [showCreatePO, setShowCreatePO] = useState(false);

  const [showReceiveGoods, setShowReceiveGoods] = useState(false);

  const [showPayment, setShowPayment] = useState(false);

  const [showAddSupplier, setShowAddSupplier] = useState(false);

  useEffect(() => {
    fetchPurchaseOrders();
  }, []);

  const fetchPurchaseOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/purchase-orders");

      setPurchaseOrders(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const totalPOs = purchaseOrders.length;

  const inTransit = purchaseOrders.filter(
    (po) => po.status === "In Transit",
  ).length;

  const received = purchaseOrders.filter(
    (po) => po.status === "Delivered",
  ).length;

  const totalSpend = purchaseOrders.reduce((sum, po) => sum + po.amount, 0);

  const draftCount = purchaseOrders.filter(
    (po) => po.status === "Draft",
  ).length;

  const pendingCount = purchaseOrders.filter(
    (po) => po.status === "Pending",
  ).length;

  const approvedCount = purchaseOrders.filter(
    (po) => po.status === "Approved",
  ).length;

  const deliveredCount = purchaseOrders.filter(
    (po) => po.status === "Delivered",
  ).length;

  const cancelledCount = purchaseOrders.filter(
    (po) => po.status === "Cancelled",
  ).length;

  const upcomingDeliveries = purchaseOrders
    .filter((po) => po.status === "Pending" || po.status === "Approved")
    .slice(0, 5);

  const supplierTotals = purchaseOrders.reduce((acc, po) => {
    if (!acc[po.supplier]) {
      acc[po.supplier] = 0;
    }

    acc[po.supplier] += po.amount;

    return acc;
  }, {});

  const topSuppliers = Object.entries(supplierTotals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/purchase-orders");

      setOrders(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleAddSupplier = (newSupplier) => {
    setSuppliers((prev) => [...prev, newSupplier]);
  };

  return (
    <div className="p-6 bg-slate-100 min-h-screen">
      {/* HEADER */}

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">
            Procurement Overview
          </h1>

          <p className="text-slate-500 mt-2 text-lg">
            Purchase Order Analytics
          </p>
        </div>
      </div>

      {/* TOP CARDS */}

      <div className="flex gap-5 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm flex-1 min-w-[180px]">
          <p className="text-slate-500">Total POs</p>
          <h2 className="text-4xl font-bold mt-2">{orders.length}</h2>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm flex-1 min-w-[180px]">
          <p className="text-slate-500">In Transit</p>
          <h2 className="text-4xl font-bold mt-2">{inTransit}</h2>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm flex-1 min-w-[180px]">
          <p className="text-slate-500">Received</p>
          <h2 className="text-4xl font-bold mt-2"> {received}</h2>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm flex-1 min-w-[180px]">
          <p className="text-slate-500">Bills</p>
          <h2 className="text-4xl font-bold mt-2">97</h2>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm flex-1 min-w-[180px]">
          <p className="text-slate-500">Total Spend</p>
          <h2 className="text-3xl font-bold mt-2 break-words">
            ₹
            {totalSpend.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h2>
        </div>
      </div>

      {/* MIDDLE SECTION */}

      <div className="flex gap-6 mb-6 items-start">
        {/* PURCHASE STATUS */}

        <div className="bg-white rounded-2xl p-6 shadow-sm flex-1 min-w-[200px]">
          <h2 className="text-2xl font-semibold mb-5">Purchase Status</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Draft</span>
              <span className="font-bold">{draftCount}</span>
            </div>

            <div className="flex justify-between">
              <span>Pending</span>
              <span className="font-bold">{pendingCount}</span>
            </div>

            <div className="flex justify-between">
              <span>Approved</span>
              <span className="font-bold">{approvedCount}</span>
            </div>

            <div className="flex justify-between">
              <span>In Transit</span>
              <span className="font-bold">{inTransit}</span>
            </div>

            <div className="flex justify-between">
              <span>Received</span>
              <span className="font-bold">{deliveredCount}</span>
            </div>
          </div>
        </div>

        {/* SUPPLIERS */}

        <div className="bg-white rounded-2xl p-6 shadow-sm flex-1 min-w-[320px]">
          <h2 className="text-2xl font-semibold mb-5">Top Suppliers</h2>

          <div className="space-y-4">
            {topSuppliers.map(([supplier, amount]) => (
              <div key={supplier} className="flex justify-between">
                <span>{supplier}</span>

                <span>₹{amount.toLocaleString("en-IN")}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RECENT ACTIVITY */}

        <div className="bg-white rounded-2xl p-6 shadow-sm flex-1 min-w-[200px]">
          <h2 className="text-2xl font-semibold mb-5">Recent Activity</h2>

          <div className="space-y-4 text-sm">
            <div>PO-10048 approved</div>

            <div>Goods received for PO-10047</div>

            <div>Payment completed</div>
          </div>
        </div>
      </div>

      {/* UPCOMING DELIVERIES */}

      <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
        <h2 className="text-2xl font-semibold mb-5">Upcoming Deliveries</h2>

        <table className="w-full">
          <thead className="border-b">
            <tr className="text-left">
              <th className="py-3">PO No</th>
              <th>Supplier</th>
              <th>Expected Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {upcomingDeliveries.map((po) => (
              <tr key={po._id} className="border-b">
                <td className="py-4 font-medium">{po.poNumber}</td>

                <td>{po.supplier}</td>

                <td>{new Date(po.deliveryDate).toLocaleDateString("en-GB")}</td>

                <td>₹{po.amount.toLocaleString("en-IN")}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      po.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {po.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* QUICK ACTIONS */}

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-5">Quick Actions</h2>

        <div className="grid grid-cols-5 gap-4">
          <button
            onClick={() => setShowCreatePO(true)}
            className="bg-slate-100 hover:bg-blue-600 hover:text-white transition p-4 rounded-xl"
          >
            Create PO
          </button>

          <button
            onClick={() => setShowReceiveGoods(true)}
            className="bg-slate-100 hover:bg-green-600 hover:text-white transition p-4 rounded-xl"
          >
            Receive Goods
          </button>

          <button
            onClick={() => setShowAddSupplier(true)}
            className="bg-slate-100 hover:bg-slate-200 rounded-xl p-4 transition"
          >
            Add Supplier
          </button>

          <button className="bg-slate-100 p-4 rounded-xl">Record Bill</button>

          <button
            onClick={() => setShowPayment(true)}
            className="bg-slate-100 hover:bg-purple-600 hover:text-white transition p-4 rounded-xl"
          >
            Make Payment
          </button>
        </div>
      </div>

      <CreatePOModal
        isOpen={showCreatePO}
        onClose={() => setShowCreatePO(false)}
      />

      <ReceiveGoodsModal
        isOpen={showReceiveGoods}
        onClose={() => setShowReceiveGoods(false)}
      />

      {showPayment && (
        <RecordPaymentModal
          selectedBill={{
            supplier: "TechSource Ltd",
            billNo: "BILL-1001",
            balance: "₹75,000",
          }}
          closeModal={() => setShowPayment(false)}
        />
      )}

      {showAddSupplier && (

    <AddSupplierModal

        closeModal={() => setShowAddSupplier(false)}

        addSupplier={handleAddSupplier}

    />

)}

      <Outlet />
    </div>
  );
};

export default Procurement;
