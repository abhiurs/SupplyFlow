import { useNavigate } from "react-router-dom";

const AISettings = () => {

  const navigate = useNavigate();

  const aiModules = [

    {
      title: "Demand Forecasting",
      desc: "Predict future product demand using AI",
      status: "Enabled",
    },

    {
      title: "Smart Reorder Recommendations",
      desc: "Generate reorder suggestions automatically",
      status: "Enabled",
    },

    {
      title: "Inventory Risk Detection",
      desc: "Detect stockout and expiry risks",
      status: "Enabled",
    },

    {
      title: "Supplier Performance Analysis",
      desc: "Analyze supplier delivery and accuracy",
      status: "Disabled",
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
            AI Settings
          </h1>

          <p className="text-slate-500 mt-2">
            Configure AI automation and smart inventory intelligence
          </p>

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition">

          Save AI Settings

        </button>

      </div>

      {/* AI OVERVIEW CARDS */}

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-slate-500">
            Active AI Modules
          </p>

          <h1 className="text-4xl font-bold mt-3">
            8
          </h1>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-green-600">
            AI Accuracy
          </p>

          <h1 className="text-4xl font-bold mt-3">
            96%
          </h1>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-blue-600">
            Predictions Generated
          </p>

          <h1 className="text-4xl font-bold mt-3">
            1,284
          </h1>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-orange-500">
            Automation Rules
          </p>

          <h1 className="text-4xl font-bold mt-3">
            14
          </h1>

        </div>

      </div>

      {/* AI MODULE SETTINGS */}

      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-2xl font-bold">
            AI Modules
          </h2>

          <button className="border border-slate-200 px-5 py-3 rounded-2xl">

            Configure Models

          </button>

        </div>

        <div className="space-y-5">

          {aiModules.map((module, index) => (

            <div
              key={index}
              className="border border-slate-100 rounded-2xl p-5 flex justify-between items-center"
            >

              <div>

                <h3 className="font-semibold text-lg">
                  {module.title}
                </h3>

                <p className="text-slate-500 mt-2 text-sm">
                  {module.desc}
                </p>

              </div>

              <div className="flex items-center gap-5">

                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    module.status === "Enabled"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >

                  {module.status}

                </span>

                <div
                  className={`w-14 h-8 rounded-full flex items-center px-1 ${
                    module.status === "Enabled"
                      ? "bg-blue-600"
                      : "bg-slate-300"
                  }`}
                >

                  <div
                    className={`w-6 h-6 bg-white rounded-full ${
                      module.status === "Enabled"
                        ? "ml-auto"
                        : ""
                    }`}
                  ></div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* FORECAST SETTINGS */}

      <div className="grid grid-cols-2 gap-6">

        {/* FORECASTING */}

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Forecasting Settings
          </h2>

          <div className="space-y-5">

            <div>

              <label className="block text-sm font-medium mb-2">
                Forecast Period
              </label>

              <select className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none">

                <option>7 Days</option>
                <option>30 Days</option>
                <option>90 Days</option>

              </select>

            </div>

            <div>

              <label className="block text-sm font-medium mb-2">
                Prediction Sensitivity
              </label>

              <select className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none">

                <option>High</option>
                <option>Medium</option>
                <option>Low</option>

              </select>

            </div>

            <div>

              <label className="block text-sm font-medium mb-2">
                Data Training Frequency
              </label>

              <select className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none">

                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>

              </select>

            </div>

          </div>

        </div>

        {/* AUTOMATION */}

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Automation Controls
          </h2>

          <div className="space-y-5">

            <div className="flex justify-between items-center border border-slate-100 rounded-2xl p-4">

              <div>

                <h3 className="font-semibold">
                  Auto Reorder Suggestions
                </h3>

                <p className="text-slate-500 text-sm mt-1">
                  Generate reorder recommendations automatically
                </p>

              </div>

              <div className="w-14 h-8 bg-blue-600 rounded-full flex items-center px-1">

                <div className="w-6 h-6 bg-white rounded-full ml-auto"></div>

              </div>

            </div>

            <div className="flex justify-between items-center border border-slate-100 rounded-2xl p-4">

              <div>

                <h3 className="font-semibold">
                  Smart Supplier Selection
                </h3>

                <p className="text-slate-500 text-sm mt-1">
                  AI suggests best suppliers
                </p>

              </div>

              <div className="w-14 h-8 bg-blue-600 rounded-full flex items-center px-1">

                <div className="w-6 h-6 bg-white rounded-full ml-auto"></div>

              </div>

            </div>

            <div className="flex justify-between items-center border border-slate-100 rounded-2xl p-4">

              <div>

                <h3 className="font-semibold">
                  Expiry Risk Monitoring
                </h3>

                <p className="text-slate-500 text-sm mt-1">
                  AI monitors expiring products
                </p>

              </div>

              <div className="w-14 h-8 bg-slate-300 rounded-full flex items-center px-1">

                <div className="w-6 h-6 bg-white rounded-full"></div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* AI INSIGHTS */}

      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <h2 className="text-2xl font-bold mb-6">
          AI Recommendation Engine
        </h2>

        <div className="grid grid-cols-3 gap-5">

          <div className="bg-slate-50 rounded-2xl p-5">

            <h3 className="font-semibold">
              Inventory Optimization
            </h3>

            <p className="text-slate-500 text-sm mt-3">
              AI balances stock levels automatically
            </p>

          </div>

          <div className="bg-slate-50 rounded-2xl p-5">

            <h3 className="font-semibold">
              Demand Trend Analysis
            </h3>

            <p className="text-slate-500 text-sm mt-3">
              Detect product demand growth patterns
            </p>

          </div>

          <div className="bg-slate-50 rounded-2xl p-5">

            <h3 className="font-semibold">
              Procurement Optimization
            </h3>

            <p className="text-slate-500 text-sm mt-3">
              Reduce procurement and inventory costs
            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default AISettings;