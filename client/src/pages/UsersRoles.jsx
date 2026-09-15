import { useNavigate } from "react-router-dom";

const UsersRoles = () => {

  const navigate = useNavigate();

  const users = [

    {
      name: "Rahul Mehta",
      email: "rahul@inventra.com",
      role: "Admin",
      status: "Active",
    },

    {
      name: "Priya Nair",
      email: "priya@inventra.com",
      role: "Inventory Manager",
      status: "Active",
    },

    {
      name: "Arjun Rao",
      email: "arjun@inventra.com",
      role: "Warehouse Staff",
      status: "Inactive",
    },

    {
      name: "Sneha Kapoor",
      email: "sneha@inventra.com",
      role: "Procurement Officer",
      status: "Active",
    },

  ];

  const permissions = [

    "Inventory Access",
    "Purchase Management",
    "Reports Access",
    "Supplier Management",
    "AI Insights",
    "Settings Access",

  ];

  return (

    <div className="space-y-8">

      {/* HEADER */}

      <div className="flex justify-between items-center">

        <div>

          <button
            onClick={() => navigate("/settings")}
            className="mb-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition"
          >

            ← Back to Settings

          </button>

          <h1 className="text-4xl font-bold text-slate-800">
            Users & Roles
          </h1>

          <p className="text-slate-500 mt-2">
            Manage users, permissions, and role access
          </p>

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition">

          + Add User

        </button>

      </div>

      {/* TOP CARDS */}

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-slate-500">
            Total Users
          </p>

          <h1 className="text-4xl font-bold mt-3">
            24
          </h1>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-green-600">
            Active Users
          </p>

          <h1 className="text-4xl font-bold mt-3">
            19
          </h1>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-blue-600">
            Roles
          </p>

          <h1 className="text-4xl font-bold mt-3">
            6
          </h1>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-orange-500">
            Pending Invites
          </p>

          <h1 className="text-4xl font-bold mt-3">
            3
          </h1>

        </div>

      </div>

      {/* USERS TABLE */}

      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">

        <div className="p-6 border-b flex justify-between items-center">

          <h2 className="text-2xl font-bold">
            User List
          </h2>

          <input
            type="text"
            placeholder="Search users..."
            className="border border-slate-200 rounded-2xl px-5 py-3 outline-none"
          />

        </div>

        <table className="w-full">

          <thead className="bg-slate-50 border-b">

            <tr>

              <th className="text-left p-5">
                User
              </th>

              <th className="text-left p-5">
                Email
              </th>

              <th className="text-left p-5">
                Role
              </th>

              <th className="text-left p-5">
                Status
              </th>

              <th className="text-left p-5">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {users.map((user, index) => (

              <tr
                key={index}
                className="border-t hover:bg-slate-50 transition"
              >

                <td className="p-5 font-medium">
                  {user.name}
                </td>

                <td className="p-5 text-slate-500">
                  {user.email}
                </td>

                <td className="p-5">

                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">

                    {user.role}

                  </span>

                </td>

                <td className="p-5">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >

                    {user.status}

                  </span>

                </td>

                <td className="p-5">

                  <button className="text-blue-600 font-medium">

                    Manage

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* ROLES + ACTIVITY */}

      <div className="grid grid-cols-2 gap-6">

        {/* ROLE PERMISSIONS */}

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Role Permissions
          </h2>

          <div className="space-y-4">

            {permissions.map((item, index) => (

              <div
                key={index}
                className="flex items-center justify-between border border-slate-100 rounded-2xl p-4"
              >

                <span className="font-medium">
                  {item}
                </span>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm">

                  Configure

                </button>

              </div>

            ))}

          </div>

        </div>

        {/* RECENT ACTIVITY */}

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Recent Activity
          </h2>

          <div className="space-y-5">

            <div className="border border-slate-100 rounded-2xl p-5">

              <h3 className="font-semibold">
                New user added
              </h3>

              <p className="text-slate-500 text-sm mt-2">
                Priya Nair added by Admin
              </p>

            </div>

            <div className="border border-slate-100 rounded-2xl p-5">

              <h3 className="font-semibold">
                Permissions updated
              </h3>

              <p className="text-slate-500 text-sm mt-2">
                Inventory role access modified
              </p>

            </div>

            <div className="border border-slate-100 rounded-2xl p-5">

              <h3 className="font-semibold">
                User deactivated
              </h3>

              <p className="text-slate-500 text-sm mt-2">
                Warehouse staff account disabled
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default UsersRoles;