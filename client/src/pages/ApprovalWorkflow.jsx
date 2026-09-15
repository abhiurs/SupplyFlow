import { useNavigate } from "react-router-dom";

const ApprovalWorkflow = () => {

  const navigate = useNavigate();

  const approvals = [

    {
      type: "Purchase Order",
      reference: "PO-2025-0012",
      requestedBy: "Rahul Mehta",
      amount: "₹45,000",
      status: "Pending",
      level: "Manager Approval",
    },

    {
      type: "Supplier Bill",
      reference: "BILL-2025-0045",
      requestedBy: "Priya Nair",
      amount: "₹78,500",
      status: "Approved",
      level: "Finance Approval",
    },

    {
      type: "Stock Transfer",
      reference: "ST-2025-0018",
      requestedBy: "Arjun Rao",
      amount: "₹12,000",
      status: "Rejected",
      level: "Warehouse Approval",
    },

    {
      type: "Purchase Order",
      reference: "PO-2025-0014",
      requestedBy: "Sneha Kapoor",
      amount: "₹1,20,000",
      status: "Pending",
      level: "Director Approval",
    },

  ];

  const workflowLevels = [

    {
      title: "Inventory Approval",
      desc: "Approve stock updates and adjustments",
    },

    {
      title: "Purchase Approval",
      desc: "Approve procurement purchase orders",
    },

    {
      title: "Finance Approval",
      desc: "Approve supplier bills and payments",
    },

    {
      title: "Management Approval",
      desc: "Approve high-value transactions",
    },

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
            Approval Workflow
          </h1>

          <p className="text-slate-500 mt-2">
            Configure approval hierarchy and workflow automation
          </p>

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition">

          + Create Workflow

        </button>

      </div>

      {/* TOP CARDS */}

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-slate-500">
            Pending Approvals
          </p>

          <h1 className="text-4xl font-bold mt-3">
            18
          </h1>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-green-600">
            Approved Today
          </p>

          <h1 className="text-4xl font-bold mt-3">
            12
          </h1>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-red-500">
            Rejected Requests
          </p>

          <h1 className="text-4xl font-bold mt-3">
            3
          </h1>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-blue-600">
            Workflow Levels
          </p>

          <h1 className="text-4xl font-bold mt-3">
            6
          </h1>

        </div>

      </div>

      {/* APPROVAL TABLE */}

      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">

        <div className="p-6 border-b flex justify-between items-center">

          <h2 className="text-2xl font-bold">
            Approval Requests
          </h2>

          <div className="flex gap-3">

            <input
              type="text"
              placeholder="Search approvals..."
              className="border border-slate-200 rounded-2xl px-5 py-3 outline-none"
            />

            <button className="border border-slate-200 px-5 py-3 rounded-2xl">

              Filter

            </button>

          </div>

        </div>

        <table className="w-full">

          <thead className="bg-slate-50 border-b">

            <tr>

              <th className="text-left p-5">
                Type
              </th>

              <th className="text-left p-5">
                Reference
              </th>

              <th className="text-left p-5">
                Requested By
              </th>

              <th className="text-left p-5">
                Amount
              </th>

              <th className="text-left p-5">
                Approval Level
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

            {approvals.map((item, index) => (

              <tr
                key={index}
                className="border-t hover:bg-slate-50 transition"
              >

                <td className="p-5 font-medium">
                  {item.type}
                </td>

                <td className="p-5">
                  {item.reference}
                </td>

                <td className="p-5">
                  {item.requestedBy}
                </td>

                <td className="p-5 font-semibold">
                  {item.amount}
                </td>

                <td className="p-5">
                  {item.level}
                </td>

                <td className="p-5">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status === "Approved"
                        ? "bg-green-100 text-green-600"
                        : item.status === "Rejected"
                        ? "bg-red-100 text-red-600"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >

                    {item.status}

                  </span>

                </td>

                <td className="p-5">

                  <div className="flex gap-3">

                    <button className="text-green-600 font-medium">

                      Approve

                    </button>

                    <button className="text-red-500 font-medium">

                      Reject

                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* WORKFLOW LEVELS */}

      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            Workflow Levels
          </h2>

          <button className="bg-blue-600 text-white px-5 py-3 rounded-2xl">

            + Add Level

          </button>

        </div>

        <div className="grid grid-cols-2 gap-5">

          {workflowLevels.map((item, index) => (

            <div
              key={index}
              className="border border-slate-100 rounded-2xl p-5 hover:shadow-md transition"
            >

              <div className="flex justify-between items-center">

                <div>

                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 mt-2 text-sm">
                    {item.desc}
                  </p>

                </div>

                <button className="text-blue-600 font-medium">

                  Configure

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* AUTOMATION */}

      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <h2 className="text-2xl font-bold mb-6">
          Automation Rules
        </h2>

        <div className="grid grid-cols-3 gap-5">

          <div className="bg-slate-50 rounded-2xl p-5">

            <h3 className="font-semibold">
              Auto Approve Low Value Orders
            </h3>

            <p className="text-slate-500 text-sm mt-3">
              Orders below ₹5,000 are auto approved
            </p>

          </div>

          <div className="bg-slate-50 rounded-2xl p-5">

            <h3 className="font-semibold">
              Escalate Delayed Approvals
            </h3>

            <p className="text-slate-500 text-sm mt-3">
              Escalate after 24 hours
            </p>

          </div>

          <div className="bg-slate-50 rounded-2xl p-5">

            <h3 className="font-semibold">
              Notify Finance Team
            </h3>

            <p className="text-slate-500 text-sm mt-3">
              Trigger notifications for high-value bills
            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default ApprovalWorkflow;