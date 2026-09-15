import { useNavigate } from "react-router-dom";

const ExpiryAlerts = () => {

    const navigate = useNavigate();

  const expiryProducts = [

    {
      product: "Milk (1L)",
      batch: "MLK2406201",
      warehouse: "Main Warehouse",
      expiry: "23 Jun 2025",
      daysLeft: 3,
      quantity: 20,
      priority: "Critical",
    },

    {
      product: "Bread",
      batch: "BRD2406202",
      warehouse: "Main Warehouse",
      expiry: "25 Jun 2025",
      daysLeft: 5,
      quantity: 50,
      priority: "Critical",
    },

    {
      product: "Yogurt",
      batch: "YGT2406204",
      warehouse: "Main Warehouse",
      expiry: "28 Jun 2025",
      daysLeft: 8,
      quantity: 30,
      priority: "Warning",
    },

    {
      product: "Cheese",
      batch: "CHS2406205",
      warehouse: "Main Warehouse",
      expiry: "02 Jul 2025",
      daysLeft: 12,
      quantity: 15,
      priority: "Warning",
    },

    {
      product: "Juice",
      batch: "JCE2406203",
      warehouse: "Main Warehouse",
      expiry: "05 Jul 2025",
      daysLeft: 15,
      quantity: 25,
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
            Expiry Alerts
          </h1>

          <p className="text-slate-500 mt-2">
            Batches that are expiring soon
          </p>

        </div>

        <div className="flex gap-3">

          <input
            type="text"
            placeholder="Search batches..."
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
            All Warehouses
          </option>

        </select>

        <select className="border border-slate-200 rounded-xl px-4 py-3">

          <option>
            All Categories
          </option>

        </select>

        <select className="border border-slate-200 rounded-xl px-4 py-3">

          <option>
            Expiring Within
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
                Product
              </th>

              <th className="text-left p-5">
                Batch No
              </th>

              <th className="text-left p-5">
                Warehouse
              </th>

              <th className="text-left p-5">
                Expiry Date
              </th>

              <th className="text-left p-5">
                Days Left
              </th>

              <th className="text-left p-5">
                Quantity
              </th>

              <th className="text-left p-5">
                Priority
              </th>

              <th className="text-left p-5">
                Status
              </th>

              <th className="text-left p-5">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {expiryProducts.map((product, index) => (

              <tr
                key={index}
                className="border-t hover:bg-slate-50 transition"
              >

                <td className="p-5 font-medium">
                  {product.product}
                </td>

                <td className="p-5">
                  {product.batch}
                </td>

                <td className="p-5">
                  {product.warehouse}
                </td>

                <td className="p-5">
                  {product.expiry}
                </td>

                <td className="p-5 text-red-500 font-semibold">
                  {product.daysLeft} Days
                </td>

                <td className="p-5">
                  {product.quantity}
                </td>

                <td className="p-5">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      product.priority === "Critical"
                        ? "bg-red-100 text-red-600"
                        : product.priority === "Warning"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >

                    {product.priority}

                  </span>

                </td>

                <td className="p-5">

                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">

                    Active

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

          Take action on expiring products to reduce losses.

        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition">

          View Recommendations

        </button>

      </div>

    </div>

  );

};

export default ExpiryAlerts;