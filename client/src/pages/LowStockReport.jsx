const LowStockReport = () => {

  const lowStockItems = [

    {
      product: "Surf Excel 1kg",
      sku: "SURF-1KG",
      warehouse: "Chennai Warehouse",
      stock: 12,
      reorder: 50,
      supplier: "Hindustan Unilever",
      priority: "High",
      status: "Critical",
    },

    {
      product: "KitKat 4 Finger",
      sku: "KITKAT-4F",
      warehouse: "Main Warehouse",
      stock: 0,
      reorder: 80,
      supplier: "Nestlé India Ltd.",
      priority: "Urgent",
      status: "Out of Stock",
    },

    {
      product: "Sunflower Oil 1L",
      sku: "OIL-1L",
      warehouse: "Mumbai Warehouse",
      stock: 25,
      reorder: 100,
      supplier: "Fortune Foods",
      priority: "Medium",
      status: "Low Stock",
    },

    {
      product: "Aashirvaad Atta 5kg",
      sku: "ATTA-5KG",
      warehouse: "Bangalore Warehouse",
      stock: 18,
      reorder: 75,
      supplier: "ITC Limited",
      priority: "High",
      status: "Critical",
    },

  ];

  return (

    <div className="space-y-8">

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Low Stock Report
          </h1>

          <p className="text-slate-500 mt-2">
            Monitor inventory shortages and reorder requirements
          </p>

        </div>

        <div className="flex gap-3">

          <button className="border px-5 py-3 rounded-xl bg-white">
            Export PDF
          </button>

          <button className="bg-blue-600 text-white px-5 py-3 rounded-xl">
            Export Excel
          </button>

        </div>

      </div>

      {/* KPI CARDS */}

      <div className="grid grid-cols-4 gap-5">

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <p className="text-slate-500">
            Low Stock Items
          </p>

          <h1 className="text-4xl font-bold mt-3 text-orange-500">
            28
          </h1>

        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <p className="text-slate-500">
            Critical Items
          </p>

          <h1 className="text-4xl font-bold mt-3 text-red-500">
            8
          </h1>

        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <p className="text-slate-500">
            Out of Stock
          </p>

          <h1 className="text-4xl font-bold mt-3">
            3
          </h1>

        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <p className="text-slate-500">
            Reorder Value
          </p>

          <h1 className="text-4xl font-bold mt-3">
            ₹2,40,000
          </h1>

        </div>

      </div>

      {/* FILTERS */}

      <div className="bg-white rounded-2xl p-5 shadow-sm">

        <div className="grid grid-cols-5 gap-4">

          <input
            type="text"
            placeholder="Search Product"
            className="border rounded-xl px-4 py-3 outline-none"
          />

          <select className="border rounded-xl px-4 py-3">

            <option>
              Warehouse: All
            </option>

          </select>

          <select className="border rounded-xl px-4 py-3">

            <option>
              Priority: All
            </option>

          </select>

          <button className="bg-blue-600 text-white rounded-xl">
            Apply Filters
          </button>

          <button className="border rounded-xl">
            Clear
          </button>

        </div>

      </div>

      {/* ALERT SECTION */}

      <div className="grid grid-cols-2 gap-6">

        {/* CRITICAL ALERTS */}

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Critical Alerts
          </h2>

          <div className="space-y-5">

            <div className="border border-red-200 bg-red-50 rounded-xl p-4">

              <div className="flex justify-between">

                <div>

                  <h3 className="font-semibold text-red-700">
                    KitKat 4 Finger
                  </h3>

                  <p className="text-sm text-slate-600 mt-1">
                    Main Warehouse
                  </p>

                </div>

                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                  Out of Stock
                </span>

              </div>

            </div>

            <div className="border border-orange-200 bg-orange-50 rounded-xl p-4">

              <div className="flex justify-between">

                <div>

                  <h3 className="font-semibold text-orange-700">
                    Surf Excel 1kg
                  </h3>

                  <p className="text-sm text-slate-600 mt-1">
                    Chennai Warehouse
                  </p>

                </div>

                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                  Critical
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* REORDER ANALYSIS */}

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Reorder Analysis
          </h2>

          <div className="space-y-6">

            <div>

              <div className="flex justify-between mb-2">

                <p>Urgent Reorders</p>

                <p className="font-bold text-red-500">
                  8 Items
                </p>

              </div>

              <div className="w-full bg-slate-200 h-4 rounded-full">
                <div className="bg-red-500 h-4 rounded-full w-[85%]"></div>
              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <p>Medium Priority</p>

                <p className="font-bold text-orange-500">
                  12 Items
                </p>

              </div>

              <div className="w-full bg-slate-200 h-4 rounded-full">
                <div className="bg-orange-500 h-4 rounded-full w-[65%]"></div>
              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <p>Supplier Availability</p>

                <p className="font-bold text-green-600">
                  94%
                </p>

              </div>

              <div className="w-full bg-slate-200 h-4 rounded-full">
                <div className="bg-green-500 h-4 rounded-full w-[94%]"></div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* TABLE */}

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-4 text-left">
                Product
              </th>

              <th className="p-4 text-left">
                SKU
              </th>

              <th className="p-4 text-left">
                Warehouse
              </th>

              <th className="p-4 text-left">
                Current Stock
              </th>

              <th className="p-4 text-left">
                Reorder Level
              </th>

              <th className="p-4 text-left">
                Supplier
              </th>

              <th className="p-4 text-left">
                Priority
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

            {lowStockItems.map((item, index) => (

              <tr
                key={index}
                className="border-b hover:bg-slate-50"
              >

                <td className="p-4 font-medium">
                  {item.product}
                </td>

                <td className="p-4">
                  {item.sku}
                </td>

                <td className="p-4">
                  {item.warehouse}
                </td>

                <td className="p-4">
                  {item.stock}
                </td>

                <td className="p-4">
                  {item.reorder}
                </td>

                <td className="p-4">
                  {item.supplier}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium

                    ${
                      item.priority === "Urgent"
                        ? "bg-red-100 text-red-700"

                        : item.priority === "High"
                        ? "bg-orange-100 text-orange-700"

                        : "bg-yellow-100 text-yellow-700"
                    }
                    `}
                  >
                    {item.priority}
                  </span>

                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium

                    ${
                      item.status === "Out of Stock"
                        ? "bg-red-100 text-red-700"

                        : item.status === "Critical"
                        ? "bg-orange-100 text-orange-700"

                        : "bg-yellow-100 text-yellow-700"
                    }
                    `}
                  >
                    {item.status}
                  </span>

                </td>

                <td className="p-4">

                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Reorder
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

        {/* PAGINATION */}

        <div className="flex justify-between items-center p-5">

          <p className="text-slate-500">
            Showing 1 to 4 of 28 low stock items
          </p>

          <div className="flex gap-2">

            <button className="w-10 h-10 rounded-lg bg-blue-600 text-white">
              1
            </button>

            <button className="w-10 h-10 rounded-lg border">
              2
            </button>

            <button className="w-10 h-10 rounded-lg border">
              3
            </button>

          </div>

        </div>

      </div>

    </div>

  );

};

export default LowStockReport;