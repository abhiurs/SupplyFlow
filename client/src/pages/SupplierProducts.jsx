const SupplierProducts = () => {

  return (

    <div className="bg-white rounded-2xl p-6 shadow-sm">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Products Supplied
        </h2>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-xl">
          + Add Product Mapping
        </button>

      </div>

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>
            <th className="p-4 text-left">Product</th>
            <th className="p-4 text-left">SKU</th>
            <th className="p-4 text-left">Unit</th>
            <th className="p-4 text-left">Current Stock</th>
            <th className="p-4 text-left">Last Purchase</th>
          </tr>

        </thead>

        <tbody>

          <tr className="border-b">

            <td className="p-4">Maggi Noodles</td>
            <td className="p-4">MAGGI-70G</td>
            <td className="p-4">PCS</td>
            <td className="p-4">500</td>
            <td className="p-4">20 Jun 2025</td>

          </tr>

        </tbody>

      </table>

    </div>

  );

};

export default SupplierProducts;