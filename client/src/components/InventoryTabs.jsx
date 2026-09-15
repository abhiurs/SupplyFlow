import { NavLink } from "react-router-dom";

const InventoryTabs = ({
  openAddModal,
  hideButton = false,
}) => {

  return (

    <div className="bg-white rounded-3xl px-5 py-4 flex items-center justify-between shadow-sm mb-8 border border-slate-100">

      {/* LEFT TABS */}

      <div className="flex items-center gap-3">

        <NavLink
          to="/inventory/products"
          className={({ isActive }) =>
  `px-7 py-3 rounded-2xl font-medium transition-all duration-200 ${
    isActive
      ? "bg-blue-600 text-white shadow-md"
      : "text-slate-600 hover:bg-slate-100"
  }`
}
        >
          Products
        </NavLink>

        <NavLink
          to="/inventory/low-stock"
          className={({ isActive }) =>
  `px-7 py-3 rounded-2xl font-medium transition-all duration-200 ${
    isActive
      ? "bg-blue-600 text-white shadow-md"
      : "text-slate-600 hover:bg-slate-100"
  }`
}
        >
          Low Stock
        </NavLink>

        <NavLink
          to="/inventory/stock-count"
          className={({ isActive }) =>
  `px-7 py-3 rounded-2xl font-medium transition-all duration-200 ${
    isActive
      ? "bg-blue-600 text-white shadow-md"
      : "text-slate-600 hover:bg-slate-100"
  }`
}
        >
          Stock Count
        </NavLink>

      </div>

      {/* RIGHT BUTTON */}

      {!hideButton && (

  <button
    onClick={openAddModal}
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-sm transition"
  >
    + Add Product
  </button>

)}

    </div>

  );

};

export default InventoryTabs;