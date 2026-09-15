import { Link } from "react-router-dom";

const RolesPermissions = () => {

  const roles = [

    {
      name: "Admin",
      users: 2,
    },

    {
      name: "Manager",
      users: 2,
    },

    {
      name: "Procurement Executive",
      users: 3,
    },

    {
      name: "Warehouse Executive",
      users: 3,
    },

    {
      name: "Accountant",
      users: 2,
    },

  ];

  const permissions = [

    {
      module: "Dashboard",
      admin: "✅",
      manager: "✅",
      procurement: "✅",
      warehouse: "✅",
      accountant: "✅",
    },

    {
      module: "Inventory",
      admin: "✅",
      manager: "✅",
      procurement: "✅",
      warehouse: "✅",
      accountant: "✅",
    },

    {
      module: "Procurement",
      admin: "✅",
      manager: "✅",
      procurement: "✅",
      warehouse: "❌",
      accountant: "❌",
    },

    {
      module: "Suppliers",
      admin: "✅",
      manager: "❌",
      procurement: "❌",
      warehouse: "✅",
      accountant: "❌",
    },

    {
      module: "Reports",
      admin: "✅",
      manager: "❌",
      procurement: "❌",
      warehouse: "❌",
      accountant: "❌",
    },

    {
      module: "AI Insights",
      admin: "✅",
      manager: "✅",
      procurement: "➖",
      warehouse: "❌",
      accountant: "➖",
    },

    {
      module: "Settings",
      admin: "✅",
      manager: "❌",
      procurement: "❌",
      warehouse: "❌",
      accountant: "❌",
    },

    {
      module: "Users",
      admin: "✅",
      manager: "❌",
      procurement: "❌",
      warehouse: "❌",
      accountant: "❌",
    },

  ];

  return (

    <div className="space-y-8">

      {/* HEADER */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold text-slate-800">
            Roles & Permissions
          </h1>

          <p className="text-slate-500 mt-2">
            Manage roles and module permissions
          </p>

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl">
          + Add Role
        </button>

      </div>

      {/* MAIN CARD */}

      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">

          {/* LEFT ROLES */}

          <div className="space-y-4">

            <h2 className="text-xl font-bold">
              Roles
            </h2>

            {roles.map((role, index) => (

              <div
                key={index}
                className="border border-slate-200 rounded-2xl p-4 hover:shadow-md transition cursor-pointer"
              >

                <div className="flex justify-between items-center">

                  <h3 className="font-semibold text-slate-700">
                    {role.name}
                  </h3>

                  <span className="text-sm text-slate-500">
                    {role.users} users
                  </span>

                </div>

              </div>

            ))}

          </div>

          {/* RIGHT TABLE */}

          <div className="xl:col-span-3 overflow-x-auto">

            <h2 className="text-xl font-bold mb-4">
              Permission Overview
            </h2>

            <table className="w-full">

              <thead>

                <tr className="border-b border-slate-200">

                  <th className="text-left py-4">
                    Module
                  </th>

                  <th>Admin</th>

                  <th>Manager</th>

                  <th>Procurement</th>

                  <th>Warehouse</th>

                  <th>Accountant</th>

                </tr>

              </thead>

              <tbody>

                {permissions.map((item, index) => (

                  <tr
                    key={index}
                    className="border-b border-slate-100 hover:bg-slate-50"
                  >

                    <td className="py-4 font-medium">
                      {item.module}
                    </td>

                    <td className="text-center">
                      {item.admin}
                    </td>

                    <td className="text-center">
                      {item.manager}
                    </td>

                    <td className="text-center">
                      {item.procurement}
                    </td>

                    <td className="text-center">
                      {item.warehouse}
                    </td>

                    <td className="text-center">
                      {item.accountant}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

      {/* LEGEND */}

      <div className="flex gap-8 text-sm">

        <div className="flex items-center gap-2">
          <span>✅</span>
          <span>Full Access</span>
        </div>

        <div className="flex items-center gap-2">
          <span>❌</span>
          <span>No Access</span>
        </div>

        <div className="flex items-center gap-2">
          <span>➖</span>
          <span>Partial Access</span>
        </div>

      </div>

    </div>

  );

};

export default RolesPermissions;