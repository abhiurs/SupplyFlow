const UserActivityLog = () => {

  const logs = [

    {
      date: "20 Jun 2025, 10:30 AM",
      user: "Rahul Sharma",
      action: "Created Purchase Order",
      module: "Procurement",
      details: "PO-2025-0012 created",
      ip: "192.168.1.10",
    },

    {
      date: "20 Jun 2025, 09:20 AM",
      user: "Priya Nair",
      action: "Received Goods",
      module: "Procurement",
      details: "GRN-2025-0034 received",
      ip: "192.168.1.15",
    },

    {
      date: "19 Jun 2025, 08:45 PM",
      user: "Amit Patel",
      action: "Stock Adjustment",
      module: "Inventory",
      details: "Adjusted 15 items",
      ip: "192.168.1.18",
    },

    {
      date: "19 Jun 2025, 06:15 PM",
      user: "Sneha Iyer",
      action: "Payment Recorded",
      module: "Finance",
      details: "₹45,000 payment recorded",
      ip: "192.168.1.22",
    },

  ];

  return (

    <div className="space-y-8">

      {/* HEADER */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold text-slate-800">
            User Activity Log
          </h1>

          <p className="text-slate-500 mt-2">
            Track all user activities
          </p>

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl">
          Export
        </button>

      </div>

      {/* FILTERS */}

      <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-wrap gap-4">

        <input
          type="text"
          placeholder="Search activity..."
          className="border border-slate-200 rounded-2xl px-4 py-3 w-72"
        />

        <select className="border border-slate-200 rounded-2xl px-4 py-3">
          <option>All Users</option>
        </select>

        <select className="border border-slate-200 rounded-2xl px-4 py-3">
          <option>All Modules</option>
        </select>

      </div>

      {/* TABLE */}

      <div className="bg-white rounded-3xl shadow-sm overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-200">

              <th className="text-left px-6 py-5">
                Date & Time
              </th>

              <th className="text-left">
                User
              </th>

              <th className="text-left">
                Action
              </th>

              <th className="text-left">
                Module
              </th>

              <th className="text-left">
                Details
              </th>

              <th className="text-left">
                IP Address
              </th>

            </tr>

          </thead>

          <tbody>

            {logs.map((log, index) => (

              <tr
                key={index}
                className="border-b border-slate-100 hover:bg-slate-50"
              >

                <td className="px-6 py-5">
                  {log.date}
                </td>

                <td>
                  {log.user}
                </td>

                <td>
                  {log.action}
                </td>

                <td>
                  {log.module}
                </td>

                <td>
                  {log.details}
                </td>

                <td>
                  {log.ip}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default UserActivityLog;