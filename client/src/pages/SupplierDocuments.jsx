const SupplierDocuments = () => {

  return (

    <div className="bg-white rounded-2xl p-6 shadow-sm">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Documents
        </h2>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-xl">
          Upload Document
        </button>

      </div>

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>
            <th className="p-4 text-left">Document Name</th>
            <th className="p-4 text-left">Type</th>
            <th className="p-4 text-left">Uploaded On</th>
            <th className="p-4 text-left">Uploaded By</th>
          </tr>

        </thead>

        <tbody>

          <tr className="border-b">

            <td className="p-4">GST Certificate</td>
            <td className="p-4">GST</td>
            <td className="p-4">15 Jan 2025</td>
            <td className="p-4">Admin</td>

          </tr>

        </tbody>

      </table>

    </div>

  );

};

export default SupplierDocuments;