import { useState, useEffect } from "react";
import AddSupplierModal from "../components/AddSupplierModal";
import { useNavigate } from "react-router-dom";


const Suppliers = () => {
  const navigate = useNavigate();

 const [suppliers, setSuppliers] = useState(() => {

  const savedSuppliers = localStorage.getItem("suppliers");

  return savedSuppliers
    ? JSON.parse(savedSuppliers)
    : [

        {
          id: 1,
          name: "Nestlé India Ltd.",
          contact: "Rajesh Kumar",
          phone: "9876543210",
          city: "Mumbai",
          state: "Maharashtra",
          products: 18,
          activePOs: 4,
          outstanding: "₹1,25,000",
          rating: "4.6",
          status: "Active",
          category: "Food & Beverages",
          email: "rajesh@nestle.com",
          leadTime: "5 Days",
        },

        {
          id: 2,
          name: "Tata Consumer Products",
          contact: "Vikram Singh",
          phone: "9123456780",
          city: "Bengaluru",
          state: "Karnataka",
          products: 12,
          activePOs: 3,
          outstanding: "₹85,000",
          rating: "4.3",
          status: "Active",
          category: "Consumer Goods",
          email: "vikram@tata.com",
          leadTime: "7 Days",
        },

      ];

});

useEffect(() => {

  localStorage.setItem(
    "suppliers",
    JSON.stringify(suppliers)
  );

}, [suppliers]);


  const [showAddModal, setShowAddModal] = useState(false);

  const addSupplier = (newSupplier) => {

  setSuppliers((prev) => [

    {
      id: prev.length + 1,
      ...newSupplier,
      products: 0,
      activePOs: 0,
      outstanding: "₹0",
      rating: "0.0",
    },

    ...prev,

  ]);

};


  return (

    <div className="space-y-6">

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold text-slate-800">
            Suppliers
          </h1>

        </div>

        <div className="flex gap-3">

          <button className="border border-slate-300 px-5 py-3 rounded-xl hover:bg-slate-100 transition">
            Export
          </button>

          <button
  onClick={() => setShowAddModal(true)}
  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition"
>
  + Add Supplier
</button>

        </div>

      </div>

      {/* CARDS */}

      <div className="grid grid-cols-4 gap-5">

        <div className="bg-white p-5 rounded-2xl shadow-sm border">

          <p className="text-slate-500 mb-2">
            Total Suppliers
          </p>

          <h2 className="text-3xl font-bold text-blue-600">
            48
          </h2>

        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border">

          <p className="text-slate-500 mb-2">
            Active Suppliers
          </p>

          <h2 className="text-3xl font-bold text-green-600">
            42
          </h2>

        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border">

          <p className="text-slate-500 mb-2">
            Inactive Suppliers
          </p>

          <h2 className="text-3xl font-bold text-orange-500">
            6
          </h2>

        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border">

          <p className="text-slate-500 mb-2">
            Outstanding Bills
          </p>

          <h2 className="text-3xl font-bold text-purple-600">
            ₹3,45,000
          </h2>

        </div>

      </div>

      {/* TABLE SECTION */}

      <div className="bg-white rounded-2xl shadow-sm border p-6">

        {/* FILTERS */}

        <div className="flex gap-4 mb-6">

          <input
            type="text"
            placeholder="Search Supplier"
            className="border border-slate-300 rounded-xl px-4 py-3 w-72 outline-none"
          />

          <select className="border border-slate-300 rounded-xl px-4 py-3 outline-none">

            <option>
              Category
            </option>

          </select>

          <select className="border border-slate-300 rounded-xl px-4 py-3 outline-none">

            <option>
              City
            </option>

          </select>

          <select className="border border-slate-300 rounded-xl px-4 py-3 outline-none">

            <option>
              Status
            </option>

          </select>

          <button className="border border-slate-300 px-5 rounded-xl hover:bg-slate-100 transition">
            Clear
          </button>

        </div>

        {/* TABLE */}

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-slate-100">

              <tr>

                <th className="p-4 text-left">
                  Supplier
                </th>

                <th className="p-4 text-left">
                  Contact
                </th>

                <th className="p-4 text-left">
                  Products
                </th>

                <th className="p-4 text-left">
                  Active POs
                </th>

                <th className="p-4 text-left">
                  Outstanding
                </th>

                <th className="p-4 text-left">
                  Rating
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

              {suppliers.map((supplier) => (

                <tr
  key={supplier.id}
  onClick={() => navigate(`/suppliers/${supplier.id}/overview`)}
  className="border-b hover:bg-slate-50 cursor-pointer transition"
>

                  <td className="p-4">

                    <h3 className="font-semibold text-slate-800">
                      {supplier.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {supplier.location}
                    </p>

                  </td>

                  <td className="p-4">

                    <h3 className="font-medium">
                      {supplier.contact}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {supplier.phone}
                    </p>

                  </td>

                  <td className="p-4">
                    {supplier.products}
                  </td>

                  <td className="p-4">
                    {supplier.activePOs}
                  </td>

                  <td className="p-4 font-medium">
                    {supplier.outstanding}
                  </td>

                  <td className="p-4 text-yellow-500 font-semibold">
                    ⭐ {supplier.rating}
                  </td>

                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        supplier.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-orange-100 text-orange-600"
                      }`}
                    >
                      {supplier.status}
                    </span>

                  </td>

                  <td className="p-4">

                    <button className="text-slate-500 hover:text-black text-xl">
                      ⋮
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* FOOTER */}

        <div className="flex items-center justify-between mt-6">

          <p className="text-sm text-slate-500">
            Showing 1 to 5 of 48 suppliers
          </p>

          <div className="flex gap-2">

            <button className="w-9 h-9 rounded-lg bg-blue-600 text-white">
              1
            </button>

            <button className="w-9 h-9 rounded-lg border">
              2
            </button>

            <button className="w-9 h-9 rounded-lg border">
              3
            </button>

          </div>

        </div>

      </div>

      {showAddModal && (

  <AddSupplierModal
    closeModal={() => setShowAddModal(false)}
    addSupplier={addSupplier}
  />

)}

    </div>

  );

};

export default Suppliers;