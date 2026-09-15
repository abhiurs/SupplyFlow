const InventoryReport = () => {

  const inventoryProducts = [

    {
      name: "Maggi Noodles 70g",
      sku: "MAGGI-70",
      category: "Food Items",
      warehouse: "Main Warehouse",
      currentStock: 1250,
      reserved: 200,
      available: 1050,
      value: "₹12,500",
      status: "Good",
    },

    {
      name: "Nescafe Classic 100g",
      sku: "NESCAFE-100",
      category: "Beverages",
      warehouse: "Main Warehouse",
      currentStock: 800,
      reserved: 100,
      available: 700,
      value: "₹8,000",
      status: "Good",
    },

    {
      name: "Sunflower Oil 1L",
      sku: "OIL-1L",
      category: "Household",
      warehouse: "Bangalore Warehouse",
      currentStock: 600,
      reserved: 50,
      available: 550,
      value: "₹7,200",
      status: "Good",
    },

    {
      name: "Surf Excel 1kg",
      sku: "SURF-1KG",
      category: "Household",
      warehouse: "Chennai Warehouse",
      currentStock: 150,
      reserved: 20,
      available: 130,
      value: "₹1,300",
      status: "Low Stock",
    },

    {
      name: "KitKat 4 Finger",
      sku: "KITKAT-4F",
      category: "Snacks",
      warehouse: "Main Warehouse",
      currentStock: 0,
      reserved: 0,
      available: 0,
      value: "₹0",
      status: "Out of Stock",
    },

  ];

  return (

    <div className="space-y-8">

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Inventory Report
          </h1>

          <p className="text-slate-500 mt-2">
            Monitor inventory stock and warehouse availability
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
            Inventory Value
          </p>

          <h1 className="text-4xl font-bold mt-3">
            ₹52,45,000
          </h1>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <p className="text-slate-500">
            Total Products
          </p>

          <h1 className="text-4xl font-bold mt-3">
            245
          </h1>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <p className="text-slate-500">
            Low Stock Items
          </p>

          <h1 className="text-4xl font-bold mt-3 text-orange-500">
            25
          </h1>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <p className="text-slate-500">
            Out of Stock
          </p>

          <h1 className="text-4xl font-bold mt-3 text-red-500">
            3
          </h1>
        </div>

      </div>

      {/* FILTERS */}

      <div className="bg-white rounded-2xl p-5 shadow-sm">

        <div className="grid grid-cols-5 gap-4">

          <input
            type="text"
            placeholder="Search product..."
            className="border rounded-xl px-4 py-3 outline-none"
          />

          <select className="border rounded-xl px-4 py-3">

            <option>
              Category: All
            </option>

          </select>

          <select className="border rounded-xl px-4 py-3">

            <option>
              Warehouse: All
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
                Category
              </th>

              <th className="p-4 text-left">
                Warehouse
              </th>

              <th className="p-4 text-left">
                Current Stock
              </th>

              <th className="p-4 text-left">
                Reserved
              </th>

              <th className="p-4 text-left">
                Available
              </th>

              <th className="p-4 text-left">
                Value
              </th>

              <th className="p-4 text-left">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {inventoryProducts.map((product, index) => (

              <tr
                key={index}
                className="border-b hover:bg-slate-50"
              >

                <td className="p-4 font-medium">
                  {product.name}
                </td>

                <td className="p-4">
                  {product.sku}
                </td>

                <td className="p-4">
                  {product.category}
                </td>

                <td className="p-4">
                  {product.warehouse}
                </td>

                <td className="p-4">
                  {product.currentStock}
                </td>

                <td className="p-4">
                  {product.reserved}
                </td>

                <td className="p-4">
                  {product.available}
                </td>

                <td className="p-4">
                  {product.value}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium

                    ${
                      product.status === "Good"
                        ? "bg-green-100 text-green-700"

                        : product.status === "Low Stock"
                        ? "bg-orange-100 text-orange-700"

                        : "bg-red-100 text-red-700"
                    }
                    `}
                  >
                    {product.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

        {/* PAGINATION */}

        <div className="flex justify-between items-center p-5">

          <p className="text-slate-500">
            Showing 1 to 5 of 245 products
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

            <button className="w-10 h-10 rounded-lg border">
              4
            </button>

          </div>

        </div>

      </div>

    </div>

  );

};

export default InventoryReport;