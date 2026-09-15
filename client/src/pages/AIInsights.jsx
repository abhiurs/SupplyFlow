import {
  Outlet,
  useLocation,
  Link,
} from "react-router-dom";


const AIInsights = () => {

  const location = useLocation();

  const cards = [

    {
      title: "Products at Risk",
      value: "8",
      desc: "Products will go out of stock in 5 days",
      color: "text-red-500",
      bg: "bg-red-100",
    },

    {
      title: "Potential Savings",
      value: "₹1,25,000",
      desc: "Worth of slow-moving inventory",
      color: "text-orange-500",
      bg: "bg-orange-100",
    },

    {
      title: "Supplier Accuracy",
      value: "96%",
      desc: "Supplier delivery performance",
      color: "text-green-500",
      bg: "bg-green-100",
    },

    {
      title: "Pending Orders",
      value: "3",
      desc: "Suppliers have delayed orders",
      color: "text-blue-500",
      bg: "bg-blue-100",
    },

    {
      title: "Expiry Alerts",
      value: "4",
      desc: "Batches expiring within 15 days",
      color: "text-purple-500",
      bg: "bg-purple-100",
    },

    {
      title: "Inventory Health",
      value: "87/100",
      desc: "Overall inventory score",
      color: "text-indigo-500",
      bg: "bg-indigo-100",
    },

  ];

  return (

      <>
      {location.pathname === "/ai-insights" ? (

    <div className="space-y-8">

      {/* HEADER */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold text-slate-800">
            AI Insights
          </h1>

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition">
          Export Insights
        </button>

      </div>

      {/* TOP CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-5">

        {cards.map((card, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 hover:shadow-lg transition"
          >

            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center ${card.bg}`}
            >
              <span className={`font-bold ${card.color}`}>
                !
              </span>
            </div>

            <h1 className={`text-3xl font-bold mt-5 ${card.color}`}>
              {card.value}
            </h1>

            <h3 className="font-semibold text-slate-700 mt-3">
              {card.title}
            </h3>

            <p className="text-slate-500 text-sm mt-2">
              {card.desc}
            </p>

          </div>

        ))}

      </div>

      {/* MAIN GRID */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* TOP RECOMMENDATIONS */}

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-bold">
              Top Recommendations
            </h2>

            <Link
              to="/ai-insights/reorder-recommendations"
              className="text-blue-600 font-medium"
            >
              View All
            </Link>

          </div>

          <div className="space-y-5">

            <div className="border border-slate-100 rounded-2xl p-5">

              <h3 className="font-semibold text-slate-800">
                Reorder Maggi Noodles
              </h3>

              <p className="text-slate-500 mt-2 text-sm">
                Stock will run out in 3 days
              </p>

            </div>

            <div className="border border-slate-100 rounded-2xl p-5">

              <h3 className="font-semibold text-slate-800">
                Reduce excess cooking oil inventory
              </h3>

              <p className="text-slate-500 mt-2 text-sm">
                Slow-moving stock detected
              </p>

            </div>

            <div className="border border-slate-100 rounded-2xl p-5">

              <h3 className="font-semibold text-slate-800">
                Switch supplier for faster delivery
              </h3>

              <p className="text-slate-500 mt-2 text-sm">
                Supplier performance dropped
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* QUICK ACCESS */}

      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <h2 className="text-2xl font-bold mb-6">
          AI Modules
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

          <Link
            to="/ai-insights/smart-alerts"
            className="border border-slate-100 rounded-2xl p-5 hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg">
              Smart Alerts
            </h3>

            <p className="text-slate-500 mt-2 text-sm">
              View AI generated inventory alerts
            </p>
          </Link>

          <Link
            to="/ai-insights/demand-forecast"
            className="border border-slate-100 rounded-2xl p-5 hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg">
              Demand Forecast
            </h3>

            <p className="text-slate-500 mt-2 text-sm">
              Predict future inventory demand
            </p>
          </Link>

          <Link
            to="/ai-insights/reorder-recommendations"
            className="border border-slate-100 rounded-2xl p-5 hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg">
              Reorder Recommendations
            </h3>

            <p className="text-slate-500 mt-2 text-sm">
              Smart reorder suggestions
            </p>
          </Link>

          <Link
            to="/ai-insights/ai-chat-assistant"
            className="border border-slate-100 rounded-2xl p-5 hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg">
              AI Chat Assistant
            </h3>

            <p className="text-slate-500 mt-2 text-sm">
              Ask AI about inventory insights
            </p>
          </Link>

        </div>

      </div>

    </div>
      ):(

        <Outlet />
  )}
  </>
);

};

export default AIInsights;