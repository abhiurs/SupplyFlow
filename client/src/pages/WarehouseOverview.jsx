const WarehouseOverview = () => {

  return (

    <div className="grid grid-cols-12 gap-6">

      {/* LEFT CARD */}

      <div className="col-span-3 bg-white rounded-2xl p-6 shadow-sm border">

        <h2 className="text-2xl font-bold mb-6">
          Warehouse Info
        </h2>

        <div className="space-y-5">

          <div>
            <p className="text-slate-500 text-sm">
              Code
            </p>
            <h3 className="font-semibold">
              WH-001
            </h3>
          </div>

          <div>
            <p className="text-slate-500 text-sm">
              Location
            </p>
            <h3 className="font-semibold">
              Hyderabad, Telangana
            </h3>
          </div>

          <div>
            <p className="text-slate-500 text-sm">
              Manager
            </p>
            <h3 className="font-semibold">
              Rahul Sharma
            </h3>
          </div>

          <div>
            <p className="text-slate-500 text-sm">
              Capacity
            </p>
            <h3 className="font-semibold">
              10,000 Units
            </h3>
          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div className="col-span-9 space-y-6">

        {/* CARDS */}

        <div className="grid grid-cols-4 gap-4">

          <div className="bg-white rounded-2xl p-5 border shadow-sm">
            <p className="text-slate-500">
              Products Stored
            </p>
            <h2 className="text-4xl font-bold mt-2">
              245
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-5 border shadow-sm">
            <p className="text-slate-500">
              Current Stock
            </p>
            <h2 className="text-4xl font-bold mt-2">
              28,540
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-5 border shadow-sm">
            <p className="text-slate-500">
              Pending Receipts
            </p>
            <h2 className="text-4xl font-bold mt-2">
              3
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-5 border shadow-sm">
            <p className="text-slate-500">
              Pending Transfers
            </p>
            <h2 className="text-4xl font-bold mt-2">
              2
            </h2>
          </div>

        </div>

        {/* CAPACITY */}

        <div className="bg-white rounded-2xl p-6 border shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Capacity Overview
          </h2>

          <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">

            <div className="w-[82%] h-full bg-blue-600 rounded-full" />

          </div>

          <div className="flex justify-between mt-4">

            <div>
              <p className="text-slate-500">
                Total Capacity
              </p>
              <h3 className="font-bold">
                10,000 Units
              </h3>
            </div>

            <div>
              <p className="text-slate-500">
                Occupied
              </p>
              <h3 className="font-bold">
                8,200 Units
              </h3>
            </div>

            <div>
              <p className="text-slate-500">
                Available
              </p>
              <h3 className="font-bold">
                1,800 Units
              </h3>
            </div>

            <div>
              <p className="text-slate-500">
                Utilization
              </p>
              <h3 className="font-bold text-green-600">
                82%
              </h3>
            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default WarehouseOverview;