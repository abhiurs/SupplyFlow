const WarehouseTransfers = () => {

  const transfers = [

    {
      id: "TRF-1004",
      from: "Main Warehouse",
      to: "Mumbai Warehouse",
      items: 5,
      status: "In Transit",
      date: "20 Jun 2025",
    },

    {
      id: "TRF-1003",
      from: "Bangalore Warehouse",
      to: "Main Warehouse",
      items: 8,
      status: "Pending",
      date: "19 Jun 2025",
    },

    {
      id: "TRF-1002",
      from: "Main Warehouse",
      to: "Chennai Warehouse",
      items: 3,
      status: "Completed",
      date: "18 Jun 2025",
    },

    {
      id: "TRF-1001",
      from: "Chennai Warehouse",
      to: "Bangalore Warehouse",
      items: 4,
      status: "Completed",
      date: "17 Jun 2025",
    },

  ];

  return (

    <div className="grid grid-cols-12 gap-6">

      {/* LEFT SIDE */}

      <div className="col-span-8 bg-white rounded-2xl p-6 shadow-sm">

        {/* TOP BAR */}

        <div className="flex justify-between items-center mb-6">

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl">
            + Create Transfer
          </button>

          <div className="flex gap-3">

            <select className="border rounded-xl px-4 py-3">
              <option>Status: All</option>
            </select>

            <select className="border rounded-xl px-4 py-3">
              <option>Date Range</option>
            </select>

            <input
              type="text"
              placeholder="Search transfer"
              className="border rounded-xl px-4 py-3"
            />

          </div>

        </div>

        {/* TABLE */}

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>
              <th className="p-4 text-left">Transfer ID</th>
              <th className="p-4 text-left">From</th>
              <th className="p-4 text-left">To</th>
              <th className="p-4 text-left">Items</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Date</th>
            </tr>

          </thead>

          <tbody>

            {transfers.map((transfer) => (

              <tr
                key={transfer.id}
                className="border-b hover:bg-slate-50"
              >

                <td className="p-4 font-semibold text-blue-600">
                  {transfer.id}
                </td>

                <td className="p-4">
                  {transfer.from}
                </td>

                <td className="p-4">
                  {transfer.to}
                </td>

                <td className="p-4">
                  {transfer.items}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      transfer.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : transfer.status === "Pending"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {transfer.status}
                  </span>

                </td>

                <td className="p-4">
                  {transfer.date}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* RIGHT SIDE */}

      <div className="col-span-4 bg-white rounded-2xl p-6 shadow-sm h-fit">

        <h2 className="text-2xl font-bold mb-6">
          Create Transfer — Quick Steps
        </h2>

        <div className="space-y-6">

          <div className="flex gap-4">

            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              1
            </div>

            <div>
              <h3 className="font-semibold">
                Select Source Warehouse
              </h3>

              <p className="text-slate-500 text-sm">
                Choose where inventory will be transferred from
              </p>
            </div>

          </div>

          <div className="flex gap-4">

            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              2
            </div>

            <div>
              <h3 className="font-semibold">
                Select Destination
              </h3>

              <p className="text-slate-500 text-sm">
                Choose where inventory should go
              </p>
            </div>

          </div>

          <div className="flex gap-4">

            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              3
            </div>

            <div>
              <h3 className="font-semibold">
                Add Products
              </h3>

              <p className="text-slate-500 text-sm">
                Add products and quantities
              </p>
            </div>

          </div>

          <div className="flex gap-4">

            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              4
            </div>

            <div>
              <h3 className="font-semibold">
                Review & Confirm
              </h3>

              <p className="text-slate-500 text-sm">
                Verify transfer details before submission
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default WarehouseTransfers;