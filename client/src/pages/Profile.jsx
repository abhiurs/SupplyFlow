import React from "react";

const Profile = () => {
  return (
    <div className="p-8">

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">

        <div className="flex items-center gap-6">

          <div className="w-24 h-24 rounded-full bg-indigo-600 text-white flex items-center justify-center text-4xl font-bold">
            A
          </div>

          <div>
            <h1 className="text-4xl font-bold text-slate-800">
              Abhi
            </h1>

            <p className="text-slate-500 mt-2">
              abhi@supplyflow.com
            </p>

            <span className="inline-block mt-3 bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm">
              Admin
            </span>
          </div>

        </div>

        <div className="mt-10 grid grid-cols-2 gap-6">

          <div className="bg-slate-50 rounded-2xl p-5">
            <h3 className="text-slate-500 text-sm">
              Full Name
            </h3>

            <p className="text-xl font-semibold mt-2">
              Abhi
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-5">
            <h3 className="text-slate-500 text-sm">
              Role
            </h3>

            <p className="text-xl font-semibold mt-2">
              Administrator
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-5">
            <h3 className="text-slate-500 text-sm">
              Email
            </h3>

            <p className="text-xl font-semibold mt-2">
              abhi@supplyflow.com
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-5">
            <h3 className="text-slate-500 text-sm">
              Department
            </h3>

            <p className="text-xl font-semibold mt-2">
              Inventory Management
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;