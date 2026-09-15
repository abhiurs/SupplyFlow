import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

import AddProductModal from "../components/AddProductModal";
import EditProductModal from "../components/EditProductModal";
import InventoryTabs from "../components/InventoryTabs";

const InventoryProducts = () => {

  const categoryImages = {
  "Instant Food":
    "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",

  Electronics:
    "https://cdn-icons-png.flaticon.com/512/3659/3659898.png",

  Hardware:
    "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",

  Office:
    "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",

  Grocery:
    "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
};

  const location = useLocation();

  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [warehouseFilter, setWarehouseFilter] = useState("");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  const fetchProducts = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/products"
      );

      setProducts(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchProducts();

  }, []);

  const handleDelete = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/products/${id}`
      );

      fetchProducts();

    } catch (error) {

      console.log(error);

    }

  };

  const filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.name
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesCategory =
      categoryFilter === "" ||
      product.category === categoryFilter;

    const matchesStatus =
      statusFilter === "" ||
      product.status === statusFilter;

    const matchesWarehouse =
  warehouseFilter === "" ||
  product.warehouse === warehouseFilter;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesStatus &&
      matchesWarehouse
    );

  });
  

  return (

    <div className="p-8 bg-slate-100 min-h-screen">

        <InventoryTabs
  openAddModal={() => setShowModal(true)}
/>

      {/* ANALYTICS */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

        <div className="bg-white p-6 rounded-2xl shadow-sm">

          <p className="text-slate-500">
            Total Products
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {products.length}
          </h2>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">

          <p className="text-slate-500">
            Total Stock
          </p>

          <h2 className="text-3xl font-bold mt-2">

            {products.reduce(
(acc,item)=>acc+Number(item.quantity||0),0
)}

          </h2>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">

          <p className="text-slate-500">
            Inventory Value
          </p>

          <h2 className="text-3xl font-bold mt-2">

            ₹
            {products.reduce(
              (acc, item) =>
                acc +
                Number(item.quantity||0) *
Number(item.purchasePrice||0),
              0
            )}

          </h2>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">

          <p className="text-slate-500">
            Low Stock
          </p>

          <h2 className="text-3xl font-bold text-red-500 mt-2">

            {
              products.filter(
                (item) => Number(item.quantity)<=Number(item.reorderLevel)
              ).length
            }

          </h2>

        </div>

      </div>

      {/* FILTERS */}

      <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          <input
            type="text"
            placeholder="🔍 Search products..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            className="border border-slate-200 p-3 rounded-xl outline-none"
          />

          <select
            value={categoryFilter}
            onChange={(e) =>
              setCategoryFilter(e.target.value)
            }
            className="border border-slate-200 p-3 rounded-xl"
          >

            <option value="">
              All Categories
            </option>

            {[
  ...new Set(
    products.map((item) => item.category)
  ),
].map((category) => (
  <option
    key={category}
    value={category}
  >
    {category}
  </option>
))}

          </select>

          <select
  value={warehouseFilter}
  onChange={(e) => setWarehouseFilter(e.target.value)}
  className="border border-slate-200 p-3 rounded-xl"
>
  <option value="">All Warehouses</option>

  {[...new Set(products.map((p) => p.warehouse))].map((warehouse) => (
    <option key={warehouse} value={warehouse}>
      {warehouse}
    </option>
  ))}
</select>

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
            className="border border-slate-200 p-3 rounded-xl"
          >

            <option value="">
              All Status
            </option>

            <option value="In Stock">
              In Stock
            </option>

            <option value="Low Stock">
              Low Stock
            </option>

          </select>

        </div>

      </div>

      {/* TABLE + DETAILS */}

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">

        {/* TABLE */}

        <div className="xl:col-span-3 bg-white rounded-2xl shadow-sm overflow-hidden">

          <div className="max-h-[620px] overflow-y-auto">

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
                  Category
                </th>

                <th className="text-left p-5">
                  Stock
                </th>

                <th className="text-left p-5">
                  Reorder
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

              {filteredProducts.map((product) => (

                <tr
                  key={product._id}
                  className="border-t hover:bg-slate-50 transition cursor-pointer"
                  onClick={() =>
                    setSelectedProduct(product)
                  }
                >

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
                    {product.quantity}
                  </td>

                  <td className="p-5">
                    {product.reorderLevel}
                  </td>

                  <td className="p-5">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        product.status === "Low Stock"
  ? "bg-red-100 text-red-600"
  : "bg-green-100 text-green-600"
                      }`}
                    >

                      {product.status}

                    </span>

                  </td>

                  <td className="p-5 relative">

                    <button
                      onClick={(e) => {
                        e.stopPropagation();

                        setOpenMenu(
                          openMenu === product._id
                            ? null
                            : product._id
                        );
                      }}
                      className="text-2xl"
                    >
                      ⋮
                    </button>

                    {openMenu === product._id && (

                      <div className="absolute right-10 mt-2 bg-white border rounded-xl shadow-lg z-50 w-32">

                        <button
                          onClick={() => {
                            setSelectedProduct(product);
                            setEditModal(true);
                          }}
                          className="block w-full text-left px-4 py-3 hover:bg-slate-100"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(product._id)
                          }
                          className="block w-full text-left px-4 py-3 text-red-500 hover:bg-red-50"
                        >
                          Delete
                        </button>

                      </div>

                    )}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          </div>

        </div>

        {/* PRODUCT DETAILS */}

        <div className="bg-white rounded-2xl shadow-sm p-6 h-fit sticky top-6">

          {selectedProduct ? (

            <>

              <div className="flex items-center gap-4 mb-8">

                <img
  src={
    categoryImages[selectedProduct.category] ||
    "https://cdn-icons-png.flaticon.com/512/679/679720.png"
  }
  alt={selectedProduct.name}
  className="w-20 h-20 object-contain rounded-xl bg-slate-100 p-2"
/>

                <div>

                  <h2 className="text-2xl font-bold">
                    {selectedProduct.name}
                  </h2>

                  <p className="text-slate-500">
                    {selectedProduct.category}
                  </p>

                </div>

              </div>

              <div className="space-y-5">

                <div className="space-y-4">

  <div className="flex justify-between">
    <span>SKU</span>
    <span className="font-semibold">
      {selectedProduct.sku}
    </span>
  </div>

  <div className="flex justify-between">
    <span>Supplier</span>
    <span className="font-semibold">
      {selectedProduct.supplier}
    </span>
  </div>

  <div className="flex justify-between">
    <span>Warehouse</span>
    <span className="font-semibold">
      {selectedProduct.warehouse}
    </span>
  </div>

  <div className="flex justify-between">
    <span>Quantity</span>
    <span className="font-semibold">
      {selectedProduct.quantity}
    </span>
  </div>

  <div className="flex justify-between">
    <span>Reorder Level</span>
    <span className="font-semibold">
      {selectedProduct.reorderLevel}
    </span>
  </div>

  <div className="flex justify-between">
    <span>Purchase Price</span>
    <span className="font-semibold">
      ₹{selectedProduct.purchasePrice}
    </span>
  </div>

  <div className="flex justify-between">
    <span>Selling Price</span>
    <span className="font-semibold">
      ₹{selectedProduct.sellingPrice}
    </span>
  </div>

  <div className="flex justify-between">
    <span>Status</span>

    <span
      className={`px-3 py-1 rounded-full text-sm ${
        selectedProduct.status === "Low Stock"
          ? "bg-red-100 text-red-600"
          : "bg-green-100 text-green-600"
      }`}
    >
      {selectedProduct.status}
    </span>
  </div>

</div>

              </div>

            </>

          ) : (

            <div className="text-center text-slate-400 py-24">

              Select a product to view details

            </div>

          )}

        </div>

      </div>

      {/* MODALS */}

      {showModal && (

        <AddProductModal
          closeModal={() => setShowModal(false)}
          refreshProducts={fetchProducts}
        />

      )}

      {editModal && (

        <EditProductModal
          product={selectedProduct}
          closeModal={() => setEditModal(false)}
          refreshProducts={fetchProducts}
        />

      )}

    </div>

  );

};

export default InventoryProducts;