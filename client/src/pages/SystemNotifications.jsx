import { useNavigate } from "react-router-dom";

const SystemNotifications = () => {

    const navigate = useNavigate();

  const notifications = [

    {
      message: "Stock Count #SC-2025-06-18 submitted successfully",
      date: "19 Jun 2025, 05:20 PM",
      status: "Read",
      type: "AI",
    },

    {
      message: "New user 'Priya Nair' has been added to the system",
      date: "19 Jun 2025, 04:15 PM",
      status: "Read",
      type: "System",
    },

    {
      message: "Inventory report for May 2025 is ready",
      date: "19 Jun 2025, 03:30 PM",
      status: "Read",
      type: "Security",
    },

    {
      message: "System backup completed successfully",
      date: "19 Jun 2025, 02:00 PM",
      status: "Read",
      type: "Updates",
    },

    {
      message: "Welcome to INVENTRA! Let's set up your account.",
      date: "18 Jun 2025, 11:00 AM",
      status: "Read",
      type: "Others",
    },

  ];

  return (

    <div className="space-y-6">

      {/* HEADER */}

      <div className="flex justify-between items-center">

        <div>

            <button
      onClick={() => navigate("/alerts")}
      className="mb-4 text-blue-600 hover:text-blue-700 font-medium"
    >

      ← Back to Alerts

    </button>

          <h1 className="text-4xl font-bold text-slate-800">
            System Notifications
          </h1>

          <p className="text-slate-500 mt-2">
            General system and application notifications
          </p>

        </div>

        <div className="flex gap-3">

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-2xl transition">

            Mark all as read

          </button>

          <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-2xl transition">

            Delete All

          </button>

        </div>

      </div>

      {/* MAIN GRID */}

      <div className="grid grid-cols-12 gap-6">

        {/* TABLE */}

        <div className="col-span-9 bg-white rounded-3xl shadow-sm overflow-hidden">

          <table className="w-full">

            <thead className="bg-slate-50 border-b">

              <tr>

                <th className="text-left p-5">
                  Message
                </th>

                <th className="text-left p-5">
                  Date & Time
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

              {notifications.map((item, index) => (

                <tr
                  key={index}
                  className="border-t hover:bg-slate-50 transition"
                >

                  <td className="p-5">

                    {item.message}

                  </td>

                  <td className="p-5 text-slate-500">

                    {item.date}

                  </td>

                  <td className="p-5">

                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">

                      {item.status}

                    </span>

                  </td>

                  <td className="p-5">

                    <button className="text-blue-600 font-medium">

                      View

                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          {/* PAGINATION */}

          <div className="flex justify-between items-center p-5 border-t">

            <p className="text-slate-500 text-sm">

              Showing 1 to 5 of 15 notifications

            </p>

            <div className="flex gap-2">

              <button className="w-9 h-9 rounded-xl border border-slate-200">

                1

              </button>

              <button className="w-9 h-9 rounded-xl border border-slate-200">

                2

              </button>

              <button className="w-9 h-9 rounded-xl border border-slate-200">

                3

              </button>

            </div>

          </div>

        </div>

        {/* FILTER PANEL */}

        <div className="col-span-3 bg-white rounded-3xl p-6 shadow-sm">

          <h2 className="text-xl font-bold mb-6">
            Filter Notifications
          </h2>

          {/* TYPE */}

          <div className="mb-8">

            <h3 className="font-semibold mb-4">
              Type
            </h3>

            <div className="space-y-3">

              <label className="flex items-center gap-3">

                <input type="checkbox" />

                <span>AI</span>

              </label>

              <label className="flex items-center gap-3">

                <input type="checkbox" />

                <span>System</span>

              </label>

              <label className="flex items-center gap-3">

                <input type="checkbox" />

                <span>Security</span>

              </label>

              <label className="flex items-center gap-3">

                <input type="checkbox" />

                <span>Updates</span>

              </label>

              <label className="flex items-center gap-3">

                <input type="checkbox" />

                <span>Others</span>

              </label>

            </div>

          </div>

          {/* STATUS */}

          <div>

            <h3 className="font-semibold mb-4">
              Status
            </h3>

            <div className="space-y-3">

              <label className="flex items-center gap-3">

                <input type="radio" name="status" />

                <span>All</span>

              </label>

              <label className="flex items-center gap-3">

                <input type="radio" name="status" />

                <span>Read</span>

              </label>

              <label className="flex items-center gap-3">

                <input type="radio" name="status" />

                <span>Unread</span>

              </label>

            </div>

          </div>

          {/* CLEAR */}

          <button className="w-full mt-8 border border-slate-200 py-3 rounded-2xl hover:bg-slate-50 transition">

            Clear Filters

          </button>

        </div>

      </div>

    </div>

  );

};

export default SystemNotifications;