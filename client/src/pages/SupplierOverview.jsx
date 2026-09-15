import { useParams, useNavigate } from "react-router-dom";

const SupplierOverview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

const suppliers = JSON.parse(
  localStorage.getItem("suppliers")
) || [];

const supplier = suppliers.find(
  (item) => item.id === Number(id)
);

if (!supplier) {

  return (
    <div className="p-10 text-xl font-semibold">
      Supplier not found
    </div>
  );

}



  return (

    <div className="space-y-4">

    <button
      onClick={() => navigate("/suppliers")}
      className="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition"
    >
      ← Back to Suppliers
    </button>

    <div className="grid grid-cols-12 gap-6">

      {/* LEFT SIDE */}

      <div className="col-span-3 bg-white rounded-2xl p-6 shadow-sm">

        <div className="flex flex-col items-center text-center">

          <div className="w-24 h-24 rounded-full bg-red-500 flex items-center justify-center text-white text-3xl font-bold mb-4">
            {supplier.name.charAt(0)}
          </div>

          <h2 className="text-2xl font-bold">
            {supplier.name}
          </h2>

          <p className="text-slate-500">
            {supplier.category}
          </p>

          <span className="mt-3 bg-green-100 text-green-700 px-4 py-1 rounded-full">
            {supplier.status}
          </span>

        </div>

        <div className="mt-8 space-y-5">

          <div>
            <p className="text-slate-500 text-sm">
              Contact Person
            </p>
            <h3 className="font-semibold">
              {supplier.contact}
            </h3>
          </div>

          <div>
            <p className="text-slate-500 text-sm">
              Phone
            </p>
            <h3 className="font-semibold">
              {supplier.phone}
            </h3>
          </div>

          <div>
            <p className="text-slate-500 text-sm">
              Email
            </p>
            <h3 className="font-semibold">
              {supplier.email}
            </h3>
          </div>

          <div>
            <p className="text-slate-500 text-sm">
              Address
            </p>
            <h3 className="font-semibold">
              {supplier.city}, {supplier.state}
            </h3>
          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="col-span-9 space-y-6">

        {/* CARDS */}

        <div className="grid grid-cols-4 gap-4">

          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-slate-500">Products</p>
            <h2 className="text-4xl font-bold mt-2">{supplier.products}</h2>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-slate-500">Active POs</p>
            <h2 className="text-4xl font-bold mt-2">{supplier.activePOs}</h2>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-slate-500">Outstanding</p>
            <h2 className="text-4xl font-bold mt-2">{supplier.outstanding}</h2>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-slate-500">Lead Time</p>
            <h2 className="text-4xl font-bold mt-2">{supplier.leadTime}</h2>
          </div>

        </div>

        {/* PURCHASE ORDERS */}

        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Recent Purchase Orders
          </h2>

          <table className="w-full">

            <thead className="bg-slate-100">

              <tr>
                <th className="p-4 text-left">PO No</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Amount</th>
                <th className="p-4 text-left">Status</th>
              </tr>

            </thead>

            <tbody>

              <tr className="border-b">

                <td className="p-4">PO-10048</td>
                <td className="p-4">20 Jun 2025</td>
                <td className="p-4">₹1,25,000</td>

                <td className="p-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    Approved
                  </span>
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>

    </div>

  );

};

export default SupplierOverview;