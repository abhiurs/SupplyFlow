import InventoryTabs from "../components/InventoryTabs";
import { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import CreatePOModal from "../components/CreatePOModal";

const LowStock = () => {

  const [showPOModal, setShowPOModal] =
  useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [searchTerm, setSearchTerm] = useState("");
const [selectedSupplier, setSelectedSupplier] = useState("All Suppliers");

const fetchProducts = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/products");
    setProducts(res.data);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  fetchProducts();
}, []);

const lowStockProducts = products.filter(
    product => product.quantity <= product.reorderLevel
);

const suppliers = [
  "All Suppliers",
  ...new Set(products.map(product => product.supplier))
];

const criticalItems =
lowStockProducts.filter(
product => product.quantity <= product.reorderLevel * 0.5
).length;

const warningItems =
lowStockProducts.filter(
product =>
product.quantity > product.reorderLevel * 0.5 &&
product.quantity <= product.reorderLevel
).length;

const exportToExcel = () => {

    const exportData = lowStockProducts.map(product => ({

        Product: product.name,

        SKU: product.sku,

        Category: product.category,

        Supplier: product.supplier,

        Warehouse: product.warehouse,

        Quantity: product.quantity,

        Reorder_Level: product.reorderLevel,

        Purchase_Price: product.purchasePrice,

        Selling_Price: product.sellingPrice,

        Status: product.status

    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
        workbook,
        worksheet,
        "Low Stock"
    );

    XLSX.writeFile(
        workbook,
        "Low_Stock_Report.xlsx"
    );

};

  return (

    <div className="p-8 bg-slate-100 min-h-screen">

      {/* INVENTORY TABS */}

      <InventoryTabs hideButton={true} />

      {/* TOP CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <p className="text-red-500 font-semibold">
            Critical
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {criticalItems}
          </h2>

          <p className="text-slate-500 mt-2">
            Items
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <p className="text-orange-500 font-semibold">
            Warning
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {warningItems}
          </h2>

          <p className="text-slate-500 mt-2">
            Items
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <p className="text-blue-600 font-semibold">
            Total Low Stock
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {lowStockProducts.length}
          </h2>

          <p className="text-slate-500 mt-2">
            Items
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <p className="text-green-600 font-semibold">
            Total Value
          </p>

          <h2 className="text-4xl font-bold mt-3">
            ₹{
lowStockProducts.reduce(
(sum,item)=>sum+item.quantity*item.purchasePrice,
0
).toLocaleString()
}
          </h2>

          <p className="text-slate-500 mt-2">
            Estimated
          </p>
        </div>

      </div>

      {/* SEARCH + FILTER */}

      <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">

        <div className="flex flex-col md:flex-row gap-4">

          <input
type="text"
placeholder="🔍 Search products..."
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
className="flex-1 border border-slate-200 rounded-xl p-3 outline-none"
/>

          <select
  value={selectedSupplier}
  onChange={(e) => setSelectedSupplier(e.target.value)}
  className="border border-slate-200 rounded-xl p-3"
>
  {suppliers.map((supplier) => (
    <option
      key={supplier}
      value={supplier}
    >
      {supplier}
    </option>
  ))}
</select>

          <div className="flex gap-3">

<button
className="border border-slate-200 rounded-xl px-6"
>
Filters
</button>

<button
onClick={exportToExcel}
className="bg-green-600 text-white px-6 rounded-xl hover:bg-green-700"
>
Export Excel
</button>

</div>

        </div>

      </div>

      {/* TABLE */}

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

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
                Supplier
              </th>

              <th className="text-left p-5">
                Current Stock
              </th>

              <th className="text-left p-5">
                Reorder Level
              </th>

              <th className="text-left p-5">
                Days Left
              </th>

              <th className="text-left p-5">
                Estimated Value
              </th>

              <th className="text-left p-5">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {lowStockProducts.filter(product => {

    const search = searchTerm.toLowerCase();

    return (
        product.name?.toLowerCase().includes(search) ||
        product.sku?.toLowerCase().includes(search) ||
        product.category?.toLowerCase().includes(search) ||
        product.supplier?.toLowerCase().includes(search) ||
        product.warehouse?.toLowerCase().includes(search)
    );

})
.filter(product =>
    selectedSupplier === "All Suppliers"
        ? true
        : product.supplier === selectedSupplier
)
.map(product => (

              <tr
                key={product._id}
                className="border-t hover:bg-slate-50 transition"
              >

                <td className="p-5 font-medium">
                  {product.name}
                </td>

                <td className="p-5">
                  {product.sku}
                </td>

                <td className="p-5">
                  {product.supplier}
                </td>

                <td className="p-5 text-red-500 font-semibold">
                  {product.quantity} pcs
                </td>

                <td className="p-5">
                  {product.reorderLevel} pcs
                </td>

                <td className="p-5 text-orange-500 font-semibold">
                  {Math.ceil(product.quantity / 15)} days
                </td>

                <td className="p-5">
                  ₹{(product.quantity * product.purchasePrice).toLocaleString()}
                </td>

                <td className="p-5">

                  <button
   onClick={() =>
        setShowPOModal(true)
      }
  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition"
>

  + Create PO

</button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* CREATE PO MODAL */}

{
  showPOModal && (

    <CreatePOModal
    isOpen={showPOModal}
      onClose={() =>
        setShowPOModal(false)
      }
    />

  )
}

    </div>

  );

};

export default LowStock;