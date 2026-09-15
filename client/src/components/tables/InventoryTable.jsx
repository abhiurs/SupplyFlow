import { useState } from "react";

const InventoryTable = ({ products }) => {

  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState("All");

  const categories = [
    "All",
    ...new Set(
      products.map(
        (item) => item.Category
      )
    ),
  ];

  const filteredProducts = products.filter(
    (item) => {

      const matchesSearch =
        item.Product
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        item.Category === category;

      return (
        matchesSearch &&
        matchesCategory
      );

    }
  );

  return (

    <div
  className="
    bg-white
    rounded-3xl
    border
    border-slate-100
    shadow-sm
    overflow-auto
    max-h-[650px]
    max-w-full
  "
>
      <table className="min-w-[1100px] w-full">
        
        {/* TABLE HEADER */}
        <thead>
          <tr className="bg-slate-100 text-slate-600">
            <th className="text-left py-4 px-6 rounded-l-2xl">
              Product
            </th>

            <th className="text-left py-4 px-6">
              Category
            </th>

            <th className="text-left py-4 px-6">
              Stock
            </th>

            <th className="text-left py-4 px-6">
              Price
            </th>

            <th className="text-left py-4 px-6">
              Warehouse
            </th>

            <th className="text-left py-4 px-6 rounded-r-2xl">
              Status
            </th>
          </tr>
        </thead>

        {/* TABLE BODY */}
        <tbody>
          {products.map((product, index) => (
            <tr
              key={index}
              className="border-b border-slate-100 hover:bg-slate-50 transition"
            >
              {/* Product Name */}
              <td className="py-5 px-6 font-medium text-slate-800">
                {product["Product Name"]}
              </td>

              {/* Category */}
              <td className="py-5 px-6 text-slate-600">
                {product["Category"]}
              </td>

              {/* Stock */}
              <td className="py-5 px-6 font-semibold">
                {product["Stock"]}
              </td>

              {/* Price */}
              <td className="px-8 py-6 min-w-[160px]">
                ₹{Number(product["Price"]).toLocaleString()}
              </td>

              {/* Warehouse */}
              <td className="px-8 py-6 min-w-[160px]">
                {product["Warehouse"]}
              </td>

              {/* Status */}
              <td className="px-8 py-6 min-w-[160px]">
                <span
                   className={`px-3 py-1 rounded-full text-xs font-semibold ${
            Number(product["Stock"]) === 0
              ? "bg-red-100 text-red-600"
              : Number(product["Stock"]) <=
                Number(product["Reorder Level"])
              ? "bg-orange-100 text-orange-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {Number(product["Stock"]) === 0
            ? "Out of Stock"
            : Number(product["Stock"]) <=
              Number(product["Reorder Level"])
            ? "Low Stock"
            : "In Stock"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
  );
};

export default InventoryTable;