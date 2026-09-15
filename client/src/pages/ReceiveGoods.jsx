import { useEffect, useState } from "react";
import axios from "axios";

const ReceiveGoods = () => {
  const [receipts, setReceipts] = useState([]);
  const [selectedReceipt, setSelectedReceipt] = useState(null);

  const [receiveForm, setReceiveForm] = useState({
    quantityReceived: "",
    batchNumber: "",
    expiryDate: "",
    notes: "",
  });

  const fetchReceipts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/purchase-orders");

      const pendingReceipts = res.data.filter(
        (po) => po.status === "Pending" || po.status === "Approved",
      );

      setReceipts(pendingReceipts);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setReceiveForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReceiveGoods = async () => {
    try {
      if (!selectedReceipt) return;

      await axios.post("http://localhost:5000/api/receive-goods", {
        poNumber: selectedReceipt.poNumber,
        supplier: selectedReceipt.supplier,
        product: selectedReceipt.product,
        quantityReceived: Number(receiveForm.quantityReceived),
        batchNumber: receiveForm.batchNumber,
        expiryDate: receiveForm.expiryDate,
        warehouse: selectedReceipt.warehouse,
        notes: receiveForm.notes,
      });

      alert("Goods received successfully!");

      // Reload table
      fetchReceipts();

      // Clear selection
      setSelectedReceipt(null);

      // Clear form
      setReceiveForm({
        quantityReceived: "",
        batchNumber: "",
        expiryDate: "",
        notes: "",
      });
    } catch (err) {
      console.error(err);

      alert("Failed to receive goods.");
    }
  };

  useEffect(() => {
    fetchReceipts();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6">
      {/* LEFT SIDE */}

      <div className="col-span-2 bg-white rounded-2xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Pending Receipts</h2>
        </div>

        {/* FILTERS */}

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Search by PO No..."
            className="border border-slate-300 rounded-xl px-4 py-3 w-full"
          />

          <button className="border px-5 py-3 rounded-xl">Clear</button>
        </div>

        {/* TABLE */}
        <div className="max-h-[500px] overflow-y-auto border rounded-xl">
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4 text-left">PO No</th>

                <th className="p-4 text-left">Supplier</th>

                <th className="p-4 text-left">Order Date</th>

                <th className="p-4 text-left">Expected Date</th>

                <th className="p-4 text-left">Amount</th>

                <th className="p-4 text-left">Status</th>

                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {receipts.map((receipt) => (
                <tr
                  key={receipt._id}
                  onClick={() => {
                    setSelectedReceipt(receipt);

                    setReceiveForm({
                      quantityReceived: receipt.quantity,
                      batchNumber: "",
                      expiryDate: "",
                      notes: "",
                    });
                  }}
                  className="border-b hover:bg-blue-50 cursor-pointer transition"
                >
                  <td className="p-4 text-blue-600 font-semibold">
                    {receipt.poNumber}
                  </td>

                  <td className="p-4">{receipt.supplier}</td>

                  <td className="p-4">
                    {new Date(receipt.orderDate).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    {new Date(receipt.deliveryDate).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    ₹{Number(receipt.amount).toLocaleString("en-IN")}
                  </td>

                  <td className="p-4">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                      {receipt.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();

                        setSelectedReceipt(receipt);

                        setReceiveForm({
                          quantityReceived: receipt.quantity,
                          batchNumber: "",
                          expiryDate: "",
                          notes: "",
                        });
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                    >
                      Receive
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-6 h-[calc(100vh-120px)] flex flex-col">
        <div className="overflow-y-auto flex-1 pr-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
          {!selectedReceipt ? (
            <div className="flex flex-col items-center justify-center h-[500px] text-center">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-5xl">📦</span>
              </div>

              <h2 className="text-2xl font-bold text-slate-800 mb-3">
                Select a Receipt
              </h2>

              <p className="text-slate-500 max-w-sm">
                Click any purchase order or receive button to view goods receipt
                details, batch numbers, quantities, and warehouse information.
              </p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold">
                    Receive Against {selectedReceipt.poNumber}
                  </h2>

                  <p className="text-slate-500">{selectedReceipt.supplier}</p>
                </div>
              </div>

              {/* DETAILS */}

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-slate-500 text-sm">Order Date</p>

                  <h3>
                    {new Date(selectedReceipt.orderDate).toLocaleDateString()}
                  </h3>
                </div>

                <div>
                  <p className="text-slate-500 text-sm">Expected Date</p>

                  <h3>
                    {new Date(
                      selectedReceipt.deliveryDate,
                    ).toLocaleDateString()}
                  </h3>
                </div>

                <div>
                  <p className="text-slate-500 text-sm">Warehouse</p>

                  <h3>{selectedReceipt.warehouse}</h3>
                </div>
              </div>

              {/* ITEMS TABLE */}

              {/* RECEIVE DETAILS */}

              <div className="space-y-6">
                {/* Status */}

                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">
                      📦 {selectedReceipt.poNumber}
                    </h2>

                    <span
                      className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium
        ${
          selectedReceipt.status === "Approved"
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
                    >
                      {selectedReceipt.status}
                    </span>
                  </div>
                </div>

                <hr />

                {/* Supplier */}

                <div>
                  <p className="text-slate-500 text-sm">Supplier</p>

                  <h3 className="font-semibold text-lg">
                    {selectedReceipt.supplier}
                  </h3>
                </div>

                {/* Product */}

                <div>
                  <p className="text-slate-500 text-sm">Product</p>

                  <h3 className="font-semibold text-lg">
                    {selectedReceipt.product}
                  </h3>
                </div>

                {/* Cards */}

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-slate-500 text-sm">Ordered Quantity</p>

                    <h2 className="text-2xl font-bold">
                      {selectedReceipt.quantity}
                    </h2>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-slate-500 text-sm">Amount</p>

                    <h2 className="text-2xl font-bold">
                      ₹{Number(selectedReceipt.amount).toLocaleString("en-IN")}
                    </h2>
                  </div>
                </div>

                <hr />

                {/* Dates */}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-slate-500 text-sm">Order Date</p>

                    <h3>
                      {new Date(selectedReceipt.orderDate).toLocaleDateString()}
                    </h3>
                  </div>

                  <div>
                    <p className="text-slate-500 text-sm">Delivery Date</p>

                    <h3>
                      {new Date(
                        selectedReceipt.deliveryDate,
                      ).toLocaleDateString()}
                    </h3>
                  </div>
                </div>

                <div>
                  <p className="text-slate-500 text-sm">Warehouse</p>

                  <h3>Main Warehouse</h3>
                </div>

                <hr />

                {/* Receive Form */}

                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 font-medium">
                      Receive Quantity
                    </label>

                    <input
                      type="number"
                      name="quantityReceived"
                      value={receiveForm.quantityReceived}
                      onChange={handleInputChange}
                      placeholder={selectedReceipt.quantity}
                      className="w-full border rounded-xl px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">
                      Batch Number
                    </label>

                    <input
                      type="text"
                      name="batchNumber"
                      value={receiveForm.batchNumber}
                      onChange={handleInputChange}
                      placeholder="Enter Batch Number"
                      className="w-full border rounded-xl px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">
                      Expiry Date
                    </label>

                    <input
                      type="date"
                      name="expiryDate"
                      value={receiveForm.expiryDate}
                      onChange={handleInputChange}
                      className="w-full border rounded-xl px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">Notes</label>

                    <textarea
                      rows="3"
                      name="notes"
                      value={receiveForm.notes}
                      onChange={handleInputChange}
                      placeholder="Optional notes..."
                      className="w-full border rounded-xl px-4 py-3"
                    />
                  </div>
                </div>

                <button
                  onClick={handleReceiveGoods}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
                >
                  Save & Receive Goods
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReceiveGoods;
