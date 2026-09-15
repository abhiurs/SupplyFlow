import { Link, Outlet, useLocation } from "react-router-dom";

const Alerts = () => {

  const location = useLocation();

  const alertCards = [

    {
      title: "Total Alerts",
      value: "28",
      desc: "All active alerts",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },

    {
      title: "Critical",
      value: "6",
      desc: "Requires immediate action",
      color: "text-red-500",
      bg: "bg-red-100",
    },

    {
      title: "Warning",
      value: "12",
      desc: "Action recommended",
      color: "text-orange-500",
      bg: "bg-orange-100",
    },

    {
      title: "Info",
      value: "10",
      desc: "For your information",
      color: "text-indigo-500",
      bg: "bg-indigo-100",
    },

  ];

  return (

    <>

      {location.pathname === "/alerts" && (

        <div className="space-y-8">

          {/* HEADER */}

          <div className="flex justify-between items-center">

            <div>

              <h1 className="text-4xl font-bold text-slate-800">
                Alerts
              </h1>

              <p className="text-slate-500 mt-2">
                Monitor and manage system alerts
              </p>

            </div>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl">

              Mark all as read

            </button>

          </div>

          {/* CARDS */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

            {alertCards.map((card, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100"
              >

                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${card.bg}`}
                >

                  <span className={card.color}>
                    !
                  </span>

                </div>

                <h1 className={`text-4xl font-bold mt-5 ${card.color}`}>
                  {card.value}
                </h1>

                <h3 className="font-semibold mt-3">
                  {card.title}
                </h3>

                <p className="text-slate-500 text-sm mt-2">
                  {card.desc}
                </p>

              </div>

            ))}

          </div>

          {/* ALERT MODULES */}

          <div className="bg-white rounded-3xl p-6 shadow-sm">

            <h2 className="text-2xl font-bold mb-6">
              Alert Modules
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">

              <Link
  to="/alerts/low-stock-alerts"
  className={`rounded-2xl p-5 transition border hover:shadow-lg hover:border-blue-400 hover:bg-blue-50 ${
    location.pathname === "/alerts/low-stock-alerts"
      ? "bg-blue-600 text-white border-blue-600 shadow-lg"
      : "bg-white border-slate-200"
  }`}
>

                <h3 className="font-semibold text-lg">
                  Low Stock Alerts
                </h3>

                <p className="text-slate-500 mt-2 text-sm">
                  Inventory shortage warnings
                </p>

              </Link>

              <Link
  to="/alerts/expiry-alerts"
  className={`rounded-2xl p-5 transition border hover:shadow-lg hover:border-blue-400 hover:bg-blue-50 ${
    location.pathname === "/alerts/expiry-alerts"
      ? "bg-blue-600 text-white border-blue-600 shadow-lg"
      : "bg-white border-slate-200"
  }`}
>

                <h3 className="font-semibold text-lg">
                  Expiry Alerts
                </h3>

                <p className="text-slate-500 mt-2 text-sm">
                  Expiring product batches
                </p>

              </Link>

              <Link
  to="/alerts/delayed-po-alerts"
  className={`rounded-2xl p-5 transition border hover:shadow-lg hover:border-blue-400 hover:bg-blue-50 ${
    location.pathname === "/alerts/delayed-po-alerts"
      ? "bg-blue-600 text-white border-blue-600 shadow-lg"
      : "bg-white border-slate-200"
  }`}
>

                <h3 className="font-semibold text-lg">
                  Delayed PO Alerts
                </h3>

                <p className="text-slate-500 mt-2 text-sm">
                  Delayed purchase orders
                </p>

              </Link>

              <Link
  to="/alerts/payment-due-alerts"
  className={`rounded-2xl p-5 transition border hover:shadow-lg hover:border-blue-400 hover:bg-blue-50 ${
    location.pathname === "/alerts/payment-due-alerts"
      ? "bg-blue-600 text-white border-blue-600 shadow-lg"
      : "bg-white border-slate-200"
  }`}
>

                <h3 className="font-semibold text-lg">
                  Payment Due Alerts
                </h3>

                <p className="text-slate-500 mt-2 text-sm">
                  Upcoming payments
                </p>

              </Link>

              <Link
  to="/alerts/system-notifications"
  className={`rounded-2xl p-5 transition border hover:shadow-lg hover:border-blue-400 hover:bg-blue-50 ${
    location.pathname === "/alerts/system-notifications"
      ? "bg-blue-600 text-white border-blue-600 shadow-lg"
      : "bg-white border-slate-200"
  }`}
>

                <h3 className="font-semibold text-lg">
                  System Notifications
                </h3>

                <p className="text-slate-500 mt-2 text-sm">
                  ERP notifications
                </p>

              </Link>

            </div>

          </div>

        </div>

      )}

      {/* SUBPAGES */}

      {location.pathname !== "/alerts" && (
        <Outlet />
      )}

    </>

  );

};

export default Alerts;