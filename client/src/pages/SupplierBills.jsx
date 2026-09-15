import { useState } from "react";

const SupplierBills = () => {

  const [bills] = useState([

    {
      id: "BILL-1024",
      supplier: "Nestlé India Ltd.",
      linkedPO: "PO-10048",
      billDate: "21 Jun 2025",
      dueDate: "21 Jul 2025",
      billAmount: "₹1,25,000",
      paidAmount: "₹75,000",
      balance: "₹50,000",
      paymentTerms: "Net 30 Days",
      status: "Partial",
      notes: "Invoice for PO-10048",
      subtotal: "₹1,05,932",
      cgst: "₹9,534",
      sgst: "₹9,534",
    },

    {
      id: "BILL-1023",
      supplier: "Tata Consumer Products",
      linkedPO: "PO-10047",
      billDate: "20 Jun 2025",
      dueDate: "20 Jul 2025",
      billAmount: "₹75,000",
      paidAmount: "₹75,000",
      balance: "₹0",
      paymentTerms: "Net 15 Days",
      status: "Paid",
      notes: "Fully paid invoice",
      subtotal: "₹63,560",
      cgst: "₹5,720",
      sgst: "₹5,720",
    },

  ]);

  const [selectedBill, setSelectedBill] = useState(null);

  return (

    <div className="grid grid-cols-3 gap-6">

      {/* LEFT SIDE */}

      <div className="col-span-2 bg-white rounded-2xl shadow-sm p-6">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-3xl font-bold">
            Supplier Bills
          </h2>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl">
            + Add Bill
          </button>

        </div>

        {/* FILTERS */}

        <div className="flex gap-3 mb-6">

          <input
            type="text"
            placeholder="Search Bill No..."
            className="border border-slate-300 rounded-xl px-4 py-3 w-full"
          />

          <button className="border px-5 py-3 rounded-xl">
            Clear
          </button>

        </div>

        {/* TABLE */}

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-4 text-left">
                Bill No
              </th>

              <th className="p-4 text-left">
                Supplier
              </th>

              <th className="p-4 text-left">
                Bill Date
              </th>

              <th className="p-4 text-left">
                Due Date
              </th>

              <th className="p-4 text-left">
                Bill Amount
              </th>

              <th className="p-4 text-left">
                Balance
              </th>

              <th className="p-4 text-left">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {bills.map((bill) => (

              <tr
                key={bill.id}
                onClick={() => setSelectedBill(bill)}
                className="border-b hover:bg-slate-50 cursor-pointer transition"
              >

                <td className="p-4 text-blue-600 font-semibold">
                  {bill.id}
                </td>

                <td className="p-4">
                  {bill.supplier}
                </td>

                <td className="p-4">
                  {bill.billDate}
                </td>

                <td className="p-4">
                  {bill.dueDate}
                </td>

                <td className="p-4">
                  {bill.billAmount}
                </td>

                <td className="p-4">
                  {bill.balance}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      bill.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : bill.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {bill.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* RIGHT SIDE */}

      <div className="bg-white rounded-2xl shadow-sm p-6 h-fit sticky top-6">

        {!selectedBill ? (

          <div className="flex flex-col items-center justify-center h-[500px] text-center">

            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">

              <span className="text-5xl">
                🧾
              </span>

            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-3">
              Select a Supplier Bill
            </h2>

            <p className="text-slate-500 max-w-sm">
              Click any bill number from the table to
              view invoice details, payment information,
              tax summary, and bill status.
            </p>

          </div>

        ) : (

          <>

            <div className="flex justify-between items-center mb-6">

              <div>

                <h2 className="text-2xl font-bold">
                  {selectedBill.id}
                </h2>

                <p className="text-slate-500">
                  {selectedBill.status}
                </p>

              </div>

              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
                Record Payment
              </button>

            </div>

            {/* DETAILS */}

            <div className="space-y-5">

              <div className="grid grid-cols-2 gap-4">

                <div>

                  <p className="text-slate-500 text-sm">
                    Supplier
                  </p>

                  <h3 className="font-semibold">
                    {selectedBill.supplier}
                  </h3>

                </div>

                <div>

                  <p className="text-slate-500 text-sm">
                    Linked PO
                  </p>

                  <h3>
                    {selectedBill.linkedPO}
                  </h3>

                </div>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div>

                  <p className="text-slate-500 text-sm">
                    Bill Date
                  </p>

                  <h3>
                    {selectedBill.billDate}
                  </h3>

                </div>

                <div>

                  <p className="text-slate-500 text-sm">
                    Due Date
                  </p>

                  <h3>
                    {selectedBill.dueDate}
                  </h3>

                </div>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div>

                  <p className="text-slate-500 text-sm">
                    Bill Amount
                  </p>

                  <h3 className="font-semibold">
                    {selectedBill.billAmount}
                  </h3>

                </div>

                <div>

                  <p className="text-slate-500 text-sm">
                    Paid Amount
                  </p>

                  <h3>
                    {selectedBill.paidAmount}
                  </h3>

                </div>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div>

                  <p className="text-slate-500 text-sm">
                    Balance
                  </p>

                  <h3 className="font-semibold text-red-500">
                    {selectedBill.balance}
                  </h3>

                </div>

                <div>

                  <p className="text-slate-500 text-sm">
                    Payment Terms
                  </p>

                  <h3>
                    {selectedBill.paymentTerms}
                  </h3>

                </div>

              </div>

              {/* SUMMARY */}

              <div className="bg-slate-50 rounded-xl p-5 mt-6">

                <h3 className="font-bold mb-4">
                  Summary
                </h3>

                <div className="space-y-3 text-sm">

                  <div className="flex justify-between">
                    <span>Sub Total</span>
                    <span>{selectedBill.subtotal}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>CGST</span>
                    <span>{selectedBill.cgst}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>SGST</span>
                    <span>{selectedBill.sgst}</span>
                  </div>

                  <div className="border-t pt-3 flex justify-between font-bold text-base">
                    <span>Total Amount</span>
                    <span>{selectedBill.billAmount}</span>
                  </div>

                </div>

              </div>

            </div>

          </>

        )}

      </div>

    </div>

  );

};

export default SupplierBills;