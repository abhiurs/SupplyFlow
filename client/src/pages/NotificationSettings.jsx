import { useNavigate } from "react-router-dom";

const NotificationSettings = () => {

  const navigate = useNavigate();

  const notifications = [

    {
      title: "Low Stock Alerts",
      desc: "Receive alerts when inventory is running low",
      enabled: true,
    },

    {
      title: "Expiry Alerts",
      desc: "Get notified about expiring products",
      enabled: true,
    },

    {
      title: "Delayed Purchase Orders",
      desc: "Receive updates on delayed procurement orders",
      enabled: true,
    },

    {
      title: "Payment Due Alerts",
      desc: "Notifications for supplier payment due dates",
      enabled: false,
    },

    {
      title: "AI Insights Notifications",
      desc: "Receive AI-generated inventory recommendations",
      enabled: true,
    },

  ];

  return (

    <div className="space-y-8">

      {/* HEADER */}

      <div className="flex justify-between items-center">

        <div>

          <button
            onClick={() => navigate("/settings")}
            className="mb-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition"
          >

            ← Back to Settings

          </button>

          <h1 className="text-4xl font-bold text-slate-800">
            Notification Settings
          </h1>

          <p className="text-slate-500 mt-2">
            Configure email, SMS and system notifications
          </p>

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition">

          Save Preferences

        </button>

      </div>

      {/* CHANNEL SETTINGS */}

      <div className="grid grid-cols-3 gap-6">

        {/* EMAIL */}

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold">
                Email Notifications
              </h2>

              <p className="text-slate-500 mt-2 text-sm">
                Receive updates through email
              </p>

            </div>

            <div className="w-14 h-8 bg-blue-600 rounded-full flex items-center px-1">

              <div className="w-6 h-6 bg-white rounded-full ml-auto"></div>

            </div>

          </div>

          <div className="mt-8 space-y-5">

            <div>

              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>

              <input
                type="email"
                defaultValue="admin@inventra.com"
                className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none"
              />

            </div>

            <div>

              <label className="block text-sm font-medium mb-2">
                Frequency
              </label>

              <select className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none">

                <option>Instant</option>
                <option>Hourly</option>
                <option>Daily Summary</option>

              </select>

            </div>

          </div>

        </div>

        {/* SMS */}

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold">
                SMS Alerts
              </h2>

              <p className="text-slate-500 mt-2 text-sm">
                Receive alerts through SMS
              </p>

            </div>

            <div className="w-14 h-8 bg-slate-300 rounded-full flex items-center px-1">

              <div className="w-6 h-6 bg-white rounded-full"></div>

            </div>

          </div>

          <div className="mt-8 space-y-5">

            <div>

              <label className="block text-sm font-medium mb-2">
                Phone Number
              </label>

              <input
                type="text"
                defaultValue="+91 9876543210"
                className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none"
              />

            </div>

            <div>

              <label className="block text-sm font-medium mb-2">
                Frequency
              </label>

              <select className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none">

                <option>Critical Only</option>
                <option>All Alerts</option>

              </select>

            </div>

          </div>

        </div>

        {/* PUSH */}

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold">
                Push Notifications
              </h2>

              <p className="text-slate-500 mt-2 text-sm">
                Browser and app notifications
              </p>

            </div>

            <div className="w-14 h-8 bg-blue-600 rounded-full flex items-center px-1">

              <div className="w-6 h-6 bg-white rounded-full ml-auto"></div>

            </div>

          </div>

          <div className="mt-8 space-y-5">

            <div>

              <label className="block text-sm font-medium mb-2">
                Notification Priority
              </label>

              <select className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none">

                <option>High</option>
                <option>Medium</option>
                <option>Low</option>

              </select>

            </div>

            <div>

              <label className="block text-sm font-medium mb-2">
                Browser Alerts
              </label>

              <select className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none">

                <option>Enabled</option>
                <option>Disabled</option>

              </select>

            </div>

          </div>

        </div>

      </div>

      {/* ALERT PREFERENCES */}

      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-2xl font-bold">
            Alert Preferences
          </h2>

          <button className="border border-slate-200 px-5 py-3 rounded-2xl">

            Reset Defaults

          </button>

        </div>

        <div className="space-y-5">

          {notifications.map((item, index) => (

            <div
              key={index}
              className="border border-slate-100 rounded-2xl p-5 flex justify-between items-center"
            >

              <div>

                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="text-slate-500 mt-2 text-sm">
                  {item.desc}
                </p>

              </div>

              <div
                className={`w-14 h-8 rounded-full flex items-center px-1 ${
                  item.enabled
                    ? "bg-blue-600"
                    : "bg-slate-300"
                }`}
              >

                <div
                  className={`w-6 h-6 bg-white rounded-full ${
                    item.enabled
                      ? "ml-auto"
                      : ""
                  }`}
                ></div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* AI NOTIFICATIONS */}

      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <h2 className="text-2xl font-bold mb-6">
          AI Notification Controls
        </h2>

        <div className="grid grid-cols-3 gap-5">

          <div className="bg-slate-50 rounded-2xl p-5">

            <h3 className="font-semibold">
              AI Recommendations
            </h3>

            <p className="text-slate-500 text-sm mt-3">
              Receive smart inventory optimization recommendations
            </p>

          </div>

          <div className="bg-slate-50 rounded-2xl p-5">

            <h3 className="font-semibold">
              Demand Forecast Alerts
            </h3>

            <p className="text-slate-500 text-sm mt-3">
              Get AI demand forecasting updates
            </p>

          </div>

          <div className="bg-slate-50 rounded-2xl p-5">

            <h3 className="font-semibold">
              Smart Reorder Alerts
            </h3>

            <p className="text-slate-500 text-sm mt-3">
              AI-generated reorder notifications
            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default NotificationSettings;