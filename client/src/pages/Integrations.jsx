import { useNavigate } from "react-router-dom";

const Integrations = () => {

  const navigate = useNavigate();

  const integrations = [

    {
      name: "Razorpay",
      category: "Payment Gateway",
      status: "Connected",
      color: "bg-green-100 text-green-600",
    },

    {
      name: "Stripe",
      category: "Payment Gateway",
      status: "Disconnected",
      color: "bg-red-100 text-red-600",
    },

    {
      name: "Tally ERP",
      category: "Accounting",
      status: "Connected",
      color: "bg-green-100 text-green-600",
    },

    {
      name: "QuickBooks",
      category: "Accounting",
      status: "Disconnected",
      color: "bg-red-100 text-red-600",
    },

    {
      name: "Shiprocket",
      category: "Logistics",
      status: "Connected",
      color: "bg-green-100 text-green-600",
    },

    {
      name: "Delhivery",
      category: "Logistics",
      status: "Connected",
      color: "bg-green-100 text-green-600",
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
            Integrations
          </h1>

          <p className="text-slate-500 mt-2">
            Manage third-party integrations and external services
          </p>

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition">

          + Add Integration

        </button>

      </div>

      {/* TOP CARDS */}

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-slate-500">
            Total Integrations
          </p>

          <h1 className="text-4xl font-bold mt-3">
            12
          </h1>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-green-600">
            Active Connections
          </p>

          <h1 className="text-4xl font-bold mt-3">
            8
          </h1>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-blue-600">
            API Requests
          </p>

          <h1 className="text-4xl font-bold mt-3">
            24K
          </h1>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-orange-500">
            Webhooks
          </p>

          <h1 className="text-4xl font-bold mt-3">
            18
          </h1>

        </div>

      </div>

      {/* INTEGRATIONS GRID */}

      <div className="grid grid-cols-3 gap-6">

        {integrations.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition"
          >

            <div className="flex justify-between items-start">

              <div>

                <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl">

                  🔗

                </div>

                <h2 className="text-2xl font-bold mt-5">
                  {item.name}
                </h2>

                <p className="text-slate-500 mt-2">
                  {item.category}
                </p>

              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm ${item.color}`}
              >

                {item.status}

              </span>

            </div>

            <div className="flex gap-3 mt-8">

              <button className="bg-blue-600 text-white px-5 py-3 rounded-2xl">

                Configure

              </button>

              <button className="border border-slate-200 px-5 py-3 rounded-2xl">

                Disconnect

              </button>

            </div>

          </div>

        ))}

      </div>

      {/* API SETTINGS */}

      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-2xl font-bold">
            API Configuration
          </h2>

          <button className="bg-blue-600 text-white px-5 py-3 rounded-2xl">

            Generate API Key

          </button>

        </div>

        <div className="grid grid-cols-2 gap-6">

          <div>

            <label className="block text-sm font-medium mb-2">
              API Key
            </label>

            <input
              type="text"
              value="sk_live_48fhsd89sd8fhsdf"
              readOnly
              className="w-full border border-slate-200 rounded-2xl px-5 py-4 bg-slate-50 outline-none"
            />

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Webhook URL
            </label>

            <input
              type="text"
              value="https://inventra.com/webhooks"
              readOnly
              className="w-full border border-slate-200 rounded-2xl px-5 py-4 bg-slate-50 outline-none"
            />

          </div>

        </div>

      </div>

      {/* WEBHOOK EVENTS */}

      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <h2 className="text-2xl font-bold mb-6">
          Webhook Events
        </h2>

        <div className="grid grid-cols-3 gap-5">

          {[
            "Order Created",
            "Payment Completed",
            "Inventory Updated",
            "Supplier Added",
            "Purchase Approved",
            "AI Recommendation Generated",
          ].map((item, index) => (

            <div
              key={index}
              className="border border-slate-100 rounded-2xl p-5 hover:shadow-md transition"
            >

              <div className="flex justify-between items-center">

                <div>

                  <h3 className="font-semibold">
                    {item}
                  </h3>

                  <p className="text-slate-500 text-sm mt-2">
                    Webhook Trigger Event
                  </p>

                </div>

                <div className="w-12 h-7 bg-blue-600 rounded-full flex items-center px-1">

                  <div className="w-5 h-5 bg-white rounded-full ml-auto"></div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

};

export default Integrations;