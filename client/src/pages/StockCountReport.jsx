const StockCountReport = () => {

  const stockCounts = [

    {
      countId: "SC-1001",
      warehouse: "Main Warehouse",
      date: "20 Jun 2025",
      countedBy: "Rahul Sharma",
      products: 125,
      variance: "+2 Units",
      status: "Completed",
    },

    {
      countId: "SC-1002",
      warehouse: "Mumbai Warehouse",
      date: "18 Jun 2025",
      countedBy: "Amit Verma",
      products: 98,
      variance: "-5 Units",
      status: "Completed",
    },

    {
      countId: "SC-1003",
      warehouse: "Bangalore Warehouse",
      date: "16 Jun 2025",
      countedBy: "Kiran Reddy",
      products: 110,
      variance: "+1 Unit",
      status: "Pending Review",
    },

    {
      countId: "SC-1004",
      warehouse: "Chennai Warehouse",
      date: "14 Jun 2025",
      countedBy: "Suresh Babu",
      products: 87,
      variance: "0",
      status: "Completed",
    },

  ];

  return (

    <div className="space-y-8">

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Stock Count Report
          </h1>

          <p className="text-slate-500 mt-2">
            Track stock audits and inventory count variances
          </p>

        </div>

        <div className="flex gap-3">

          <button className="border px-5 py-3 rounded-xl bg-white">
            Export PDF
          </button>

          <button className="bg-blue-600 text-white px-5 py-3 rounded-xl">
            Export Excel
          </button>

        </div>

      </div>

      {/* KPI CARDS */}

      <div className="grid grid-cols-4 gap-5">

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <p className="text-slate-500">
            Total Counts
          </p>

          <h1 className="text-4xl font-bold mt-3">
            24
          </h1>

        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <p className="text-slate-500">
            Variance Detected
          </p>

          <h1 className="text-4xl font-bold mt-3 text-orange-500">
            18 Units
          </h1>

        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <p className="text-slate-500">
            Completed Audits
          </p>

          <h1 className="text-4xl font-bold mt-3 text-green-600">
            21
          </h1>

        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <p className="text-slate-500">
            Pending Reviews
          </p>

          <h1 className="text-4xl font-bold mt-3 text-red-500">
            3
          </h1>

        </div>

      </div>

      {/* FILTERS */}

      <div className="bg-white rounded-2xl p-5 shadow-sm">

        <div className="grid grid-cols-5 gap-4">

          <input
            type="text"
            placeholder="Date Range"
            className="border rounded-xl px-4 py-3 outline-none"
          />

          <select className="border rounded-xl px-4 py-3">

            <option>
              Warehouse: All
            </option>

          </select>

          <select className="border rounded-xl px-4 py-3">

            <option>
              Status: All
            </option>

          </select>

          <button className="bg-blue-600 text-white rounded-xl">
            Apply Filters
          </button>

          <button className="border rounded-xl">
            Clear
          </button>

        </div>

      </div>

      {/* ANALYTICS SECTION */}

      <div className="grid grid-cols-2 gap-6">

        {/* COUNT BY WAREHOUSE */}

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Counts by Warehouse
          </h2>

          <div className="space-y-6">

            <div>

              <div className="flex justify-between mb-2">

                <p>Main Warehouse</p>

                <p>125 Counts</p>

              </div>

              <div className="w-full bg-slate-200 h-4 rounded-full">
                <div className="bg-blue-600 h-4 rounded-full w-[90%]"></div>
              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <p>Mumbai Warehouse</p>

                <p>98 Counts</p>

              </div>

              <div className="w-full bg-slate-200 h-4 rounded-full">
                <div className="bg-green-500 h-4 rounded-full w-[75%]"></div>
              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <p>Bangalore Warehouse</p>

                <p>110 Counts</p>

              </div>

              <div className="w-full bg-slate-200 h-4 rounded-full">
                <div className="bg-orange-500 h-4 rounded-full w-[82%]"></div>
              </div>

            </div>

          </div>

        </div>

        {/* VARIANCE SUMMARY */}

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Variance Summary
          </h2>

          <div className="space-y-5">

            <div className="flex justify-between">

              <p>Positive Variance</p>

              <p className="font-bold text-green-600">
                +8 Units
              </p>

            </div>

            <div className="w-full bg-slate-200 h-4 rounded-full">
              <div className="bg-green-500 h-4 rounded-full w-[65%]"></div>
            </div>

            <div className="flex justify-between">

              <p>Negative Variance</p>

              <p className="font-bold text-red-500">
                -10 Units
              </p>

            </div>

            <div className="w-full bg-slate-200 h-4 rounded-full">
              <div className="bg-red-500 h-4 rounded-full w-[75%]"></div>
            </div>

            <div className="flex justify-between">

              <p>Accuracy Rate</p>

              <p className="font-bold text-blue-600">
                98%
              </p>

            </div>

            <div className="w-full bg-slate-200 h-4 rounded-full">
              <div className="bg-blue-500 h-4 rounded-full w-[98%]"></div>
            </div>

          </div>

        </div>

      </div>

      {/* TABLE */}

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-4 text-left">
                Count ID
              </th>

              <th className="p-4 text-left">
                Warehouse
              </th>

              <th className="p-4 text-left">
                Count Date
              </th>

              <th className="p-4 text-left">
                Counted By
              </th>

              <th className="p-4 text-left">
                Products
              </th>

              <th className="p-4 text-left">
                Variance
              </th>

              <th className="p-4 text-left">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {stockCounts.map((count, index) => (

              <tr
                key={index}
                className="border-b hover:bg-slate-50"
              >

                <td className="p-4 font-medium">
                  {count.countId}
                </td>

                <td className="p-4">
                  {count.warehouse}
                </td>

                <td className="p-4">
                  {count.date}
                </td>

                <td className="p-4">
                  {count.countedBy}
                </td>

                <td className="p-4">
                  {count.products}
                </td>

                <td className="p-4">
                  {count.variance}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium

                    ${
                      count.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }
                    `}
                  >
                    {count.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

        {/* PAGINATION */}

        <div className="flex justify-between items-center p-5">

          <p className="text-slate-500">
            Showing 1 to 4 of 24 stock counts
          </p>

          <div className="flex gap-2">

            <button className="w-10 h-10 rounded-lg bg-blue-600 text-white">
              1
            </button>

            <button className="w-10 h-10 rounded-lg border">
              2
            </button>

            <button className="w-10 h-10 rounded-lg border">
              3
            </button>

          </div>

        </div>

      </div>

    </div>

  );

};

export default StockCountReport;