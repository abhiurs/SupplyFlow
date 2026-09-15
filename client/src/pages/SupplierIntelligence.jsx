const SupplierIntelligence = () => {

  const suppliers = [

    {
      name: "Nestlé India",
      delivery: "96%",
      reliability: "98%",
      quality: "95%",
      risk: "Low",
    },

    {
      name: "Tata Consumer",
      delivery: "91%",
      reliability: "92%",
      quality: "90%",
      risk: "Medium",
    },

    {
      name: "Emami Ltd.",
      delivery: "87%",
      reliability: "85%",
      quality: "89%",
      risk: "Medium",
    },

    {
      name: "HUL",
      delivery: "82%",
      reliability: "80%",
      quality: "84%",
      risk: "High",
    },

  ];

  return (

    <div className="space-y-8">

      {/* HEADER */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            Supplier Intelligence
          </h1>

          <p className="text-slate-500 mt-2">
            AI-powered supplier analytics and performance tracking
          </p>

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition">

          Export Analytics

        </button>

      </div>

      {/* TOP CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-slate-500">
            Best Supplier Score
          </p>

          <h1 className="text-5xl font-bold mt-3 text-green-500">
            98%
          </h1>

          <p className="text-green-500 mt-3 text-sm">
            Nestlé India
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-slate-500">
            Delay Risk Suppliers
          </p>

          <h1 className="text-5xl font-bold mt-3 text-red-500">
            3
          </h1>

          <p className="text-red-500 mt-3 text-sm">
            Requires monitoring
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-slate-500">
            Avg Delivery Rate
          </p>

          <h1 className="text-5xl font-bold mt-3 text-blue-500">
            89%
          </h1>

          <p className="text-blue-500 mt-3 text-sm">
            Overall supplier performance
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-slate-500">
            AI Recommendations
          </p>

          <h1 className="text-5xl font-bold mt-3 text-purple-500">
            12
          </h1>

          <p className="text-purple-500 mt-3 text-sm">
            Suggested optimizations
          </p>

        </div>

      </div>

      {/* SUPPLIER PERFORMANCE */}

      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <div className="flex justify-between items-center mb-6">

          <div>

            <h2 className="text-2xl font-bold">
              Supplier Performance Analytics
            </h2>

            <p className="text-slate-500 mt-1">
              AI-generated supplier reliability and delivery analysis
            </p>

          </div>

          <button className="border border-slate-200 px-5 py-3 rounded-2xl">

            Filter

          </button>

        </div>

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="text-left p-4">
                Supplier
              </th>

              <th className="text-left p-4">
                Delivery Rate
              </th>

              <th className="text-left p-4">
                Reliability
              </th>

              <th className="text-left p-4">
                Quality Score
              </th>

              <th className="text-left p-4">
                Risk Level
              </th>

              <th className="text-left p-4">
                AI Suggestion
              </th>

            </tr>

          </thead>

          <tbody>

            {suppliers.map((supplier, index) => (

              <tr
                key={index}
                className="border-b hover:bg-slate-50"
              >

                <td className="p-4 font-medium">
                  {supplier.name}
                </td>

                <td className="p-4">
                  {supplier.delivery}
                </td>

                <td className="p-4">
                  {supplier.reliability}
                </td>

                <td className="p-4">
                  {supplier.quality}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      supplier.risk === "Low"
                        ? "bg-green-100 text-green-600"
                        : supplier.risk === "Medium"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >

                    {supplier.risk}

                  </span>

                </td>

                <td className="p-4">

                  <button className="text-blue-600 font-medium">

                    View Insights

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* AI INSIGHTS */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <h2 className="text-xl font-bold">
            Delivery Prediction
          </h2>

          <p className="text-slate-500 mt-4">
            AI predicts possible delays from HUL supplier next month.
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <h2 className="text-xl font-bold">
            Best Supplier Match
          </h2>

          <p className="text-slate-500 mt-4">
            Nestlé India currently provides fastest procurement cycle.
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <h2 className="text-xl font-bold">
            Procurement Optimization
          </h2>

          <p className="text-slate-500 mt-4">
            Switching 2 vendors may reduce logistics costs by 8%.
          </p>

        </div>

      </div>

    </div>

  );

};

export default SupplierIntelligence;