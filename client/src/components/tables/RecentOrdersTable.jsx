const orders = [
  {
    id: "PO-1021",
    supplier: "ABC Distributors",
    status: "Pending",
    amount: "₹12,000",
    date: "12 Jul 2025",
  },

  {
    id: "PO-1022",
    supplier: "Fresh Foods Ltd",
    status: "Completed",
    amount: "₹18,500",
    date: "13 Jul 2025",
  },

  {
    id: "PO-1023",
    supplier: "Metro Supplies",
    status: "In Transit",
    amount: "₹9,800",
    date: "14 Jul 2025",
  },
];

const RecentOrdersTable = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mt-8">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-semibold text-slate-900">
          Recent Orders
        </h2>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          View All
        </button>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-200 text-left">

              <th className="pb-4 text-slate-500 font-medium">
                Order ID
              </th>

              <th className="pb-4 text-slate-500 font-medium">
                Supplier
              </th>

              <th className="pb-4 text-slate-500 font-medium">
                Status
              </th>

              <th className="pb-4 text-slate-500 font-medium">
                Amount
              </th>

              <th className="pb-4 text-slate-500 font-medium">
                Date
              </th>

            </tr>

          </thead>

          <tbody>

            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-slate-100 hover:bg-slate-50"
              >

                <td className="py-4 font-medium text-slate-900">
                  {order.id}
                </td>

                <td className="py-4 text-slate-700">
                  {order.supplier}
                </td>

                <td className="py-4">

                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">

                    {order.status}

                  </span>

                </td>

                <td className="py-4 text-slate-700">
                  {order.amount}
                </td>

                <td className="py-4 text-slate-500">
                  {order.date}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default RecentOrdersTable;