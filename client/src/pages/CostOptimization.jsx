const CostOptimization = () => {

  const supplierComparison = [

    {
      supplier: "Nestlé India",
      avgCost: "₹1,25,000",
      delivery: "96%",
      savings: "₹12,000",
    },

    {
      supplier: "Tata Consumer",
      avgCost: "₹98,000",
      delivery: "92%",
      savings: "₹8,500",
    },

    {
      supplier: "Emami Ltd.",
      avgCost: "₹1,42,000",
      delivery: "87%",
      savings: "₹5,000",
    },

    {
      supplier: "HUL",
      avgCost: "₹1,65,000",
      delivery: "82%",
      savings: "₹2,500",
    },

  ];

  return (

    <div className="space-y-8">

      {/* HEADER */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            Cost Optimization
          </h1>

          <p className="text-slate-500 mt-2">
            AI-powered procurement and operational cost optimization
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
            Potential Savings
          </p>

          <h1 className="text-5xl font-bold mt-3 text-green-500">
            ₹42K
          </h1>

          <p className="text-green-500 mt-3 text-sm">
            Monthly AI savings prediction
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-slate-500">
            Overstock Loss
          </p>

          <h1 className="text-5xl font-bold mt-3 text-red-500">
            ₹18K
          </h1>

          <p className="text-red-500 mt-3 text-sm">
            Recoverable inventory waste
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-slate-500">
            Logistics Efficiency
          </p>

          <h1 className="text-5xl font-bold mt-3 text-blue-500">
            91%
          </h1>

          <p className="text-blue-500 mt-3 text-sm">
            Optimized delivery routes
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-slate-500">
            Procurement Accuracy
          </p>

          <h1 className="text-5xl font-bold mt-3 text-purple-500">
            94%
          </h1>

          <p className="text-purple-500 mt-3 text-sm">
            AI procurement prediction
          </p>

        </div>

      </div>

      {/* COST ANALYTICS */}

      <div className="bg-white rounded-3xl p-8 shadow-sm">

        <div className="flex justify-between items-center mb-8">

          <div>

            <h2 className="text-2xl font-bold">
              Cost Optimization Analytics
            </h2>

            <p className="text-slate-500 mt-1">
              AI-generated procurement and logistics optimization insights
            </p>

          </div>

          <button className="border border-slate-200 px-5 py-3 rounded-2xl">

            Last 12 Months

          </button>

        </div>

        <div className="h-96 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-400 text-lg">

          Cost Optimization Graph Here

        </div>

      </div>

      {/* SUPPLIER COMPARISON */}

      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <div className="flex justify-between items-center mb-6">

          <div>

            <h2 className="text-2xl font-bold">
              Supplier Cost Comparison
            </h2>

            <p className="text-slate-500 mt-1">
              AI supplier pricing and savings analysis
            </p>

          </div>

          <button className="border border-slate-200 px-5 py-3 rounded-2xl">

            Compare Suppliers

          </button>

        </div>

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="text-left p-4">
                Supplier
              </th>

              <th className="text-left p-4">
                Avg Procurement Cost
              </th>

              <th className="text-left p-4">
                Delivery Efficiency
              </th>

              <th className="text-left p-4">
                Estimated Savings
              </th>

              <th className="text-left p-4">
                AI Recommendation
              </th>

            </tr>

          </thead>

          <tbody>

            {supplierComparison.map((supplier, index) => (

              <tr
                key={index}
                className="border-b hover:bg-slate-50"
              >

                <td className="p-4 font-medium">
                  {supplier.supplier}
                </td>

                <td className="p-4">
                  {supplier.avgCost}
                </td>

                <td className="p-4">
                  {supplier.delivery}
                </td>

                <td className="p-4 text-green-600 font-semibold">
                  {supplier.savings}
                </td>

                <td className="p-4">

                  <button className="text-blue-600 font-medium">

                    View Analysis

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
            Bulk Procurement Savings
          </h2>

          <p className="text-slate-500 mt-4">
            AI predicts 12% procurement savings through consolidated supplier orders.
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <h2 className="text-xl font-bold">
            Logistics Optimization
          </h2>

          <p className="text-slate-500 mt-4">
            Route optimization may reduce transportation costs by ₹15,000/month.
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <h2 className="text-xl font-bold">
            Inventory Waste Reduction
          </h2>

          <p className="text-slate-500 mt-4">
            Reducing overstocked inventory can improve cash flow significantly.
          </p>

        </div>

      </div>

    </div>

  );

};

export default CostOptimization;