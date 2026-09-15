const SupplierPurchaseOrders = () => {

  return (

    <div className="bg-white rounded-2xl p-6 shadow-sm">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Purchase Orders
        </h2>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-xl">
          + Create PO
        </button>

      </div>

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>
            <th className="p-4 text-left">PO No</th>
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-left">Amount</th>
            <th className="p-4 text-left">Expected Date</th>
            <th className="p-4 text-left">Status</th>
          </tr>

        </thead>

        <tbody>

          <tr className="border-b">

            <td className="p-4">PO-10048</td>
            <td className="p-4">20 Jun 2025</td>
            <td className="p-4">₹1,25,000</td>
            <td className="p-4">25 Jun 2025</td>

            <td className="p-4">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                Approved
              </span>
            </td>

          </tr>

        </tbody>

      </table>

    </div>

  );

};

export default SupplierPurchaseOrders;