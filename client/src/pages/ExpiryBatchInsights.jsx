const ExpiryBatchInsights = () => {

  const expiryProducts = [

    {
      product: "Sunflower Oil",
      batch: "BATCH-1024",
      expiry: "12 Jul 2025",
      stock: "120 pcs",
      risk: "High",
    },

    {
      product: "Maggi Noodles",
      batch: "BATCH-2048",
      expiry: "18 Jul 2025",
      stock: "200 pcs",
      risk: "Medium",
    },

    {
      product: "Tata Salt",
      batch: "BATCH-3001",
      expiry: "28 Jul 2025",
      stock: "340 pcs",
      risk: "Low",
    },

    {
      product: "Red Label Tea",
      batch: "BATCH-4500",
      expiry: "09 Jul 2025",
      stock: "90 pcs",
      risk: "Critical",
    },

  ];

  return (

    <div className="space-y-8">

      {/* HEADER */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            Expiry & Batch Insights
          </h1>

          <p className="text-slate-500 mt-2">
            AI-powered expiry tracking and inventory waste reduction
          </p>

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition">

          Export Report

        </button>

      </div>

      {/* TOP CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-slate-500">
            Expiring Soon
          </p>

          <h1 className="text-5xl font-bold mt-3 text-red-500">
            18
          </h1>

          <p className="text-red-500 mt-3 text-sm">
            Products expiring in 15 days
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-slate-500">
            Waste Risk
          </p>

          <h1 className="text-5xl font-bold mt-3 text-orange-500">
            ₹24K
          </h1>

          <p className="text-orange-500 mt-3 text-sm">
            Potential inventory loss
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-slate-500">
            Safe Inventory
          </p>

          <h1 className="text-5xl font-bold mt-3 text-green-500">
            92%
          </h1>

          <p className="text-green-500 mt-3 text-sm">
            Healthy batch inventory
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-slate-500">
            AI Accuracy
          </p>

          <h1 className="text-5xl font-bold mt-3 text-blue-500">
            95%
          </h1>

          <p className="text-blue-500 mt-3 text-sm">
            Expiry prediction accuracy
          </p>

        </div>

      </div>

      {/* EXPIRY ANALYTICS */}

      <div className="bg-white rounded-3xl p-8 shadow-sm">

        <div className="flex justify-between items-center mb-8">

          <div>

            <h2 className="text-2xl font-bold">
              Expiry Analytics
            </h2>

            <p className="text-slate-500 mt-1">
              AI-generated expiry and inventory waste insights
            </p>

          </div>

          <button className="border border-slate-200 px-5 py-3 rounded-2xl">

            Last 30 Days

          </button>

        </div>

        <div className="h-96 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-400 text-lg">

          Expiry Analytics Graph Here

        </div>

      </div>

      {/* EXPIRY TABLE */}

      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <div className="flex justify-between items-center mb-6">

          <div>

            <h2 className="text-2xl font-bold">
              Expiry Risk Analysis
            </h2>

            <p className="text-slate-500 mt-1">
              AI-detected expiring inventory and waste prediction
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
                Product
              </th>

              <th className="text-left p-4">
                Batch ID
              </th>

              <th className="text-left p-4">
                Expiry Date
              </th>

              <th className="text-left p-4">
                Stock
              </th>

              <th className="text-left p-4">
                Risk Level
              </th>

              <th className="text-left p-4">
                AI Recommendation
              </th>

            </tr>

          </thead>

          <tbody>

            {expiryProducts.map((item, index) => (

              <tr
                key={index}
                className="border-b hover:bg-slate-50"
              >

                <td className="p-4 font-medium">
                  {item.product}
                </td>

                <td className="p-4">
                  {item.batch}
                </td>

                <td className="p-4">
                  {item.expiry}
                </td>

                <td className="p-4">
                  {item.stock}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.risk === "Critical"
                        ? "bg-red-100 text-red-600"
                        : item.risk === "High"
                        ? "bg-orange-100 text-orange-600"
                        : item.risk === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-600"
                    }`}
                  >

                    {item.risk}

                  </span>

                </td>

                <td className="p-4">

                  <button className="text-blue-600 font-medium">

                    View Suggestion

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
            Expiry Prevention
          </h2>

          <p className="text-slate-500 mt-4">
            AI suggests discount campaigns for products nearing expiry.
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <h2 className="text-xl font-bold">
            Batch Optimization
          </h2>

          <p className="text-slate-500 mt-4">
            Relocating batches between warehouses may reduce waste significantly.
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <h2 className="text-xl font-bold">
            Inventory Safety
          </h2>

          <p className="text-slate-500 mt-4">
            92% of inventory currently falls under safe expiry conditions.
          </p>

        </div>

      </div>

    </div>

  );

};

export default ExpiryBatchInsights;