import { useNavigate } from "react-router-dom";

const SystemPreferences = () => {

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
            System Preferences
          </h1>

          <p className="text-slate-500 mt-2">
            Configure regional, language and system-wide preferences
          </p>

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition">

          Save Preferences

        </button>

      </div>

      {/* TOP CARDS */}

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-slate-500">
            Active Timezone
          </p>

          <h1 className="text-2xl font-bold mt-3">
            IST
          </h1>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-blue-600">
            Currency
          </p>

          <h1 className="text-2xl font-bold mt-3">
            INR ₹
          </h1>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-green-600">
            Language
          </p>

          <h1 className="text-2xl font-bold mt-3">
            English
          </h1>

        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <p className="text-orange-500">
            Date Format
          </p>

          <h1 className="text-2xl font-bold mt-3">
            DD/MM/YYYY
          </h1>

        </div>

      </div>

      {/* REGIONAL SETTINGS */}

      <div className="bg-white rounded-3xl p-8 shadow-sm">

        <h2 className="text-2xl font-bold mb-8">
          Regional Settings
        </h2>

        <div className="grid grid-cols-2 gap-6">

          <div>

            <label className="block text-sm font-medium mb-2">
              Timezone
            </label>

            <select className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none">

              <option>Asia/Kolkata (IST)</option>
              <option>UTC</option>
              <option>America/New_York</option>

            </select>

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Language
            </label>

            <select className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none">

              <option>English</option>
              <option>Hindi</option>
              <option>Kannada</option>

            </select>

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Currency
            </label>

            <select className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none">

              <option>INR ₹</option>
              <option>USD $</option>
              <option>EUR €</option>

            </select>

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Number Format
            </label>

            <select className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none">

              <option>Indian (1,00,000)</option>
              <option>International (100,000)</option>

            </select>

          </div>

        </div>

      </div>

      {/* DATE & TIME */}

      <div className="bg-white rounded-3xl p-8 shadow-sm">

        <h2 className="text-2xl font-bold mb-8">
          Date & Time Settings
        </h2>

        <div className="grid grid-cols-2 gap-6">

          <div>

            <label className="block text-sm font-medium mb-2">
              Date Format
            </label>

            <select className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none">

              <option>DD/MM/YYYY</option>
              <option>MM/DD/YYYY</option>
              <option>YYYY-MM-DD</option>

            </select>

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Time Format
            </label>

            <select className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none">

              <option>12 Hour</option>
              <option>24 Hour</option>

            </select>

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Financial Year Start
            </label>

            <select className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none">

              <option>April</option>
              <option>January</option>

            </select>

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Week Starts On
            </label>

            <select className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none">

              <option>Monday</option>
              <option>Sunday</option>

            </select>

          </div>

        </div>

      </div>

      {/* SYSTEM OPTIONS */}

      <div className="bg-white rounded-3xl p-8 shadow-sm">

        <h2 className="text-2xl font-bold mb-8">
          System Options
        </h2>

        <div className="space-y-5">

          <div className="flex justify-between items-center border border-slate-100 rounded-2xl p-5">

            <div>

              <h3 className="font-semibold text-lg">
                Dark Mode
              </h3>

              <p className="text-slate-500 text-sm mt-2">
                Enable dark theme for dashboard
              </p>

            </div>

            <div className="w-14 h-8 bg-slate-300 rounded-full flex items-center px-1">

              <div className="w-6 h-6 bg-white rounded-full"></div>

            </div>

          </div>

          <div className="flex justify-between items-center border border-slate-100 rounded-2xl p-5">

            <div>

              <h3 className="font-semibold text-lg">
                Auto Backup
              </h3>

              <p className="text-slate-500 text-sm mt-2">
                Automatically backup system data daily
              </p>

            </div>

            <div className="w-14 h-8 bg-blue-600 rounded-full flex items-center px-1">

              <div className="w-6 h-6 bg-white rounded-full ml-auto"></div>

            </div>

          </div>

          <div className="flex justify-between items-center border border-slate-100 rounded-2xl p-5">

            <div>

              <h3 className="font-semibold text-lg">
                AI Recommendations
              </h3>

              <p className="text-slate-500 text-sm mt-2">
                Enable AI-generated recommendations
              </p>

            </div>

            <div className="w-14 h-8 bg-blue-600 rounded-full flex items-center px-1">

              <div className="w-6 h-6 bg-white rounded-full ml-auto"></div>

            </div>

          </div>

        </div>

      </div>

      {/* SYSTEM INFO */}

      <div className="bg-white rounded-3xl p-8 shadow-sm">

        <h2 className="text-2xl font-bold mb-8">
          System Information
        </h2>

        <div className="grid grid-cols-4 gap-6">

          <div className="bg-slate-50 rounded-2xl p-5">

            <p className="text-slate-500">
              ERP Version
            </p>

            <h3 className="text-2xl font-bold mt-3">
              v2.4.1
            </h3>

          </div>

          <div className="bg-slate-50 rounded-2xl p-5">

            <p className="text-slate-500">
              Last Backup
            </p>

            <h3 className="text-2xl font-bold mt-3">
              Today
            </h3>

          </div>

          <div className="bg-slate-50 rounded-2xl p-5">

            <p className="text-slate-500">
              Database
            </p>

            <h3 className="text-2xl font-bold mt-3">
              MongoDB
            </h3>

          </div>

          <div className="bg-slate-50 rounded-2xl p-5">

            <p className="text-slate-500">
              Environment
            </p>

            <h3 className="text-2xl font-bold mt-3">
              Production
            </h3>

          </div>

        </div>

      </div>

    </div>

  );

};

export default SystemPreferences;