import { useEffect, useState } from "react";
import axios from "axios";
import CreatePOModal from "../components/CreatePOModal";

const PurchaseOrders = () => {
  const [orders, setOrders] = useState([]);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const fetchPurchaseOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/purchase-orders");

      setOrders(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPurchaseOrders();
  }, []);
  
  const [showCreatePO, setShowCreatePO] = useState(false);

  const handleCreatePO = (newPO) => {
    setOrders((prev) => [
      {
        id: `PO-${10000 + prev.length + 1}`,
        supplier: newPO.supplier,
        expectedDate: newPO.deliveryDate,
        amount: `₹${(newPO.quantity * newPO.price).toLocaleString("en-IN")}`,
        status: "Draft",
        paymentTerms: "Net 30 Days",
        warehouse: "Main Warehouse",
        notes: newPO.notes,
        orderDate: new Date().toLocaleDateString(),
      },

      ...prev,
    ]);
  };

  return (
    <div className="grid grid-cols-3 gap-6">
      {/* LEFT SIDE */}

      <div className="col-span-2 bg-white rounded-2xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Purchase Orders</h2>

          <button
            onClick={() => setShowCreatePO(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
          >
            + Create PO
          </button>
        </div>

        <div className="border rounded-xl overflow-hidden">
          <div className="max-h-[650px] overflow-y-auto">
            <table className="w-full">
              <thead className="bg-slate-100 sticky top-0 z-10">
                <tr>
                  <th className="p-4 text-left">PO No</th>

                  <th className="p-4 text-left">Supplier</th>

                  <th className="p-4 text-left">Expected Date</th>

                  <th className="p-4 text-left">Amount</th>

                  <th className="p-4 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order._id}
                    onClick={() => setSelectedOrder(order)}
                    className="border-b cursor-pointer hover:bg-slate-50 transition"
                  >
                    <td className="p-4 font-semibold text-blue-600">
                      {order.poNumber}
                    </td>

                    <td className="p-4">{order.supplier}</td>

                    <td className="p-4">
                      {new Date(order.deliveryDate).toLocaleDateString()}
                    </td>

                    <td className="p-4">
                      ₹{Number(order.amount).toLocaleString("en-IN")}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm
                  ${
                    order.status === "Approved"
                      ? "bg-green-100 text-green-700"
                      : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : order.status === "Delivered"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-red-100 text-red-700"
                  }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="bg-white rounded-2xl shadow-sm p-6 h-fit sticky top-6">
        {!selectedOrder ? (
          <div className="flex flex-col items-center justify-center h-[500px] text-center">
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-5xl">📦</span>
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-3">
              Select a Purchase Order
            </h2>

            <p className="text-slate-500 max-w-sm">
              Click any purchase order from the table to view complete order
              details, supplier information, items, payment terms, and activity
              timeline.
            </p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold">{selectedOrder.poNumber}</h2>

                <p className="text-green-600 font-medium">
                  {selectedOrder.status}
                </p>
              </div>

              <button className="border px-4 py-2 rounded-lg hover:bg-slate-100">
                Download PDF
              </button>
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-slate-500 text-sm">Supplier</p>

                <h3 className="font-semibold">{selectedOrder.supplier}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-500 text-sm">Order Date</p>

                  <h3>{selectedOrder.orderDate}</h3>
                </div>

                <div>
                  <p className="text-slate-500 text-sm">Expected Date</p>

                  <h3>
                    {new Date(selectedOrder.deliveryDate).toLocaleDateString()}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-500 text-sm">Payment Terms</p>

                  <h3>{selectedOrder.paymentTerms}</h3>
                </div>

                <div>
                  <p className="text-slate-500 text-sm">Warehouse</p>

                  <h3>{selectedOrder.warehouse}</h3>
                </div>
              </div>

              <div>
                <p className="text-slate-500 text-sm">Total Amount</p>

                <h2 className="text-3xl font-bold">{selectedOrder.amount}</h2>
              </div>

              <div>
                <p className="text-slate-500 text-sm">Notes</p>

                <p className="text-slate-700">{selectedOrder.notes}</p>
              </div>
            </div>
          </>
        )}
      </div>

      <CreatePOModal
        isOpen={showCreatePO}
        onClose={() => setShowCreatePO(false)}
      />
    </div>
  );
};

export default PurchaseOrders;
