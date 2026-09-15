const SupplierReport = () => {

  const suppliers = [

    {
      name: "Nestlé India Ltd.",
      orders: 18,
      spend: "₹2,25,000",
      leadTime: "4 Days",
      rating: "★★★★★",
      outstanding: "₹1,25,000",
    },

    {
      name: "Hindustan Unilever",
      orders: 15,
      spend: "₹1,80,000",
      leadTime: "5 Days",
      rating: "★★★★☆",
      outstanding: "₹80,000",
    },

    {
      name: "ITC Limited",
      orders: 14,
      spend: "₹1,50,000",
      leadTime: "6 Days",
      rating: "★★★★☆",
      outstanding: "₹70,000",
    },

    {
      name: "Tata Consumer Products",
      orders: 10,
      spend: "₹1,30,000",
      leadTime: "4 Days",
      rating: "★★★★☆",
      outstanding: "₹40,000",
    },

  ];

  return (

    <div className="space-y-8">

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Supplier Report
          </h1>

          <p className="text-slate-500 mt-2">
            Analyze supplier performance and procurement spending
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
            Total Suppliers
          </p>

          <h1 className="text-4xl font-bold mt-3">
            48
          </h1>

        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <p className="text-slate-500">
            Total Spend
          </p>

          <h1 className="text-4xl font-bold mt-3">
            ₹26,40,000
          </h1>

        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <p className="text-slate-500">
            Outstanding Bills
          </p>

          <h1 className="text-4xl font-bold mt-3 text-orange-500">
            ₹3,45,000
          </h1>

        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <p className="text-slate-500">
            Average Lead Time
          </p>

          <h1 className="text-4xl font-bold mt-3">
            5 Days
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
              Supplier: All
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

      {/* ANALYTICS */}

      <div className="grid grid-cols-2 gap-6">

        {/* SPEND BY SUPPLIER */}

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Top Suppliers by Spend
          </h2>

          <div className="space-y-6">

            <div>

              <div className="flex justify-between mb-2">

                <p>Nestlé India Ltd.</p>

                <p>₹2,25,000</p>

              </div>

              <div className="w-full bg-slate-200 h-4 rounded-full">
                <div className="bg-blue-600 h-4 rounded-full w-[90%]"></div>
              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <p>Hindustan Unilever</p>

                <p>₹1,80,000</p>

              </div>

              <div className="w-full bg-slate-200 h-4 rounded-full">
                <div className="bg-green-500 h-4 rounded-full w-[75%]"></div>
              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <p>ITC Limited</p>

                <p>₹1,50,000</p>

              </div>

              <div className="w-full bg-slate-200 h-4 rounded-full">
                <div className="bg-orange-500 h-4 rounded-full w-[60%]"></div>
              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <p>Tata Consumer</p>

                <p>₹1,30,000</p>

              </div>

              <div className="w-full bg-slate-200 h-4 rounded-full">
                <div className="bg-purple-500 h-4 rounded-full w-[50%]"></div>
              </div>

            </div>

          </div>

        </div>

        {/* SUPPLIER PERFORMANCE */}

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Supplier Performance
          </h2>

          <div className="space-y-5">

            <div className="flex justify-between">

              <p>On-Time Delivery</p>

              <p className="font-bold text-green-600">
                92%
              </p>

            </div>

            <div className="w-full bg-slate-200 h-4 rounded-full">
              <div className="bg-green-500 h-4 rounded-full w-[92%]"></div>
            </div>

            <div className="flex justify-between">

              <p>Quality Rating</p>

              <p className="font-bold text-blue-600">
                4.6 / 5
              </p>

            </div>

            <div className="w-full bg-slate-200 h-4 rounded-full">
              <div className="bg-blue-500 h-4 rounded-full w-[85%]"></div>
            </div>

            <div className="flex justify-between">

              <p>Lead Time Efficiency</p>

              <p className="font-bold text-orange-500">
                88%
              </p>

            </div>

            <div className="w-full bg-slate-200 h-4 rounded-full">
              <div className="bg-orange-500 h-4 rounded-full w-[88%]"></div>
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
                Supplier
              </th>

              <th className="p-4 text-left">
                Orders
              </th>

              <th className="p-4 text-left">
                Total Spend
              </th>

              <th className="p-4 text-left">
                Avg Lead Time
              </th>

              <th className="p-4 text-left">
                Rating
              </th>

              <th className="p-4 text-left">
                Outstanding
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
                  {supplier.orders}
                </td>

                <td className="p-4">
                  {supplier.spend}
                </td>

                <td className="p-4">
                  {supplier.leadTime}
                </td>

                <td className="p-4 text-yellow-500">
                  {supplier.rating}
                </td>

                <td className="p-4">
                  {supplier.outstanding}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

        {/* PAGINATION */}

        <div className="flex justify-between items-center p-5">

          <p className="text-slate-500">
            Showing 1 to 4 of 48 suppliers
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

export default SupplierReport;