import { Link, Outlet, useLocation } from "react-router-dom";

const Settings = () => {

  const location = useLocation();

  const modules = [

    {
      title: "Company Profile",
      desc: "Manage your company details and business information.",
      path: "/settings/company-profile",
      color: "bg-purple-100 text-purple-600",
      items: [
        "Company Information",
        "Address Details",
        "Contact Details",
        "Business Settings",
      ],
    },

    {
      title: "Users & Roles",
      desc: "Manage users, roles, and permissions.",
      path: "/settings/users-roles",
      color: "bg-blue-100 text-blue-600",
      items: [
        "User List",
        "Add User",
        "Roles & Permissions",
        "Activity Logs",
      ],
    },

    {
      title: "Product Categories",
      desc: "Create and manage product categories.",
      path: "/settings/product-categories",
      color: "bg-green-100 text-green-600",
      items: [
        "Category List",
        "Add Category",
        "Sub Categories",
      ],
    },

    {
      title: "Approval Workflow",
      desc: "Configure approval workflows.",
      path: "/settings/approval-workflow",
      color: "bg-indigo-100 text-indigo-600",
      items: [
        "PO Approval",
        "Bill Approval",
        "Stock Transfer",
      ],
    },

    {
      title: "Notification Settings",
      desc: "Configure email and in-app notifications.",
      path: "/settings/notification-settings",
      color: "bg-blue-100 text-blue-600",
      items: [
        "Email Notifications",
        "SMS Notifications",
        "Alert Preferences",
      ],
    },

    {
      title: "AI Settings",
      desc: "Manage AI features and preferences.",
      path: "/settings/ai-settings",
      color: "bg-green-100 text-green-600",
      items: [
        "AI Preferences",
        "Recommendation Settings",
        "Insight Preferences",
      ],
    },

    {
      title: "Integrations",
      desc: "Manage third-party integrations.",
      path: "/settings/integrations",
      color: "bg-orange-100 text-orange-600",
      items: [
        "Accounting Software",
        "Payment Gateways",
        "Shipping",
      ],
    },

  ];

  return (

    <div className="space-y-8">

      {/* SHOW LANDING PAGE ONLY */}

      {location.pathname === "/settings" && (

        <>

          {/* HEADER */}

          <div>

            <h1 className="text-4xl font-bold text-slate-800">
              Settings
            </h1>

            <p className="text-slate-500 mt-2">
              Configure your ERP system and preferences
            </p>

          </div>

          {/* MODULE GRID */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {modules.map((module, index) => (

              <Link
                key={index}
                to={module.path}
                className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition"
              >

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${module.color}`}>

                  ⚙️

                </div>

                <h2 className="text-2xl font-bold mt-5">
                  {module.title}
                </h2>

                <p className="text-slate-500 mt-3 text-sm">
                  {module.desc}
                </p>

                <div className="mt-6 space-y-3">

                  {module.items.map((item, i) => (

                    <div
                      key={i}
                      className="flex justify-between items-center border-b border-slate-100 pb-2 text-sm"
                    >

                      <span>{item}</span>

                      <span>›</span>

                    </div>

                  ))}

                </div>

              </Link>

            ))}

          </div>

          {/* SYSTEM PREFERENCES */}

          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <h2 className="text-2xl font-bold">
              System Preferences
            </h2>

            <div className="grid grid-cols-5 gap-6 mt-8">

              {[
                "Date & Time",
                "Numbering",
                "Currency",
                "Language",
                "Preferences",
              ].map((item, index) => (

                <div
                  key={index}
                  className="text-center"
                >

                  <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto">

                    ⚙️

                  </div>

                  <p className="mt-4 font-medium">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </>

      )}

      {/* SUBPAGES */}

      {location.pathname !== "/settings" && (
        <Outlet />
      )}

    </div>

  );

};

export default Settings;