import { useNavigate } from "react-router-dom";

const CompanyProfile = () => {

  const navigate = useNavigate();

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
            Company Profile
          </h1>

          <p className="text-slate-500 mt-2">
            Manage your business information and branding
          </p>

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition">

          Save Changes

        </button>

      </div>

      {/* COMPANY INFO */}

      <div className="bg-white rounded-3xl p-8 shadow-sm">

        <h2 className="text-2xl font-bold mb-8">
          Company Information
        </h2>

        <div className="grid grid-cols-2 gap-6">

          <div>

            <label className="block text-sm font-medium mb-2">
              Company Name
            </label>

            <input
              type="text"
              defaultValue="INVENTRA Pvt Ltd"
              className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
            />

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Business Type
            </label>

            <select className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none">

              <option>Retail</option>
              <option>Wholesale</option>
              <option>Manufacturing</option>

            </select>

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              GST Number
            </label>

            <input
              type="text"
              defaultValue="29ABCDE1234F1Z5"
              className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none"
            />

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              PAN Number
            </label>

            <input
              type="text"
              defaultValue="ABCDE1234F"
              className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none"
            />

          </div>

        </div>

      </div>

      {/* ADDRESS DETAILS */}

      <div className="bg-white rounded-3xl p-8 shadow-sm">

        <h2 className="text-2xl font-bold mb-8">
          Address Details
        </h2>

        <div className="grid grid-cols-2 gap-6">

          <div className="col-span-2">

            <label className="block text-sm font-medium mb-2">
              Address
            </label>

            <textarea
              rows="4"
              className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none"
              defaultValue="MG Road, Bangalore, Karnataka"
            />

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              City
            </label>

            <input
              type="text"
              defaultValue="Bangalore"
              className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none"
            />

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              State
            </label>

            <input
              type="text"
              defaultValue="Karnataka"
              className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none"
            />

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Country
            </label>

            <input
              type="text"
              defaultValue="India"
              className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none"
            />

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Pincode
            </label>

            <input
              type="text"
              defaultValue="560001"
              className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none"
            />

          </div>

        </div>

      </div>

      {/* CONTACT DETAILS */}

      <div className="bg-white rounded-3xl p-8 shadow-sm">

        <h2 className="text-2xl font-bold mb-8">
          Contact Details
        </h2>

        <div className="grid grid-cols-2 gap-6">

          <div>

            <label className="block text-sm font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              defaultValue="support@inventra.com"
              className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none"
            />

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Phone
            </label>

            <input
              type="text"
              defaultValue="+91 9876543210"
              className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none"
            />

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Website
            </label>

            <input
              type="text"
              defaultValue="www.inventra.com"
              className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none"
            />

          </div>

        </div>

      </div>

      {/* BRANDING */}

      <div className="bg-white rounded-3xl p-8 shadow-sm">

        <h2 className="text-2xl font-bold mb-8">
          Logo & Branding
        </h2>

        <div className="flex items-center gap-8">

          <div className="w-32 h-32 rounded-3xl bg-blue-100 flex items-center justify-center text-4xl">

            🏢

          </div>

          <div>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl">

              Upload Logo

            </button>

            <p className="text-slate-500 text-sm mt-3">
              PNG, JPG up to 5MB
            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default CompanyProfile;