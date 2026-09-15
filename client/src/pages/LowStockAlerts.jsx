import { useNavigate } from "react-router-dom";

const LowStockAlerts = () => {

    const navigate = useNavigate();

  const products = [

    {
      name: "Maggi (200g)",
      sku: "MAG-200",
      warehouse: "Main Warehouse",
      stock: 5,
      reorder: 20,
      priority: "Critical",
    },

    {
      name: "Salt (1kg)",
      sku: "SALT-1KG",
      warehouse: "Main Warehouse",
      stock: 12,
      reorder: 30,
      priority: "Warning",
    },

    {
      name: "Sunflower Oil",
      sku: "OIL-1L",
      warehouse: "Main Warehouse",
      stock: 8,
      reorder: 15,
      priority: "Warning",
    },

    {
      name: "Toor Dal",
      sku: "DAL-1KG",
      warehouse: "Main Warehouse",
      stock: 10,
      reorder: 25,
      priority: "Warning",
    },

    {
      name: "Wheat Flour",
      sku: "WF-5KG",
      warehouse: "Main Warehouse",
      stock: 18,
      reorder: 40,
      priority: "Warning",
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
            Low Stock Alerts
          </h1>

          <p className="text-slate-500 mt-2">
            Products running low in inventory
          </p>

        </div>

        <div className="flex gap-3">

          <input
            type="text"
            placeholder="Search products..."
            className="border border-slate-200 rounded-2xl px-5 py-3 outline-none"
          />

          <button className="border border-slate-200 px-5 py-3 rounded-2xl">
            Export
          </button>

        </div>

      </div>

      {/* FILTERS */}

      <div className="bg-white rounded-3xl p-5 shadow-sm flex gap-4">

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
            All Priority Levels
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
                SKU
              </th>

              <th className="text-left p-5">
                Warehouse
              </th>

              <th className="text-left p-5">
                Current Stock
              </th>

              <th className="text-left p-5">
                Reorder Level
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

            {products.map((product, index) => (

              <tr
                key={index}
                className="border-t hover:bg-slate-50 transition"
              >

                <td className="p-5 font-medium">
                  {product.name}
                </td>

                <td className="p-5">
                  {product.sku}
                </td>

                <td className="p-5">
                  {product.warehouse}
                </td>

                <td className="p-5 text-red-500 font-semibold">
                  {product.stock}
                </td>

                <td className="p-5">
                  {product.reorder}
                </td>

                <td className="p-5">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      product.priority === "Critical"
                        ? "bg-red-100 text-red-600"
                        : "bg-orange-100 text-orange-600"
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

          Tip: Generate Purchase Orders directly from low stock items.

        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition">

          Generate PO

        </button>

      </div>

    </div>

  );

};

export default LowStockAlerts;