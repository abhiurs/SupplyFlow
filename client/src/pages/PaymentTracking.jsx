import RecordPaymentModal from "../components/RecordPaymentModal";
import { useState } from "react";

const PaymentTracking = () => {

  const [showPaymentModal, setShowPaymentModal] = useState(false);

const [selectedBill, setSelectedBill] = useState(null);

  const [payments] = useState([

    {
      id: "BILL-1024",
      supplier: "Nestlé India Ltd.",
      dueDate: "21 Jul 2025",
      billAmount: "₹1,25,000",
      paidAmount: "₹75,000",
      balance: "₹50,000",
      status: "Partial",
    },

    {
      id: "BILL-1022",
      supplier: "Hindustan Unilever Ltd.",
      dueDate: "19 Jul 2025",
      billAmount: "₹98,500",
      paidAmount: "₹0",
      balance: "₹98,500",
      status: "Pending",
    },

    {
      id: "BILL-1021",
      supplier: "ITC Limited",
      dueDate: "18 Jul 2025",
      billAmount: "₹1,80,000",
      paidAmount: "₹20,000",
      balance: "₹1,60,000",
      status: "Partial",
    },

  ]);

  const [selectedPayment, setSelectedPayment] = useState(null);

  return (

    <div className="bg-white rounded-2xl shadow-sm p-6">

      {/* LEFT SIDE */}

      <div className="col-span-2 bg-white rounded-2xl shadow-sm p-6">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-3xl font-bold">
            Payment Tracking
          </h2>

        </div>

        {/* STATS */}

        <div className="grid grid-cols-4 gap-4 mb-6">

          <div className="bg-slate-50 rounded-xl p-4">

            <p className="text-slate-500 text-sm">
              Total Payable
            </p>

            <h3 className="text-3xl font-bold text-blue-600">
              ₹3,45,000
            </h3>

          </div>

          <div className="bg-slate-50 rounded-xl p-4">

            <p className="text-slate-500 text-sm">
              Due Today
            </p>

            <h3 className="text-3xl font-bold text-orange-500">
              ₹45,000
            </h3>

          </div>

          <div className="bg-slate-50 rounded-xl p-4">

            <p className="text-slate-500 text-sm">
              Overdue
            </p>

            <h3 className="text-3xl font-bold text-red-500">
              ₹12,000
            </h3>

          </div>

          <div className="bg-slate-50 rounded-xl p-4">

            <p className="text-slate-500 text-sm">
              Paid This Month
            </p>

            <h3 className="text-3xl font-bold text-green-600">
              ₹8,75,000
            </h3>

          </div>

        </div>

        {/* FILTER BAR */}

<div className="flex items-center justify-between gap-4 mb-6">

  {/* LEFT SIDE */}

  <div className="flex gap-3 flex-1">

    {/* SEARCH */}

    <input
      type="text"
      placeholder="Search by Supplier, Bill No..."
      className="border border-slate-300 rounded-xl px-4 py-3 w-full max-w-sm outline-none focus:ring-2 focus:ring-blue-500"
    />

    {/* SUPPLIER FILTER */}

    <select className="border border-slate-300 rounded-xl px-4 py-3 outline-none">

      <option>
        Supplier: All
      </option>

      <option>
        Nestlé India Ltd.
      </option>

      <option>
        ITC Limited
      </option>

    </select>

    {/* STATUS FILTER */}

    <select className="border border-slate-300 rounded-xl px-4 py-3 outline-none">

      <option>
        Status: All
      </option>

      <option>
        Paid
      </option>

      <option>
        Pending
      </option>

      <option>
        Partial
      </option>

    </select>

    {/* DATE FILTER */}

    <select className="border border-slate-300 rounded-xl px-4 py-3 outline-none">

      <option>
        Date Range
      </option>

      <option>
        This Week
      </option>

      <option>
        This Month
      </option>

    </select>

    {/* CLEAR */}

    <button className="border border-slate-300 px-5 py-3 rounded-xl hover:bg-slate-100">

      Clear

    </button>

  </div>

  {/* RIGHT SIDE */}

  <button
  onClick={() => {

    setSelectedBill({
      supplier: "Nestlé India Ltd.",
      billNo: "BILL-1024",
      balance: "₹50,000",
    });

    setShowPaymentModal(true);

  }}
  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
>
  Record Payment
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
                Due Date
              </th>

              <th className="p-4 text-left">
                Bill Amount
              </th>

              <th className="p-4 text-left">
                Paid Amount
              </th>

              <th className="p-4 text-left">
                Balance
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {payments.map((payment) => (

              <tr
                key={payment.id}
                className="border-b hover:bg-slate-50 transition"
              >

                <td className="p-4 font-semibold">
                  {payment.id}
                </td>

                <td className="p-4">
                  {payment.supplier}
                </td>

                <td className="p-4">
                  {payment.dueDate}
                </td>

                <td className="p-4">
                  {payment.billAmount}
                </td>

                <td className="p-4">
                  {payment.paidAmount}
                </td>

                <td className="p-4">
                  {payment.balance}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      payment.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : payment.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {payment.status}
                  </span>

                </td>

                <td className="p-4">

                  <button
  onClick={() => {

    setSelectedBill(payment);

    setShowPaymentModal(true);

  }}
  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition"
>
  Pay
</button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {showPaymentModal && (

  <RecordPaymentModal
    selectedBill={selectedBill}
    closeModal={() => setShowPaymentModal(false)}
  />

)}

    </div>

  );

};

export default PaymentTracking;