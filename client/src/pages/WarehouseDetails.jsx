import { Link, Outlet, useParams, useLocation} from "react-router-dom";

const WarehouseDetails = () => {

    const location = useLocation();
    const pathname = location.pathname;

  const { id } = useParams();

  const warehouses = JSON.parse(
    localStorage.getItem("warehouses")
  ) || [];

  const warehouse = warehouses.find(
    (item) => item.id === Number(id)
  );

  if (!warehouse) {

    return (
      <div className="p-10 text-2xl font-bold">
        Warehouse not found
      </div>
    );

  }

  return (

    <div className="space-y-6">

      {/* HEADER */}

      <div className="bg-white rounded-2xl p-6 shadow-sm border">

        <div className="flex justify-between items-start">

          <div className="flex gap-6">

            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200"
              alt=""
              className="w-56 h-32 rounded-xl object-cover"
            />

            <div>

              <h1 className="text-4xl font-bold">
                {warehouse.name}
              </h1>

              <p className="text-slate-500 mt-2">
                Primary warehouse
              </p>

              <span className="inline-block mt-4 bg-green-100 text-green-700 px-4 py-1 rounded-full">
                {warehouse.status}
              </span>

            </div>

          </div>

          <button className="border px-5 py-3 rounded-xl hover:bg-slate-100">
            Edit Warehouse
          </button>

        </div>

      </div>

      {/* TABS */}

      <div className="bg-white rounded-2xl p-4 shadow-sm flex gap-4">

  <Link
    to={`/warehouses/${id}/overview`}
    className={`px-6 py-3 rounded-xl transition ${
      pathname.includes("/overview")
        ? "bg-blue-600 text-white"
        : "hover:bg-slate-100"
    }`}
  >
    Overview
  </Link>

  <Link
    to={`/warehouses/${id}/inventory`}
    className={`px-6 py-3 rounded-xl transition ${
      pathname.includes("/inventory")
        ? "bg-blue-600 text-white"
        : "hover:bg-slate-100"
    }`}
  >
    Inventory
  </Link>

  <Link
    to={`/warehouses/${id}/transfers`}
    className={`px-6 py-3 rounded-xl transition ${
      pathname.includes("/transfers")
        ? "bg-blue-600 text-white"
        : "hover:bg-slate-100"
    }`}
  >
    Stock Transfers
  </Link>

  <Link
    to={`/warehouses/${id}/receiving`}
    className={`px-6 py-3 rounded-xl transition ${
      pathname.includes("/receiving")
        ? "bg-blue-600 text-white"
        : "hover:bg-slate-100"
    }`}
  >
    Receiving History
  </Link>

  <Link
    to={`/warehouses/${id}/activity`}
    className={`px-6 py-3 rounded-xl transition ${
      pathname.includes("/activity")
        ? "bg-blue-600 text-white"
        : "hover:bg-slate-100"
    }`}
  >
    Activity Log
  </Link>

</div>

      {/* SUBPAGE */}

      <Outlet />

    </div>

  );

};

export default WarehouseDetails;