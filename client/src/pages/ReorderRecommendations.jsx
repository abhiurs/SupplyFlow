const ReorderRecommendations = () => {

  const reorderProducts = [

    {
      product: "Maggi Noodles",
      current: "42 pcs",
      reorder: "200 pcs",
      supplier: "Nestlé India",
      urgency: "Critical",
      cost: "₹12,500",
    },

    {
      product: "Sunflower Oil",
      current: "18 pcs",
      reorder: "120 pcs",
      supplier: "Emami Ltd.",
      urgency: "High",
      cost: "₹18,200",
    },

    {
      product: "Tata Salt",
      current: "30 pcs",
      reorder: "150 pcs",
      supplier: "Tata Consumer",
      urgency: "Medium",
      cost: "₹6,800",
    },

    {
      product: "Red Label Tea",
      current: "22 pcs",
      reorder: "90 pcs",
      supplier: "HUL",
      urgency: "High",
      cost: "₹9,400",
    },

  ];

  return (

    <div className="space-y-8">

      {/* HEADER */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            Reorder Recommendations
          </h1>

          <p className="text-slate-500 mt-2">
            AI-powered procurement and stock replenishment suggestions
          </p>

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition">

          Generate Purchase Orders

        </button>

      </div>

      {/* TOP CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-slate-500">
            Critical Reorders
          </p>

          <h1 className="text-5xl font-bold mt-3 text-red-500">
            8
          </h1>

          <p className="text-red-500 mt-3 text-sm">
            Immediate action required
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-slate-500">
            AI Savings
          </p>

          <h1 className="text-5xl font-bold mt-3 text-green-500">
            ₹42K
          </h1>

          <p className="text-green-500 mt-3 text-sm">
            Bulk order optimization
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-slate-500">
            Suggested Orders
          </p>

          <h1 className="text-5xl font-bold mt-3 text-blue-500">
            24
          </h1>

          <p className="text-blue-500 mt-3 text-sm">
            AI generated reorder plans
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-slate-500">
            Supplier Optimization
          </p>

          <h1 className="text-5xl font-bold mt-3 text-purple-500">
            96%
          </h1>

          <p className="text-purple-500 mt-3 text-sm">
            Best supplier accuracy
          </p>

        </div>

      </div>

      {/* RECOMMENDATION TABLE */}

      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <div className="flex justify-between items-center mb-6">

          <div>

            <h2 className="text-2xl font-bold">
              AI Reorder Suggestions
            </h2>

            <p className="text-slate-500 mt-1">
              Recommended procurement actions based on stock trends
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
                Current Stock
              </th>

              <th className="text-left p-4">
                Recommended Qty
              </th>

              <th className="text-left p-4">
                Supplier
              </th>

              <th className="text-left p-4">
                Urgency
              </th>

              <th className="text-left p-4">
                Estimated Cost
              </th>

              <th className="text-left p-4">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {reorderProducts.map((item, index) => (

              <tr
                key={index}
                className="border-b hover:bg-slate-50"
              >

                <td className="p-4 font-medium">
                  {item.product}
                </td>

                <td className="p-4">
                  {item.current}
                </td>

                <td className="p-4">
                  {item.reorder}
                </td>

                <td className="p-4">
                  {item.supplier}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.urgency === "Critical"
                        ? "bg-red-100 text-red-600"
                        : item.urgency === "High"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >

                    {item.urgency}

                  </span>

                </td>

                <td className="p-4">
                  {item.cost}
                </td>

                <td className="p-4">

                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition">

                    Create PO

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
            AI Bulk Ordering
          </h2>

          <p className="text-slate-500 mt-4">
            Combining supplier orders could reduce procurement cost by 12%.
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <h2 className="text-xl font-bold">
            Seasonal Demand Alert
          </h2>

          <p className="text-slate-500 mt-4">
            Festival demand predicted to increase snack sales significantly.
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <h2 className="text-xl font-bold">
            Supplier Recommendation
          </h2>

          <p className="text-slate-500 mt-4">
            Nestlé supplier currently has fastest delivery performance.
          </p>

        </div>

      </div>

    </div>

  );

};

export default ReorderRecommendations;