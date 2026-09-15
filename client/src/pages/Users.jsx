import { Link } from "react-router-dom";
import { useState } from "react";
import RolesPermissions from "./RolesPermissions";
import UserActivityLog from "./UserActivityLog";

const Users = () => {

  const [showAddUser, setShowAddUser] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [activeSection, setActiveSection] = useState("");

const [showEditUser, setShowEditUser] = useState(false);

const [selectedUser, setSelectedUser] = useState(null);

  const users = [

    {
      id:1,
      name: "Rahul Sharma",
      email: "rahul@inventra.com",
      role: "Admin",
      status: "Active",
      lastLogin: "20 Jun 2025, 10:30 AM",
    },

    {
      id:2,
      name: "Priya Nair",
      email: "priya@inventra.com",
      role: "Procurement Executive",
      status: "Active",
      lastLogin: "20 Jun 2025, 09:20 AM",
    },

    {
      id:3,
      name: "Amit Patel",
      email: "amit@inventra.com",
      role: "Warehouse Executive",
      status: "Active",
      lastLogin: "19 Jun 2025, 06:15 PM",
    },

    {
      id:4,
      name: "Sneha Iyer",
      email: "sneha@inventra.com",
      role: "Accountant",
      status: "Active",
      lastLogin: "19 Jun 2025, 04:45 PM",
    },

    {
      id:5,
      name: "Vikram Singh",
      email: "vikram@inventra.com",
      role: "Manager",
      status: "Active",
      lastLogin: "19 Jun 2025, 11:00 AM",
    },

    {
      id:6,
      name: "Karan Das",
      email: "karan@inventra.com",
      role: "Warehouse Executive",
      status: "Inactive",
      lastLogin: "15 Jun 2025, 03:22 PM",
    },

  ];

  return (

    <div className="space-y-8">

      {/* HEADER */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold text-slate-800">
            Users
          </h1>

        </div>

        <button
  onClick={() => setShowAddUser(true)}
  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition"
>
  + Add User
</button>

      </div>

      {/* TOP CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">

          <p className="text-slate-500 font-medium">
            Total Users
          </p>

          <h1 className="text-4xl font-bold mt-3">
            12
          </h1>

          <p className="text-slate-400 mt-2 text-sm">
            All registered users
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">

          <p className="text-green-600 font-medium">
            Active Users
          </p>

          <h1 className="text-4xl font-bold mt-3">
            9
          </h1>

          <p className="text-slate-400 mt-2 text-sm">
            Currently active
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">

          <p className="text-red-500 font-medium">
            Inactive Users
          </p>

          <h1 className="text-4xl font-bold mt-3">
            3
          </h1>

          <p className="text-slate-400 mt-2 text-sm">
            Not active
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">

          <p className="text-blue-600 font-medium">
            Admins
          </p>

          <h1 className="text-4xl font-bold mt-3">
            2
          </h1>

          <p className="text-slate-400 mt-2 text-sm">
            System administrators
          </p>

        </div>

      </div>

      {/* FILTER BAR */}

      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">

        <div className="flex flex-col xl:flex-row gap-4 justify-between">

          <input
            type="text"
            placeholder="Search by name, email or phone..."
            className="border border-slate-200 rounded-2xl px-5 py-3 w-full xl:w-96 outline-none"
          />

          <div className="flex gap-4">

            <select className="border border-slate-200 rounded-2xl px-5 py-3 outline-none">

              <option>
                All Roles
              </option>

            </select>

            <select className="border border-slate-200 rounded-2xl px-5 py-3 outline-none">

              <option>
                All Status
              </option>

            </select>

          </div>

        </div>

      </div>

      {/* USERS TABLE */}

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-50 border-b">

            <tr>

              <th className="text-left p-5">
                Name
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
                Last Login
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
                className="border-b hover:bg-slate-50 transition"
              >

                <td className="p-5">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                      {user.name.charAt(0)}
                    </div>

                    <span className="font-medium">
                      {user.name}
                    </span>

                  </div>

                </td>

                <td className="p-5 text-slate-600">
                  {user.email}
                </td>

                <td className="p-5">
                  {user.role}
                </td>

                <td className="p-5">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-500"
                    }`}
                  >

                    {user.status}

                  </span>

                </td>

                <td className="p-5 text-slate-500">
                  {user.lastLogin}
                </td>

                <td className="px-6 py-5 relative">

  <button
    onClick={() =>
      setOpenMenu(
        openMenu === user.id ? null : user.id
      )
    }
    className="text-2xl font-bold text-slate-500 hover:text-black"
  >
    ⋮
  </button>

  {openMenu === user.id && (

    <div className="absolute right-6 mt-2 bg-white shadow-xl border border-slate-100 rounded-2xl w-40 z-50">

      <button
        onClick={() => {
          setSelectedUser(user);
          setShowEditUser(true);
          setOpenMenu(null);
        }}
        className="w-full text-left px-5 py-3 hover:bg-slate-100 rounded-t-2xl"
      >
        Edit
      </button>

      <button
        className="w-full text-left px-5 py-3 hover:bg-red-50 text-red-500 rounded-b-2xl"
      >
        Delete
      </button>

    </div>

  )}

</td>

              </tr>

            ))}

          </tbody>

        </table>

        {/* FOOTER */}

        <div className="flex justify-between items-center p-6">

          <p className="text-slate-500 text-sm">
            Showing 1 to 6 of 12 users
          </p>

          <div className="flex gap-2">

            <button className="w-10 h-10 rounded-xl border border-slate-200 hover:bg-slate-100">
              1
            </button>

            <button className="w-10 h-10 rounded-xl border border-slate-200 hover:bg-slate-100">
              2
            </button>

          </div>

        </div>

      </div>

      {/* QUICK LINKS */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

  {/* ROLES */}

  <button
    onClick={() => setActiveSection("roles")}
    className={`rounded-3xl p-8 shadow-sm text-left border-2 transition hover:shadow-lg ${
  activeSection === "roles"
    ? "bg-blue-600 border-blue-600 text-white"
    : "bg-white border-transparent text-slate-800"
}`}
  >

    <h2
  className={`text-3xl font-bold ${
    activeSection === "roles"
      ? "text-white"
      : "text-slate-800"
  }`}
>
      Roles & Permissions
    </h2>

    <p
  className={`mt-3 text-lg ${
    activeSection === "roles"
      ? "text-blue-100"
      : "text-slate-500"
  }`}
>
      Manage role access and permissions
    </p>

  </button>

  {/* ACTIVITY */}

  <button
    onClick={() => setActiveSection("activity")}
    className={`rounded-3xl p-8 shadow-sm text-left border-2 transition hover:shadow-lg ${
  activeSection === "activity"
    ? "bg-blue-600 border-blue-600 text-white"
    : "bg-white border-transparent text-slate-800"
}`}
  >

    <h2
  className={`text-3xl font-bold ${
    activeSection === "activity"
      ? "text-white"
      : "text-slate-800"
  }`}
>
      User Activity Log
    </h2>

    <p
  className={`mt-3 text-lg ${
    activeSection === "activity"
      ? "text-blue-100"
      : "text-slate-500"
  }`}
>
      Track all user activities and actions
    </p>

  </button>

</div>

      {/* ADD USER MODAL */}

{showAddUser && (

  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-6">

    <div className="bg-white rounded-3xl w-full max-w-5xl p-8 relative overflow-y-auto max-h-[95vh]">

      {/* CLOSE BUTTON */}

      <button
        onClick={() => setShowAddUser(false)}
        className="absolute top-5 right-5 text-slate-500 hover:text-red-500 text-2xl"
      >
        ✕
      </button>

      {/* HEADER */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-slate-800">
          Add New User
        </h1>

        <p className="text-slate-500 mt-2">
          Create a new user and assign role
        </p>

      </div>

      {/* FORM */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* FULL NAME */}

        <div>

          <label className="block text-sm font-medium mb-2">
            Full Name *
          </label>

          <input
            type="text"
            placeholder="Enter full name"
            className="w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none"
          />

        </div>

        {/* EMPLOYEE ID */}

        <div>

          <label className="block text-sm font-medium mb-2">
            Employee ID
          </label>

          <input
            type="text"
            placeholder="Enter employee ID"
            className="w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none"
          />

        </div>

        {/* EMAIL */}

        <div>

          <label className="block text-sm font-medium mb-2">
            Email Address *
          </label>

          <input
            type="email"
            placeholder="Enter email address"
            className="w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none"
          />

        </div>

        {/* DEPARTMENT */}

        <div>

          <label className="block text-sm font-medium mb-2">
            Department
          </label>

          <input
            type="text"
            placeholder="Enter department"
            className="w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none"
          />

        </div>

        {/* PHONE */}

        <div>

          <label className="block text-sm font-medium mb-2">
            Phone Number
          </label>

          <input
            type="text"
            placeholder="Enter phone number"
            className="w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none"
          />

        </div>

        {/* ROLE */}

        <div>

          <label className="block text-sm font-medium mb-2">
            Role *
          </label>

          <select className="w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none">

            <option>
              Select role
            </option>

            <option>
              Admin
            </option>

            <option>
              Manager
            </option>

            <option>
              Procurement Executive
            </option>

            <option>
              Warehouse Executive
            </option>

          </select>

        </div>

        {/* PASSWORD */}

        <div>

          <label className="block text-sm font-medium mb-2">
            Password *
          </label>

          <input
            type="password"
            placeholder="Enter password"
            className="w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none"
          />

        </div>

        {/* STATUS */}

        <div>

          <label className="block text-sm font-medium mb-2">
            Status
          </label>

          <select className="w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none">

            <option>
              Active
            </option>

            <option>
              Inactive
            </option>

          </select>

        </div>

        {/* CONFIRM PASSWORD */}

        <div className="md:col-span-2">

          <label className="block text-sm font-medium mb-2">
            Confirm Password *
          </label>

          <input
            type="password"
            placeholder="Confirm password"
            className="w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none"
          />

        </div>

      </div>

      {/* FOOTER */}

      <div className="flex justify-end gap-4 mt-10">

        <button
          onClick={() => setShowAddUser(false)}
          className="border border-slate-300 px-6 py-3 rounded-2xl hover:bg-slate-100 transition"
        >
          Cancel
        </button>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition">
          Save User
        </button>

      </div>

    </div>

  </div>

)}

{/* EDIT USER DRAWER */}

{showEditUser && selectedUser && (

  <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">

    <div className="bg-white w-full max-w-xl h-full overflow-y-auto p-8 relative">

      {/* CLOSE */}

      <button
        onClick={() => setShowEditUser(false)}
        className="absolute top-5 right-5 text-2xl text-slate-500 hover:text-red-500"
      >
        ✕
      </button>

      {/* HEADER */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-slate-800">
          Edit User
        </h1>

        <p className="text-slate-500 mt-2">
          Update user information
        </p>

      </div>

      {/* FORM */}

      <div className="space-y-6">

        {/* NAME */}

        <div>

          <label className="block mb-2 font-medium">
            Full Name
          </label>

          <input
            type="text"
            defaultValue={selectedUser.name}
            className="w-full border border-slate-200 rounded-2xl px-4 py-3"
          />

        </div>

        {/* EMAIL */}

        <div>

          <label className="block mb-2 font-medium">
            Email Address
          </label>

          <input
            type="email"
            defaultValue={selectedUser.email}
            className="w-full border border-slate-200 rounded-2xl px-4 py-3"
          />

        </div>

        {/* PHONE */}

        <div>

          <label className="block mb-2 font-medium">
            Phone Number
          </label>

          <input
            type="text"
            placeholder="9876543210"
            className="w-full border border-slate-200 rounded-2xl px-4 py-3"
          />

        </div>

        {/* ROLE */}

        <div>

          <label className="block mb-2 font-medium">
            Role
          </label>

          <select className="w-full border border-slate-200 rounded-2xl px-4 py-3">

            <option>
              {selectedUser.role}
            </option>

            <option>
              Admin
            </option>

            <option>
              Manager
            </option>

            <option>
              Procurement Executive
            </option>

            <option>
              Warehouse Executive
            </option>

          </select>

        </div>

        {/* STATUS */}

        <div>

          <label className="block mb-2 font-medium">
            Status
          </label>

          <select className="w-full border border-slate-200 rounded-2xl px-4 py-3">

            <option>
              {selectedUser.status}
            </option>

            <option>
              Active
            </option>

            <option>
              Inactive
            </option>

          </select>

        </div>

        {/* RESET PASSWORD */}

        <div className="flex items-center gap-3">

          <input type="checkbox" />

          <label className="text-slate-600">
            Reset Password
          </label>

        </div>

      </div>

      {/* FOOTER */}

      <div className="flex justify-end gap-4 mt-10">

        <button
          onClick={() => setShowEditUser(false)}
          className="border border-slate-300 px-6 py-3 rounded-2xl hover:bg-slate-100"
        >
          Cancel
        </button>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl">
          Update User
        </button>

      </div>

    </div>

  </div>

)}

{/* ROLES SECTION */}

{activeSection === "roles" && (

  <div className="mt-8">

    <RolesPermissions />

  </div>

)}

{/* ACTIVITY SECTION */}

{activeSection === "activity" && (

  <div className="mt-8">

    <UserActivityLog />

  </div>

)}

    </div>

  );

};

export default Users;