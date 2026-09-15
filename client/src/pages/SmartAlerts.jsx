const SmartAlerts = () => {

  const alerts = [

    {
      title: "Maggi Noodles stock running low",
      severity: "Critical",
      action: "Reorder immediately",
      color: "red",
    },

    {
      title: "Sunflower Oil overstock detected",
      severity: "Medium",
      action: "Reduce procurement",
      color: "orange",
    },

    {
      title: "Supplier delayed shipment",
      severity: "Warning",
      action: "Contact supplier",
      color: "yellow",
    },

    {
      title: "Rice batch expires in 5 days",
      severity: "Critical",
      action: "Move inventory quickly",
      color: "red",
    },

  ];

  return (

    <div className="space-y-8">

      {/* HEADER */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            Smart Alerts
          </h1>

          <p className="text-slate-500 mt-2">
            AI-generated inventory and procurement alerts
          </p>

        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl">
          Generate Report
        </button>

      </div>

      {/* ALERTS */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {alerts.map((alert, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100"
          >

            <div className="flex justify-between items-center">

              <h2 className="text-xl font-semibold">
                {alert.title}
              </h2>

              <span
                className={`px-4 py-1 rounded-full text-sm ${
                  alert.color === "red"
                    ? "bg-red-100 text-red-600"
                    : alert.color === "orange"
                    ? "bg-orange-100 text-orange-600"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {alert.severity}
              </span>

            </div>

            <p className="text-slate-500 mt-4">
              Recommended Action:
            </p>

            <h3 className="font-semibold mt-2">
              {alert.action}
            </h3>

          </div>

        ))}

      </div>

    </div>

  );

};

export default SmartAlerts;