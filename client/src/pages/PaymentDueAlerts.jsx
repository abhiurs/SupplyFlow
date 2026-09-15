import { useNavigate } from "react-router-dom";

const PaymentDueAlerts = () => {

    const navigate = useNavigate();

  const payments = [

    {
      bill: "BILL-2025-0045",
      supplier: "ABC Foods",
      billDate: "05 Jun 2025",
      dueDate: "22 Jun 2025",
      amount: "₹45,000",
      overdue: "2 Days",
      status: "Due Soon",
      priority: "Warning",
    },

    {
      bill: "BILL-2025-0044",
      supplier: "Nestle India Ltd.",
      billDate: "07 Jun 2025",
      dueDate: "20 Jun 2025",
      amount: "₹78,500",
      overdue: "Overdue by 1 Day",
      status: "Overdue",
      priority: "Critical",
    },

    {
      bill: "BILL-2025-0043",
      supplier: "ITC Limited",
      billDate: "08 Jun 2025",
      dueDate: "25 Jun 2025",
      amount: "₹32,000",
      overdue: "5 Days",
      status: "Due Soon",
      priority: "Warning",
    },

    {
      bill: "BILL-2025-0042",
      supplier: "HUL Ltd.",
      billDate: "09 Jun 2025",
      dueDate: "30 Jun 2025",
      amount: "₹1,25,000",
      overdue: "10 Days",
      status: "Upcoming",
      priority: "Info",
    },

  ];

  return (

    <div className="space-y-6">

      {/* HEADER */}

      <div className="flex justify-between items-center">

        <div>

            <button
      onClick={() => navigate("/alerts")}
      className="mb-4 text-blue-600 hover:text-blue-700 font-medium"
    >

      ← Back to Alerts

    </button>

          <h1 className="text-4xl font-bold text-slate-800">
            Payment Due Alerts
          </h1>

          <p className="text-slate-500 mt-2">
            Upcoming and overdue supplier payments
          </p>

        </div>

        <div className="flex gap-3">

          <input
            type="text"
            placeholder="Search bills..."
            className="border border-slate-200 rounded-2xl px-5 py-3 outline-none"
          />

          <button className="border border-slate-200 px-5 py-3 rounded-2xl">

            Export

          </button>

        </div>

      </div>

      {/* FILTERS */}

      <div className="bg-white rounded-3xl p-5 shadow-sm flex gap-4 flex-wrap">

        <select className="border border-slate-200 rounded-xl px-4 py-3">

          <option>
            All Suppliers
          </option>

        </select>

        <select className="border border-slate-200 rounded-xl px-4 py-3">

          <option>
            All Status
          </option>

        </select>

        <select className="border border-slate-200 rounded-xl px-4 py-3">

          <option>
            Due Within
          </option>

        </select>

        <button className="border border-slate-200 px-5 rounded-xl">

          Filter

        </button>

      </div>

      {/* MAIN GRID */}

      <div className="grid grid-cols-12 gap-6">

        {/* TABLE */}

        <div className="col-span-9 bg-white rounded-3xl shadow-sm overflow-hidden">

          <table className="w-full">

            <thead className="bg-slate-50 border-b">

              <tr>

                <th className="text-left p-5">
                  Bill No.
                </th>

                <th className="text-left p-5">
                  Supplier
                </th>

                <th className="text-left p-5">
                  Bill Date
                </th>

                <th className="text-left p-5">
                  Due Date
                </th>

                <th className="text-left p-5">
                  Amount
                </th>

                <th className="text-left p-5">
                  Due In / Overdue
                </th>

                <th className="text-left p-5">
                  Status
                </th>

                <th className="text-left p-5">
                  Priority
                </th>

                <th className="text-left p-5">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {payments.map((payment, index) => (

                <tr
                  key={index}
                  className="border-t hover:bg-slate-50 transition"
                >

                  <td className="p-5 font-medium">
                    {payment.bill}
                  </td>

                  <td className="p-5">
                    {payment.supplier}
                  </td>

                  <td className="p-5">
                    {payment.billDate}
                  </td>

                  <td className="p-5">
                    {payment.dueDate}
                  </td>

                  <td className="p-5 font-semibold">
                    {payment.amount}
                  </td>

                  <td className="p-5 text-red-500 font-semibold">
                    {payment.overdue}
                  </td>

                  <td className="p-5">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        payment.status === "Overdue"
                          ? "bg-red-100 text-red-600"
                          : payment.status === "Due Soon"
                          ? "bg-orange-100 text-orange-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >

                      {payment.status}

                    </span>

                  </td>

                  <td className="p-5">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        payment.priority === "Critical"
                          ? "bg-red-100 text-red-600"
                          : payment.priority === "Warning"
                          ? "bg-orange-100 text-orange-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >

                      {payment.priority}

                    </span>

                  </td>

                  <td className="p-5">

                    <button className="text-blue-600 font-medium">

                      View

                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* SUMMARY */}

        <div className="col-span-3 space-y-5">

          <div className="bg-white rounded-3xl p-6 shadow-sm">

            <h2 className="text-xl font-bold mb-5">
              Payment Summary
            </h2>

            <div className="space-y-5">

              <div>

                <p className="text-slate-500">
                  Total Outstanding
                </p>

                <h1 className="text-3xl font-bold mt-2">
                  ₹2,80,500
                </h1>

              </div>

              <div>

                <p className="text-red-500">
                  Overdue Amount
                </p>

                <h1 className="text-2xl font-bold mt-2 text-red-500">
                  ₹78,500
                </h1>

              </div>

              <div>

                <p className="text-orange-500">
                  Due Within 7 Days
                </p>

                <h1 className="text-2xl font-bold mt-2 text-orange-500">
                  ₹45,000
                </h1>

              </div>

              <div>

                <p className="text-blue-500">
                  Due Within 30 Days
                </p>

                <h1 className="text-2xl font-bold mt-2 text-blue-500">
                  ₹2,02,000
                </h1>

              </div>

            </div>

            <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl transition">

              Record Payment

            </button>

          </div>

          {/* TIP */}

          <div className="bg-purple-50 rounded-3xl p-5 border border-purple-100">

            <p className="text-sm text-purple-700">

              Tip: Set up payment reminders in Settings to never miss a due date.

            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default PaymentDueAlerts;