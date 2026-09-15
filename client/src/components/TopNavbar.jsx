import {
  useState,
  useEffect,
  useRef,
} from "react";

import {
  User,
  Settings,
  LogOut,
} from "lucide-react";

import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const TopNavbar = () => {

  const location = useLocation();

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [inventoryOpen, setInventoryOpen] =
    useState(false);

  const [procurementOpen, setProcurementOpen] =
    useState(false);

  const [aiOpen, setAiOpen] =
    useState(false);

  const [profileOpen, setProfileOpen] =
  useState(false);

  const profileRef = useRef();

  const subMenuClass =
  `
  flex items-center
  px-4 py-2.5
  rounded-xl
  text-[15px]
  font-medium
  text-slate-600
  hover:bg-indigo-50
  hover:text-indigo-600
  transition-all
  duration-200
`;

const handleProfile = () => {

  console.log("PROFILE CLICKED");

  navigate("/profile");

};

const handleSettings = () => {

  navigate("/settings");

  setProfileOpen(false);

};

const handleLogout = () => {

  localStorage.removeItem("token");

  navigate("/login");

};

useEffect(() => {

  const handleClickOutside = (event) => {

    if (
      profileRef.current &&
      !profileRef.current.contains(
        event.target
      )
    ) {

      setProfileOpen(false);

    }

  };

  document.addEventListener(
    "mousedown",
    handleClickOutside
  );

  return () => {

    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );

  };

}, []);

  return (

    <div className="sticky top-0 z-50 bg-[#0F172A] border-b border-slate-800 h-20 flex items-center justify-between px-6">

      {/* LEFT SECTION */}

      <div
  className="relative"
  ref={profileRef}
>

        {/* LOGO */}

        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="flex items-center gap-4"
        >

          {/* SYMBOL */}

         <div className="
w-14 h-14
rounded-2xl
overflow-hidden
bg-white
flex items-center gap-4
shadow-md
border border-slate-200
transition-all duration-300
group-hover:scale-105
">

  <img
    src="/images/sflogo.png"
    alt="SupplyFlow Logo"
    className="w-full h-full object-contain scale-110"
  />

</div>

          {/* FULL LOGO */}

          <div
  className={`overflow-hidden transition-all duration-500 ${
    menuOpen
      ? "w-[280px] opacity-100 ml-2"
      : "w-0 opacity-0"
  }`}
>

            <h1 className="
text-[38px]
font-black
whitespace-nowrap
tracking-tight
leading-none
">

              <span className="text-blue-900">

                SUPPLY

              </span>

              <span className="text-cyan-400">

                FLOW

              </span>

            </h1>

          </div>

          <ChevronDown
            size={18}
            className={`text-white transition-transform ${
              menuOpen
                ? "rotate-180"
                : ""
            }`}
          />

        </button>

        {/* DROPDOWN MENU */}

        {menuOpen && (
          <div
  className="
    absolute
    top-20
    left-0
    w-[340px]
    bg-white/95
    backdrop-blur-xl
    rounded-3xl
    shadow-[0_20px_60px_rgba(0,0,0,0.18)]
    border border-slate-200
    p-4
    z-50
    overflow-hidden

    before:absolute
    before:inset-0
    before:rounded-3xl
    before:bg-gradient-to-b
    before:from-white/40
    before:to-transparent
    before:pointer-events-none
  "
>

            <div className="space-y-2">

              {/* DASHBOARD */}

              <NavLink
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-2xl font-medium transition ${
                    isActive
                      ? "bg-indigo-100 text-indigo-700"
                      : "hover:bg-slate-100"
                  }`
                }
              >
                Dashboard
              </NavLink>

              {/* INVENTORY */}

              <div>

  <div className="
flex items-center
justify-between
px-4
py-3
rounded-2xl
hover:bg-slate-100
transition-all
duration-200
group
">

    {/* LANDING PAGE LINK */}

    <NavLink
      to="/inventory"
      onClick={() => setMenuOpen(false)}
      className={({ isActive }) =>
        `font-medium flex-1 ${
          isActive
            ? "text-indigo-600"
            : "text-slate-700"
        }`
      }
    >
      Inventory
    </NavLink>

    {/* DROPDOWN BUTTON */}

    <button
      onClick={() =>
        setInventoryOpen(!inventoryOpen)
      }
    >

      {inventoryOpen ? (
        <ChevronDown size={18} />
      ) : (
        <ChevronRight size={18} />
      )}

    </button>

  </div>

  {inventoryOpen && (

    <div className="ml-4 mt-2 space-y-1 border-l border-slate-200 pl-4">

      <NavLink
        to="/inventory/products"
        onClick={() => setMenuOpen(false)}
        className={subMenuClass}
      >
        Products
      </NavLink>

      <NavLink
        to="/inventory/low-stock"
        onClick={() => setMenuOpen(false)}
        className={subMenuClass}
      >
        Low Stock
      </NavLink>

      <NavLink
        to="/inventory/stock-count"
        onClick={() => setMenuOpen(false)}
        className={subMenuClass}
      >
        Stock Count
      </NavLink>

    </div>

  )}

</div>

              {/* PROCUREMENT */}

              <div>

  <div className="
flex items-center
justify-between
px-4
py-3
rounded-2xl
hover:bg-slate-100
transition-all
duration-200
group
">

    <NavLink
      to="/procurement"
      onClick={() => setMenuOpen(false)}
      className={({ isActive }) =>
        `font-medium flex-1 ${
          isActive
            ? "text-indigo-600"
            : "text-slate-700"
        }`
      }
    >
      Procurement
    </NavLink>

    <button
      onClick={() =>
        setProcurementOpen(
          !procurementOpen
        )
      }
    >

      {procurementOpen ? (
        <ChevronDown size={18} />
      ) : (
        <ChevronRight size={18} />
      )}

    </button>

  </div>

  {procurementOpen && (

    <div className="ml-4 mt-2 space-y-1 border-l border-slate-200 pl-4">

      <NavLink
        to="/procurement/purchase-orders"
        onClick={() => setMenuOpen(false)}
        className={subMenuClass}
      >
        Purchase Orders
      </NavLink>

      <NavLink
        to="/procurement/receive-goods"
        onClick={() => setMenuOpen(false)}
        className={subMenuClass}
      >
        Receive Goods
      </NavLink>

      <NavLink
        to="/procurement/supplier-bills"
        onClick={() => setMenuOpen(false)}
        className={subMenuClass}
      >
        Supplier Bills
      </NavLink>

      <NavLink
        to="/procurement/payment-tracking"
        onClick={() => setMenuOpen(false)}
        className={subMenuClass}
      >
        Payment Tracking
      </NavLink>

    </div>

  )}

</div>
              {/* MAIN PAGES */}

              <NavLink
                to="/suppliers"
                onClick={() => setMenuOpen(false)}
                className={subMenuClass}
              >
                Suppliers
              </NavLink>

              <NavLink
                to="/warehouses"
                onClick={() => setMenuOpen(false)}
                className={subMenuClass}
              >
                Warehouses
              </NavLink>

              <NavLink
                to="/reports"
                onClick={() => setMenuOpen(false)}
                className={subMenuClass}
              >
                Reports
              </NavLink>

              {/* AI INSIGHTS */}

              <div>

  <div className="
flex items-center
justify-between
px-4
py-3
rounded-2xl
hover:bg-slate-100
transition-all
duration-200
group
">

    <NavLink
      to="/ai-insights"
      onClick={() => setMenuOpen(false)}
      className={({ isActive }) =>
        `font-medium flex-1 ${
          isActive
            ? "text-indigo-600"
            : "text-slate-700"
        }`
      }
    >
      AI Insights
    </NavLink>

    <button
      onClick={() =>
        setAiOpen(!aiOpen)
      }
    >

      {aiOpen ? (
        <ChevronDown size={18} />
      ) : (
        <ChevronRight size={18} />
      )}

    </button>

  </div>

  {aiOpen && (

    <div className="ml-4 mt-2 space-y-1 border-l border-slate-200 pl-4">

      <NavLink
        to="/ai-insights/smart-alerts"
        onClick={() => setMenuOpen(false)}
        className={subMenuClass}
      >
        Smart Alerts
      </NavLink>

      <NavLink
        to="/ai-insights/demand-forecast"
        onClick={() => setMenuOpen(false)}
        className={subMenuClass}
      >
        Demand Forecast
      </NavLink>

      <NavLink
        to="/ai-insights/reorder-recommendations"
        onClick={() => setMenuOpen(false)}
        className={subMenuClass}
      >
        Reorder Recommendations
      </NavLink>

      <NavLink
        to="/ai-insights/supplier-intelligence"
        onClick={() => setMenuOpen(false)}
        className={subMenuClass}
      >
        Supplier Intelligence
      </NavLink>

      <NavLink
        to="/ai-insights/cost-optimization"
        onClick={() => setMenuOpen(false)}
        className={subMenuClass}
      >
        Cost Optimization
      </NavLink>

      <NavLink
        to="/ai-insights/expiry-batch"
        onClick={() => setMenuOpen(false)}
        className={subMenuClass}
      >
        Expiry & Batch
      </NavLink>

      <NavLink
        to="/ai-insights/ai-chat-assistant"
        onClick={() => setMenuOpen(false)}
        className={subMenuClass}
      >
        AI Chat Assistant
      </NavLink>

    </div>

  )}

</div>

              {/* EXTRA */}

              <NavLink
                to="/alerts"
                onClick={() => setMenuOpen(false)}
                className={subMenuClass}
              >
                Alerts
              </NavLink>

              <NavLink
                to="/settings"
                onClick={() => setMenuOpen(false)}
                className={subMenuClass}
              >
                Settings
              </NavLink>

              <NavLink
                to="/users"
                onClick={() => setMenuOpen(false)}
                className={subMenuClass}
              >
                Users
              </NavLink>

            </div>

          </div>
)}
      </div>


      {/* SEARCH */}

      <div className="flex-1 max-w-2xl mx-10">

        <input
          type="text"
          placeholder="Search products, suppliers, POs..."
          className="w-full h-12 rounded-2xl bg-slate-100 px-5 outline-none"
        />

      </div>

      {/* RIGHT SIDE */}

      <div className="flex items-center gap-5">

        <button className="text-white font-medium">
          + Add Product
        </button>

        <button className="text-white font-medium">
          Reports
        </button>

        <div className="relative">

  {/* PROFILE BUTTON */}

  <button
    onClick={() =>
      setProfileOpen(!profileOpen)
    }
    className="
      w-12 h-12
      rounded-full
      bg-white
      flex items-center justify-center
      font-bold
      shadow-md
      hover:scale-105
      transition-all
      duration-200
    "
  >
    A
  </button>

  {/* DROPDOWN */}

  {profileOpen && (

    <div
      className="
        absolute
        right-0
        top-16
        w-64
        bg-white/95
        backdrop-blur-xl
        rounded-3xl
        shadow-[0_20px_60px_rgba(0,0,0,0.18)]
        border border-slate-200
        overflow-hidden
        z-50
        animate-dropdown
      "
    >

      {/* USER INFO */}

      <div className="px-5 py-4 border-b border-slate-100">

        <h3 className="font-semibold text-slate-800">
          Abhi Urs
        </h3>

        <p className="text-sm text-slate-500">
          Admin
        </p>

      </div>

      {/* MENU ITEMS */}

      <div className="p-2">

        {/* PROFILE */}

<NavLink
  to="/profile"
  onClick={() =>
    setProfileOpen(false)
  }
  className="
    w-full
    flex items-center gap-3
    px-4 py-3
    rounded-2xl
    hover:bg-slate-100
    transition-all
    text-slate-700
  "
>

  <User size={18} />

  My Profile

</NavLink>

        {/* SETTINGS */}

        <button
        onClick={handleSettings}
          className="
            w-full
            flex items-center gap-3
            px-4 py-3
            rounded-2xl
            hover:bg-slate-100
            transition-all
            text-slate-700
          "
        >

          <Settings size={18} />

          Settings

        </button>

        {/* LOGOUT */}

        <button
        onClick={handleLogout}
          className="
            w-full
            flex items-center gap-3
            px-4 py-3
            rounded-2xl
            hover:bg-red-50
            transition-all
            text-red-500
          "
        >

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </div>

  )}

</div>

      </div>

    </div>

  );

};

export default TopNavbar;