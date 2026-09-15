import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddWarehouseModal from "../components/AddWarehouseModal";

const Warehouses = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const [warehouses, setWarehouses] = useState([

    {
      id: 1,
      name: "Main Warehouse",
      code: "WH-001",
      location: "Hyderabad, TS",
      capacity: "10,000 Units",
      occupied: "8,200 Units",
      utilization: 82,
      manager: "Rahul Sharma",
      status: "Active",
    },

    {
      id: 2,
      name: "Mumbai Warehouse",
      code: "WH-002",
      location: "Mumbai, MH",
      capacity: "15,000 Units",
      occupied: "10,500 Units",
      utilization: 70,
      manager: "Amit Verma",
      status: "Active",
    },

    {
      id: 3,
      name: "Bangalore Warehouse",
      code: "WH-003",
      location: "Bangalore, KA",
      capacity: "15,000 Units",
      occupied: "12,800 Units",
      utilization: 85,
      manager: "Kiran Reddy",
      status: "Active",
    },

    {
      id: 4,
      name: "Chennai Warehouse",
      code: "WH-004",
      location: "Chennai, TN",
      capacity: "10,000 Units",
      occupied: "7,000 Units",
      utilization: 70,
      manager: "Suresh Babu",
      status: "Inactive",
    },

  ]);

  useEffect(() => {
  localStorage.setItem(
    "warehouses",
    JSON.stringify(warehouses)
  );
}, [warehouses]);


  const addWarehouse = (newWarehouse) => {

  setWarehouses((prev) => [

    {
      id: prev.length + 1,
      occupied: "0 Units",
      utilization: 0,
      ...newWarehouse,
    },

    ...prev,

  ]);

};

  return (

    <div className="space-y-6">

      {/* HEADER */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            Warehouses
          </h1>

        </div>

        <div className="flex gap-3">

          <button className="border px-5 py-3 rounded-xl hover:bg-slate-100 transition">
            Export
          </button>

          <button
  onClick={() => setShowModal(true)}
  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition"
>
  + Add Warehouse
</button>

        </div>

      </div>

      {/* TOP CARDS */}

      <div className="grid grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl p-5 shadow-sm border">

          <p className="text-slate-500">
            Total Warehouses
          </p>

          <h2 className="text-4xl font-bold mt-2 text-blue-600">
            4
          </h2>

          <p className="text-sm text-slate-400 mt-2">
            All locations
          </p>

        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border">

          <p className="text-slate-500">
            Total Capacity
          </p>

          <h2 className="text-4xl font-bold mt-2 text-green-600">
            50,000
          </h2>

          <p className="text-sm text-slate-400 mt-2">
            Units
          </p>

        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border">

          <p className="text-slate-500">
            Occupied Capacity
          </p>

          <h2 className="text-4xl font-bold mt-2 text-orange-500">
            38,500
          </h2>

          <p className="text-sm text-slate-400 mt-2">
            Across all warehouses
          </p>

        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border">

          <p className="text-slate-500">
            Utilization
          </p>

          <h2 className="text-4xl font-bold mt-2 text-purple-600">
            77%
          </h2>

          <p className="text-sm text-slate-400 mt-2">
            Average utilization
          </p>

        </div>

      </div>

      {/* TABLE SECTION */}

      <div className="bg-white rounded-2xl p-6 shadow-sm border">

        {/* FILTERS */}

        <div className="flex gap-4 mb-6">

          <input
            type="text"
            placeholder="Search warehouse"
            className="border rounded-xl px-4 py-3 w-72 outline-none"
          />

          <select className="border rounded-xl px-4 py-3 outline-none">

            <option>
              City: All
            </option>

          </select>

          <select className="border rounded-xl px-4 py-3 outline-none">

            <option>
              Status: All
            </option>

          </select>

          <button className="border rounded-xl px-5 py-3 hover:bg-slate-100 transition">
            Clear
          </button>

        </div>

        {/* TABLE */}

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-4 text-left">
                Warehouse Name
              </th>

              <th className="p-4 text-left">
                Code
              </th>

              <th className="p-4 text-left">
                Location
              </th>

              <th className="p-4 text-left">
                Capacity
              </th>

              <th className="p-4 text-left">
                Occupied
              </th>

              <th className="p-4 text-left">
                Utilization
              </th>

              <th className="p-4 text-left">
                Manager
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

            {warehouses.map((warehouse) => (

              <tr
                key={warehouse.id}
                className="border-b hover:bg-slate-50 transition"
              >

                <td
  onClick={() =>
    navigate(`/warehouses/${warehouse.id}/overview`)
  }
  className="p-4 font-semibold text-blue-600 cursor-pointer hover:underline"
>
  {warehouse.name}
</td>

                <td className="p-4">
                  {warehouse.code}
                </td>

                <td className="p-4">
                  {warehouse.location}
                </td>

                <td className="p-4">
                  {warehouse.capacity}
                </td>

                <td className="p-4">
                  {warehouse.occupied}
                </td>

                <td className="p-4">

                  <div className="flex items-center gap-3">

                    <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">

                      <div
                        style={{
                          width: `${warehouse.utilization}%`,
                        }}
                        className={`h-full rounded-full ${
                          warehouse.utilization >= 80
                            ? "bg-green-500"
                            : "bg-orange-400"
                        }`}
                      />

                    </div>

                    <span>
                      {warehouse.utilization}%
                    </span>

                  </div>

                </td>

                <td className="p-4">
                  {warehouse.manager}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      warehouse.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {warehouse.status}
                  </span>

                </td>

                <td className="p-4 text-xl cursor-pointer">
                  ⋮
                </td>

              </tr>

            ))}

          </tbody>

        </table>

        {/* FOOTER */}

        <div className="flex justify-between items-center mt-6">

          <p className="text-slate-500">
            Showing 1 to 4 of 4 warehouses
          </p>

          <div className="flex gap-2">

            <button className="w-10 h-10 rounded-lg bg-blue-600 text-white">
              1
            </button>

            <button className="w-10 h-10 rounded-lg border">
              2
            </button>

          </div>

        </div>

      </div>

      {
  showModal && (

    <AddWarehouseModal
      closeModal={() => setShowModal(false)}
      addWarehouse={addWarehouse}
    />

  )
}

    </div>

  );

};

export default Warehouses;