const WarehouseReceiving = () => {

  const receipts = [

    {
      grn: "GRN-1023",
      supplier: "Nestlé India Ltd.",
      po: "PO-10048",
      date: "20 Jun 2025",
      items: 5,
      value: "₹1,25,000",
    },

    {
      grn: "GRN-1022",
      supplier: "HUL",
      po: "PO-10033",
      date: "18 Jun 2025",
      items: 6,
      value: "₹95,000",
    },

    {
      grn: "GRN-1021",
      supplier: "ITC Limited",
      po: "PO-10011",
      date: "15 Jun 2025",
      items: 4,
      value: "₹80,000",
    },

    {
      grn: "GRN-1020",
      supplier: "Tata Consumer",
      po: "PO-09990",
      date: "12 Jun 2025",
      items: 3,
      value: "₹40,000",
    },

    {
      grn: "GRN-1019",
      supplier: "Britannia Industries",
      po: "PO-09792",
      date: "10 Jun 2025",
      items: 5,
      value: "₹75,500",
    },

  ];

  return (

    <div className="bg-white rounded-2xl p-6 shadow-sm">

      {/* TOP BAR */}

      <div className="flex justify-between items-center mb-6">

        <div className="flex gap-4">

          <select className="border rounded-xl px-4 py-3">
            <option>Date Range</option>
          </select>

          <select className="border rounded-xl px-4 py-3">
            <option>Supplier: All</option>
          </select>

          <input
            type="text"
            placeholder="Search GRN / PO"
            className="border rounded-xl px-4 py-3 w-72"
          />

        </div>

        <button className="border px-5 py-3 rounded-xl hover:bg-slate-100">
          Export
        </button>

      </div>

      {/* TABLE */}

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>
            <th className="p-4 text-left">GRN No</th>
            <th className="p-4 text-left">Supplier</th>
            <th className="p-4 text-left">PO No</th>
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-left">Items</th>
            <th className="p-4 text-left">Value</th>
          </tr>

        </thead>

        <tbody>

          {receipts.map((receipt, index) => (

            <tr
              key={index}
              className="border-b hover:bg-slate-50 transition"
            >

              <td className="p-4 font-semibold text-blue-600">
                {receipt.grn}
              </td>

              <td className="p-4">
                {receipt.supplier}
              </td>

              <td className="p-4">
                {receipt.po}
              </td>

              <td className="p-4">
                {receipt.date}
              </td>

              <td className="p-4">
                {receipt.items}
              </td>

              <td className="p-4 font-semibold">
                {receipt.value}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

      {/* FOOTER */}

      <div className="flex justify-between items-center mt-6">

        <p className="text-slate-500">
          Showing 1 to 5 of 28 records
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

          <button className="w-10 h-10 rounded-lg border">
            4
          </button>

        </div>

      </div>

    </div>

  );

};

export default WarehouseReceiving;