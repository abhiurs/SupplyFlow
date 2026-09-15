const PurchaseReport = () => {

  const purchaseOrders = [

    {
      po: "PO-10048",
      supplier: "Nestlé India Ltd.",
      date: "20 Jun 2025",
      amount: "₹1,25,000",
      status: "Approved",
      expected: "25 Jun 2025",
    },

    {
      po: "PO-10034",
      supplier: "Tata Consumer",
      date: "12 Jun 2025",
      amount: "₹75,000",
      status: "In Transit",
      expected: "18 Jun 2025",
    },

    {
      po: "PO-10011",
      supplier: "Hindustan Unilever",
      date: "05 Jun 2025",
      amount: "₹98,500",
      status: "Received",
      expected: "10 Jun 2025",
    },

    {
      po: "PO-09990",
      supplier: "ITC Limited",
      date: "28 May 2025",
      amount: "₹40,000",
      status: "Received",
      expected: "02 Jun 2025",
    },

  ];

  return (

    <div className="space-y-8">

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Purchase Report
          </h1>

          <p className="text-slate-500 mt-2">
            Analyze procurement and purchase order activities
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
            This Month Spend
          </p>

          <h1 className="text-4xl font-bold mt-3">
            ₹8,75,000
          </h1>

        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <p className="text-slate-500">
            Completed POs
          </p>

          <h1 className="text-4xl font-bold mt-3 text-green-600">
            42
          </h1>

        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <p className="text-slate-500">
            Pending POs
          </p>

          <h1 className="text-4xl font-bold mt-3 text-orange-500">
            6
          </h1>

        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <p className="text-slate-500">
            Average PO Value
          </p>

          <h1 className="text-4xl font-bold mt-3">
            ₹42,000
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

      {/* ANALYTICS SECTION */}

      <div className="grid grid-cols-2 gap-6">

        {/* MONTHLY SPEND */}

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Monthly Spend (₹)
          </h2>

          <div className="h-72 flex items-end justify-between gap-4">

            <div className="flex flex-col items-center">
              <div className="bg-blue-500 w-12 h-28 rounded-t-xl"></div>
              <p className="mt-2 text-sm">Jan</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-blue-500 w-12 h-36 rounded-t-xl"></div>
              <p className="mt-2 text-sm">Feb</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-blue-500 w-12 h-24 rounded-t-xl"></div>
              <p className="mt-2 text-sm">Mar</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-blue-500 w-12 h-40 rounded-t-xl"></div>
              <p className="mt-2 text-sm">Apr</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-blue-500 w-12 h-52 rounded-t-xl"></div>
              <p className="mt-2 text-sm">May</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-blue-500 w-12 h-44 rounded-t-xl"></div>
              <p className="mt-2 text-sm">Jun</p>
            </div>

          </div>

        </div>

        {/* SUPPLIER SPEND */}

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Spend by Supplier
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

          </div>

        </div>

      </div>

      {/* PURCHASE ORDERS TABLE */}

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-4 text-left">
                PO No
              </th>

              <th className="p-4 text-left">
                Supplier
              </th>

              <th className="p-4 text-left">
                PO Date
              </th>

              <th className="p-4 text-left">
                Amount
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Expected Date
              </th>

            </tr>

          </thead>

          <tbody>

            {purchaseOrders.map((order, index) => (

              <tr
                key={index}
                className="border-b hover:bg-slate-50"
              >

                <td className="p-4 font-medium">
                  {order.po}
                </td>

                <td className="p-4">
                  {order.supplier}
                </td>

                <td className="p-4">
                  {order.date}
                </td>

                <td className="p-4">
                  {order.amount}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium

                    ${
                      order.status === "Approved"
                        ? "bg-blue-100 text-blue-700"

                        : order.status === "Received"
                        ? "bg-green-100 text-green-700"

                        : "bg-orange-100 text-orange-700"
                    }
                    `}
                  >
                    {order.status}
                  </span>

                </td>

                <td className="p-4">
                  {order.expected}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

        {/* PAGINATION */}

        <div className="flex justify-between items-center p-5">

          <p className="text-slate-500">
            Showing 1 to 4 of 42 purchase orders
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

export default PurchaseReport;