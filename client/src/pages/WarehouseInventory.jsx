const WarehouseInventory = () => {

  const products = [
    {
      name: "Maggi Noodles",
      sku: "MAGGI-70",
      category: "Food Items",
      stock: 5000,
      reserved: 500,
      available: 4500,
      reorder: 1000,
      status: "Good",
    },

    {
      name: "Nescafé Classic",
      sku: "NESCAFE-100",
      category: "Beverages",
      stock: 2800,
      reserved: 200,
      available: 2600,
      reorder: 500,
      status: "Good",
    },

    {
      name: "Sunflower Oil",
      sku: "OIL-1L",
      category: "Household",
      stock: 3200,
      reserved: 300,
      available: 2900,
      reorder: 800,
      status: "Good",
    },

    {
      name: "KitKat",
      sku: "KITKAT-45",
      category: "Snacks",
      stock: 1500,
      reserved: 150,
      available: 1350,
      reorder: 300,
      status: "Low Stock",
    },
  ];

  return (

    <div className="bg-white rounded-2xl p-6 shadow-sm">

      {/* TOP BAR */}

      <div className="flex justify-between items-center mb-6">

        <div className="flex gap-4">

          <input
            type="text"
            placeholder="Search product"
            className="border rounded-xl px-4 py-3 w-72"
          />

          <select className="border rounded-xl px-4 py-3">
            <option>Category: All</option>
          </select>

          <select className="border rounded-xl px-4 py-3">
            <option>Low Stock: All</option>
          </select>

        </div>

        <button className="border px-5 py-3 rounded-xl hover:bg-slate-100">
          Export
        </button>

      </div>

      {/* TABLE */}

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>
            <th className="p-4 text-left">Product</th>
            <th className="p-4 text-left">SKU</th>
            <th className="p-4 text-left">Category</th>
            <th className="p-4 text-left">Stock</th>
            <th className="p-4 text-left">Reserved</th>
            <th className="p-4 text-left">Available</th>
            <th className="p-4 text-left">Reorder</th>
            <th className="p-4 text-left">Status</th>
          </tr>

        </thead>

        <tbody>

          {products.map((product, index) => (

            <tr
              key={index}
              className="border-b hover:bg-slate-50"
            >

              <td className="p-4 font-semibold">
                {product.name}
              </td>

              <td className="p-4">
                {product.sku}
              </td>

              <td className="p-4">
                {product.category}
              </td>

              <td className="p-4">
                {product.stock}
              </td>

              <td className="p-4">
                {product.reserved}
              </td>

              <td className="p-4">
                {product.available}
              </td>

              <td className="p-4">
                {product.reorder}
              </td>

              <td className="p-4">

                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    product.status === "Good"
                      ? "bg-green-100 text-green-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {product.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

};

export default WarehouseInventory;