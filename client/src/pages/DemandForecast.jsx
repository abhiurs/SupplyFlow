const DemandForecast = () => {

  const forecastData = [

    {
      product: "Maggi Noodles",
      current: "520 pcs",
      predicted: "780 pcs",
      growth: "+50%",
    },

    {
      product: "Tata Salt",
      current: "310 pcs",
      predicted: "420 pcs",
      growth: "+35%",
    },

    {
      product: "Sunflower Oil",
      current: "180 pcs",
      predicted: "240 pcs",
      growth: "+28%",
    },

    {
      product: "Red Label Tea",
      current: "260 pcs",
      predicted: "390 pcs",
      growth: "+40%",
    },

  ];

  return (

    <div className="space-y-8">

      {/* HEADER */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            Demand Forecast
          </h1>

          <p className="text-slate-500 mt-2">
            AI-powered demand prediction and sales forecasting
          </p>

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition">
          Export Forecast
        </button>

      </div>

      {/* TOP CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-slate-500">
            Forecast Accuracy
          </p>

          <h1 className="text-5xl font-bold mt-3 text-green-500">
            94%
          </h1>

          <p className="text-green-500 mt-3 text-sm">
            AI prediction accuracy
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-slate-500">
            Predicted Revenue
          </p>

          <h1 className="text-5xl font-bold mt-3 text-blue-500">
            ₹8.4L
          </h1>

          <p className="text-blue-500 mt-3 text-sm">
            Expected next month
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-slate-500">
            High Demand Products
          </p>

          <h1 className="text-5xl font-bold mt-3 text-orange-500">
            18
          </h1>

          <p className="text-orange-500 mt-3 text-sm">
            Growing demand trend
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-slate-500">
            Seasonal Impact
          </p>

          <h1 className="text-5xl font-bold mt-3 text-purple-500">
            +22%
          </h1>

          <p className="text-purple-500 mt-3 text-sm">
            Festival sales boost
          </p>

        </div>

      </div>

      {/* FORECAST GRAPH */}

      <div className="bg-white rounded-3xl p-8 shadow-sm">

        <div className="flex justify-between items-center mb-8">

          <div>

            <h2 className="text-2xl font-bold">
              Monthly Forecast Trend
            </h2>

            <p className="text-slate-500 mt-1">
              Predicted demand growth over upcoming months
            </p>

          </div>

          <button className="border border-slate-200 px-5 py-3 rounded-2xl">
            Last 6 Months
          </button>

        </div>

        <div className="h-96 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-400 text-lg">

          AI Forecast Graph Here

        </div>

      </div>

      {/* PREDICTION TABLE */}

      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <div className="flex justify-between items-center mb-6">

          <div>

            <h2 className="text-2xl font-bold">
              Product Demand Predictions
            </h2>

            <p className="text-slate-500 mt-1">
              AI-generated inventory demand forecast
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
                Current Demand
              </th>

              <th className="text-left p-4">
                Predicted Demand
              </th>

              <th className="text-left p-4">
                Growth
              </th>

            </tr>

          </thead>

          <tbody>

            {forecastData.map((item, index) => (

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
                  {item.predicted}
                </td>

                <td className="p-4">

                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">

                    {item.growth}

                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* AI INSIGHTS */}

      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <h2 className="text-2xl font-bold mb-6">
          AI Forecast Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="border rounded-2xl p-5">

            <h3 className="font-semibold text-lg">
              Festival Demand Surge
            </h3>

            <p className="text-slate-500 mt-3">
              Snacks and beverages expected to increase by 32%.
            </p>

          </div>

          <div className="border rounded-2xl p-5">

            <h3 className="font-semibold text-lg">
              Supplier Delay Risk
            </h3>

            <p className="text-slate-500 mt-3">
              AI predicts possible delays from 2 suppliers.
            </p>

          </div>

          <div className="border rounded-2xl p-5">

            <h3 className="font-semibold text-lg">
              Overstock Warning
            </h3>

            <p className="text-slate-500 mt-3">
              Cooking oil inventory may exceed required stock.
            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default DemandForecast;