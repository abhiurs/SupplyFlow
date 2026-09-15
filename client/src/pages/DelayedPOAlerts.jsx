import { useNavigate } from "react-router-dom";

const DelayedPOAlerts = () => {

    const navigate = useNavigate();

  const delayedPOs = [

    {
      po: "PO-2025-0012",
      supplier: "Nestle India Ltd.",
      orderDate: "10 Jun 2025",
      expectedDate: "18 Jun 2025",
      delayedBy: "2 Days",
      status: "In Transit",
      priority: "Warning",
    },

    {
      po: "PO-2025-0010",
      supplier: "HUL Ltd.",
      orderDate: "05 Jun 2025",
      expectedDate: "15 Jun 2025",
      delayedBy: "5 Days",
      status: "In Transit",
      priority: "Warning",
    },

    {
      po: "PO-2025-0009",
      supplier: "ITC Limited",
      orderDate: "07 Jun 2025",
      expectedDate: "20 Jun 2025",
      delayedBy: "3 Days",
      status: "Pending",
      priority: "Warning",
    },

    {
      po: "PO-2025-0007",
      supplier: "ABC Foods",
      orderDate: "01 Jun 2025",
      expectedDate: "10 Jun 2025",
      delayedBy: "10 Days",
      status: "Pending",
      priority: "Critical",
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
            Delayed PO Alerts
          </h1>

          <p className="text-slate-500 mt-2">
            Purchase orders delayed from suppliers
          </p>

        </div>

        <div className="flex gap-3">

          <input
            type="text"
            placeholder="Search POs..."
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
            Delayed By
          </option>

        </select>

        <button className="border border-slate-200 px-5 rounded-xl">

          Filter

        </button>

      </div>

      {/* TABLE */}

      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-50 border-b">

            <tr>

              <th className="text-left p-5">
                PO No.
              </th>

              <th className="text-left p-5">
                Supplier
              </th>

              <th className="text-left p-5">
                Order Date
              </th>

              <th className="text-left p-5">
                Expected Date
              </th>

              <th className="text-left p-5">
                Delayed By
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

            {delayedPOs.map((po, index) => (

              <tr
                key={index}
                className="border-t hover:bg-slate-50 transition"
              >

                <td className="p-5 font-medium">
                  {po.po}
                </td>

                <td className="p-5">
                  {po.supplier}
                </td>

                <td className="p-5">
                  {po.orderDate}
                </td>

                <td className="p-5">
                  {po.expectedDate}
                </td>

                <td className="p-5 text-red-500 font-semibold">
                  {po.delayedBy}
                </td>

                <td className="p-5">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      po.status === "Pending"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >

                    {po.status}

                  </span>

                </td>

                <td className="p-5">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      po.priority === "Critical"
                        ? "bg-red-100 text-red-600"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >

                    {po.priority}

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

      {/* FOOTER */}

      <div className="bg-white rounded-3xl p-5 shadow-sm flex justify-between items-center">

        <p className="text-slate-500">

          Recommended Action: Follow up with suppliers to avoid stock shortages.

        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition">

          Follow Up Now

        </button>

      </div>

    </div>

  );

};

export default DelayedPOAlerts;