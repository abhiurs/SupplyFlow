const WarehouseActivity = () => {

  const activities = [

    {
      date: "20 Jun 2025, 10:30 AM",
      user: "Rahul Sharma",
      activity: "Stock Received",
      details: "GRN-1023 received from Nestlé India Ltd.",
    },

    {
      date: "19 Jun 2025, 04:30 PM",
      user: "Amit Verma",
      activity: "Stock Transfer Created",
      details: "TRF-1004 from Main Warehouse to Mumbai Warehouse",
    },

    {
      date: "18 Jun 2025, 02:15 PM",
      user: "Kiran Reddy",
      activity: "Stock Count Completed",
      details: "Stock count completed. Variance: +2 Units",
    },

    {
      date: "17 Jun 2025, 11:05 AM",
      user: "Suresh Babu",
      activity: "Warehouse Updated",
      details: "Warehouse details updated",
    },

    {
      date: "16 Jun 2025, 03:45 PM",
      user: "Rahul Sharma",
      activity: "Stock Transfer Completed",
      details: "TRF-1002 completed",
    },

  ];

  return (

    <div className="bg-white rounded-2xl p-6 shadow-sm">

      {/* TOP BAR */}

      <div className="flex justify-between items-center mb-6">

        <div className="flex gap-4">

          <select className="border rounded-xl px-4 py-3">
            <option>Date Range</option>
          </select>

          <select className="border rounded-xl px-4 py-3">
            <option>Activity Type</option>
          </select>

          <input
            type="text"
            placeholder="Search activity"
            className="border rounded-xl px-4 py-3 w-72"
          />

        </div>

        <button className="border px-5 py-3 rounded-xl hover:bg-slate-100">
          Export Logs
        </button>

      </div>

      {/* TABLE */}

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>
            <th className="p-4 text-left">Date & Time</th>
            <th className="p-4 text-left">User</th>
            <th className="p-4 text-left">Activity</th>
            <th className="p-4 text-left">Details</th>
          </tr>

        </thead>

        <tbody>

          {activities.map((log, index) => (

            <tr
              key={index}
              className="border-b hover:bg-slate-50 transition"
            >

              <td className="p-4 text-slate-600">
                {log.date}
              </td>

              <td className="p-4 font-medium">
                {log.user}
              </td>

              <td className="p-4">

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {log.activity}
                </span>

              </td>

              <td className="p-4 text-slate-700">
                {log.details}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

      {/* FOOTER */}

      <div className="flex justify-between items-center mt-6">

        <p className="text-slate-500">
          Showing 1 to 5 of 45 activities
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

  );

};

export default WarehouseActivity;