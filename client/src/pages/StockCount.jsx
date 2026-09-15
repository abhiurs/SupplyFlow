import InventoryTabs from "../components/InventoryTabs";
import { useState, useEffect } from "react";
import axios from "axios";

const StockCount = () => {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/products");

    const formatted = res.data.map((item) => ({
      id: item._id,
      name: item.name,
      sku: item.sku,
      category: item.category,
      systemQty: item.quantity,
      physicalQty: item.quantity,
    }));

    setProducts(formatted);
  } catch (err) {
    console.error(err);
  }
};

useEffect(() => {
  fetchProducts();
}, []);

  const handleQtyChange = (id, value) => {

    setProducts((prev)=>
prev.map((item)=>
        item.id === id
          ? {
              ...item,
              physicalQty: Number(value),
            }
          : item
      )
    );

  };

  return (

    <div className="p-8 bg-slate-100 min-h-screen">

      <InventoryTabs hideButton={true} />

      {/* HEADER */}

      <div className="bg-white rounded-3xl p-8 shadow-sm mb-8">

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold">
              Stock Count #SC-0015
            </h1>

            <p className="text-slate-500 mt-2">
              Inventory stock verification
            </p>

          </div>

          <div className="flex gap-4">

            <button className="border border-slate-300 px-5 py-3 rounded-xl">
              Cancel Count
            </button>

            <button className="bg-blue-600 text-white px-5 py-3 rounded-xl">
              Start New Count
            </button>

          </div>

        </div>

        {/* TOP CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <div className="bg-slate-50 p-6 rounded-2xl">

            <p className="text-slate-500">
              Total Products
            </p>

            <h2 className="text-4xl font-bold mt-2">
              {products.length}
            </h2>

          </div>

          <div className="bg-slate-50 p-6 rounded-2xl">

            <p className="text-green-600">
              Counted
            </p>

            <h2 className="text-4xl font-bold mt-2">
              {
products.filter(
(p)=>p.physicalQty!==undefined
).length
}
            </h2>

          </div>

          <div className="bg-slate-50 p-6 rounded-2xl">

            <p className="text-yellow-600">
              Pending
            </p>

            <h2 className="text-4xl font-bold mt-2">
              0
            </h2>

          </div>

          <div className="bg-slate-50 p-6 rounded-2xl">

            <p className="text-red-500">
              Variances Found
            </p>

            <h2 className="text-4xl font-bold mt-2">
              {
products.filter(
(p)=>p.systemQty!==p.physicalQty
).length
}
            </h2>

          </div>

        </div>

      </div>

      {/* TABLE SECTION */}

      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">

        {/* SEARCH */}

        <div className="p-6 border-b flex justify-between gap-4">

          <input
            type="text"
            placeholder="Search products..."
            className="border border-slate-300 rounded-xl px-4 py-3 w-full max-w-md outline-none"
          />

          <button className="border border-slate-300 px-5 py-3 rounded-xl">
            Imported from Database
          </button>

        </div>

        {/* TABLE */}

        <div className="max-h-[520px] overflow-y-auto">
          
          <table className="w-full">

          <thead className="bg-slate-50 border-b sticky top-0 z-10">

            <tr>

              <th className="text-left p-5">#</th>
              <th className="text-left p-5">Product</th>
              <th className="text-left p-5">SKU</th>
              <th className="text-left p-5">Category</th>
              <th className="text-left p-5">
                System Quantity
              </th>
              <th className="text-left p-5">
                Physical Quantity
              </th>
              <th className="text-left p-5">
                Difference
              </th>
              <th className="text-left p-5">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {products.map((product, index) => {

              const difference =
                product.physicalQty -
                product.systemQty;

              return (

                <tr
                  key={product.id || index}
                  className="border-t hover:bg-slate-50"
                >

                  <td className="p-5">
                    {index + 1}
                  </td>

                  <td className="p-5 font-medium">
                    {product.name}
                  </td>

                  <td className="p-5">
                    {product.sku}
                  </td>

                  <td className="p-5">
                    {product.category}
                  </td>

                  <td className="p-5">
                    {product.systemQty}
                  </td>

                  <td className="p-5">

                    <input
                      type="number"
                      value={product.physicalQty}
                      onChange={(e) =>
                        handleQtyChange(
                          product.id,
                          e.target.value
                        )
                      }
                      className="border border-slate-300 rounded-xl px-4 py-2 w-28 outline-none"
                    />

                  </td>

                  <td
                    className={`p-5 font-semibold ${
                      difference < 0
                        ? "text-red-500"
                        : difference > 0
                        ? "text-green-500"
                        : "text-slate-700"
                    }`}
                  >

                    {difference > 0 && "+"}
                    {difference}

                  </td>

                  <td className="p-5">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        difference === 0
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >

                      {difference === 0
                        ? "Matched"
                        : "Variance"}

                    </span>

                  </td>

                </tr>

              );

            })}

          </tbody>

        </table>

        </div>

        {/* FOOTER */}

        <div className="p-6 border-t flex justify-end gap-4">

          <button className="border border-slate-300 px-5 py-3 rounded-xl">
            Save Draft
          </button>

          <button className="bg-green-600 text-white px-5 py-3 rounded-xl">
            Submit Count
          </button>

        </div>

      </div>

    </div>

  );

};

export default StockCount;