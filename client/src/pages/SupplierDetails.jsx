import { NavLink, Outlet, useParams } from "react-router-dom";

const SupplierDetails = () => {

  const { id } = useParams();

  return (

    <div className="space-y-6">

      {/* TOP HEADER */}

      <div className="bg-white rounded-2xl p-6 shadow-sm flex justify-between items-center">

        <div className="flex items-center gap-5">

          <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl font-bold">
            N
          </div>

          <div>

            <h1 className="text-3xl font-bold">
              Nestlé India Ltd.
            </h1>

            <p className="text-slate-500">
              Food & Beverages
            </p>

          </div>

        </div>

        <div className="flex gap-4">

          <button className="border px-5 py-2 rounded-xl">
            Edit Supplier
          </button>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-xl">
            Create Purchase Order
          </button>

        </div>

      </div>

      {/* NAVIGATION */}

      <div className="bg-white rounded-2xl p-3 shadow-sm flex gap-3 mb-6">

  <NavLink
  to={`/suppliers/${id}/overview`}
  className={({ isActive }) =>
    `px-5 py-3 rounded-xl transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "hover:bg-slate-100 text-slate-700"
    }`
  }
>
  Overview
</NavLink>

  <NavLink
    to={`/suppliers/${id}/products`}
    className={({ isActive }) =>
      `px-5 py-3 rounded-xl transition ${
        isActive
          ? "bg-blue-600 text-white"
          : "hover:bg-slate-100 text-slate-700"
      }`
    }
  >
    Products
  </NavLink>

  <NavLink
    to={`/suppliers/${id}/purchase-orders`}
    className={({ isActive }) =>
    `px-5 py-3 rounded-xl transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "hover:bg-slate-100 text-slate-700"
    }`
  }
  >
    Purchase Orders
  </NavLink>

  <NavLink
    to={`/suppliers/${id}/bills-payments`}
    className={({ isActive }) =>
      `px-5 py-3 rounded-xl transition ${
        isActive
          ? "bg-blue-600 text-white"
          : "hover:bg-slate-100 text-slate-700"
      }`
    }
  >
    Bills & Payments
  </NavLink>

  <NavLink
    to={`/suppliers/${id}/performance`}
    className={({ isActive }) =>
      `px-5 py-3 rounded-xl transition ${
        isActive
          ? "bg-blue-600 text-white"
          : "hover:bg-slate-100 text-slate-700"
      }`
    }
  >
    Performance
  </NavLink>

  <NavLink
    to={`/suppliers/${id}/documents`}
    className={({ isActive }) =>
      `px-5 py-3 rounded-xl transition ${
        isActive
          ? "bg-blue-600 text-white"
          : "hover:bg-slate-100 text-slate-700"
      }`
    }
  >
    Documents
  </NavLink>

</div>

      <Outlet />

    </div>

  );

};

export default SupplierDetails;