import MainLayout from "./layouts/MainLayout";
import Procurement from "./pages/Procurement";
import PurchaseOrders from "./pages/PurchaseOrders";
import ReceiveGoods from "./pages/ReceiveGoods";
import SupplierBills from "./pages/SupplierBills";
import PaymentTracking from "./pages/PaymentTracking";
import Warehouses from "./pages/Warehouses";
import WarehouseDetails from "./pages/WarehouseDetails";
import WarehouseOverview from "./pages/WarehouseOverview";
import WarehouseInventory from "./pages/WarehouseInventory";
import WarehouseTransfers from "./pages/WarehouseTransfers";
import WarehouseReceiving from "./pages/WarehouseReceiving";
import WarehouseActivity from "./pages/WarehouseActivity";
import AIInsights from "./pages/AIInsights";
import SmartAlerts from "./pages/SmartAlerts";
import DemandForecast from "./pages/DemandForecast";
import ReorderRecommendations from "./pages/ReorderRecommendations";
import SupplierIntelligence from "./pages/SupplierIntelligence";
import CostOptimization from "./pages/CostOptimization";
import ExpiryBatchInsights from "./pages/ExpiryBatchInsights";
import AIChatAssistant from "./pages/AIChatAssistant";
import Alerts from "./pages/Alerts";
import LowStockAlerts from "./pages/LowStockAlerts";
import ExpiryAlerts from "./pages/ExpiryAlerts";
import DelayedPOAlerts from "./pages/DelayedPOAlerts";
import PaymentDueAlerts from "./pages/PaymentDueAlerts";
import SystemNotifications from "./pages/SystemNotifications";
import Settings from "./pages/Settings";
import CompanyProfile from "./pages/CompanyProfile";
import UsersRoles from "./pages/UsersRoles";
import ProductCategories from "./pages/ProductCategories";
import ApprovalWorkflow from "./pages/ApprovalWorkflow";
import NotificationSettings from "./pages/NotificationSettings";
import AISettings from "./pages/AISettings";
import Integrations from "./pages/Integrations";
import SystemPreferences from "./pages/SystemPreferences";
import Users from "./pages/Users";
import UserActivityLog from "./pages/UserActivityLog";
import RolesPermissions from "./pages/RolesPermissions";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import InventoryProducts from "./pages/InventoryProducts";
import LowStock from "./pages/LowStock";
import StockCount from "./pages/StockCount";
import Suppliers from "./pages/Suppliers";
import SupplierDetails from "./pages/SupplierDetails";
import SupplierOverview from "./pages/SupplierOverview";
import SupplierProducts from "./pages/SupplierProducts";
import SupplierPurchaseOrders from "./pages/SupplierPurchaseOrders";
import SupplierBillsPayments from "./pages/SupplierBillsPayments";
import SupplierPerformance from "./pages/SupplierPerformance";
import SupplierDocuments from "./pages/SupplierDocuments";
import Reports from "./pages/Reports";
import InventoryReport from "./pages/InventoryReport";
import PurchaseReport from "./pages/PurchaseReport";
import SupplierReport from "./pages/SupplierReport";
import StockCountReport from "./pages/StockCountReport";
import LowStockReport from "./pages/LowStockReport";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Profile from "./pages/Profile";

import ProtectedRoute from "./components/ProtectedRoute";


function App() {

  const token = localStorage.getItem("token");

  return (

    <BrowserRouter>

<Routes>

  {/* DEFAULT ROUTE */}
  <Route
    path="/"
    element={
      token
        ? <Navigate to="/dashboard" />
        : <Navigate to="/login" />
    }
  />

  <Route path="/profile" element={<Profile />} />

  {/* AUTH ROUTES */}
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

  {/* MAIN APP */}
  <Route
    element={
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    }
  >
    

    {/* DASHBOARD */}
    <Route
      path="/dashboard"
      element={<Dashboard />}
    />

    <Route
  path="/profile"
  element={<Profile />}
/>

    {/* INVENTORY */}
    <Route
      path="/inventory"
      element={<Inventory />}
    >

      <Route
        path="products"
        element={<InventoryProducts />}
      />

      <Route
        path="low-stock"
        element={<LowStock />}
      />

      <Route
        path="stock-count"
        element={<StockCount />}
      />

    </Route>

{/* PROCUREMENT */}

<Route
  path="/procurement"
  element={<Procurement />}
/>

<Route
  path="/procurement/purchase-orders"
  element={<PurchaseOrders />}
/>

<Route
  path="/procurement/receive-goods"
  element={<ReceiveGoods />}
/>

<Route
  path="/procurement/supplier-bills"
  element={<SupplierBills />}
/>

<Route
  path="/procurement/payment-tracking"
  element={<PaymentTracking />}
/>


    {/* SUPPLIERS */}
    <Route
      path="/suppliers"
      element={<Suppliers />}
    />

    <Route
      path="/suppliers/:id"
      element={<SupplierDetails />}
    >

      <Route
        index
        element={<SupplierOverview />}
      />

      <Route
        path="overview"
        element={<SupplierOverview />}
      />

      <Route
        path="products"
        element={<SupplierProducts />}
      />

      <Route
        path="purchase-orders"
        element={<SupplierPurchaseOrders />}
      />

      <Route
        path="bills-payments"
        element={<SupplierBillsPayments />}
      />

      <Route
        path="performance"
        element={<SupplierPerformance />}
      />

      <Route
        path="documents"
        element={<SupplierDocuments />}
      />

    </Route>

    {/* WAREHOUSES */}
    <Route
      path="/warehouses"
      element={<Warehouses />}
    />

    <Route
      path="/warehouses/:id"
      element={<WarehouseDetails />}
    >

      <Route
        index
        element={<WarehouseOverview />}
      />

      <Route
        path="overview"
        element={<WarehouseOverview />}
      />

      <Route
        path="inventory"
        element={<WarehouseInventory />}
      />

      <Route
        path="transfers"
        element={<WarehouseTransfers />}
      />

      <Route
        path="receiving"
        element={<WarehouseReceiving />}
      />

      <Route
        path="activity"
        element={<WarehouseActivity />}
      />

    </Route>

    {/* REPORTS */}
    <Route
      path="/reports"
      element={<Reports />}
    >

      <Route
        index
        element={<InventoryReport />}
      />

      <Route
        path="inventory"
        element={<InventoryReport />}
      />

      <Route
        path="purchase"
        element={<PurchaseReport />}
      />

      <Route
        path="suppliers"
        element={<SupplierReport />}
      />

      <Route
        path="stock-count"
        element={<StockCountReport />}
      />

      <Route
        path="low-stock"
        element={<LowStockReport />}
      />

    </Route>

    {/* AI INSIGHTS */}
    <Route
      path="/ai-insights"
      element={<AIInsights />}
    >


      <Route
        path="smart-alerts"
        element={<SmartAlerts />}
      />

      <Route
        path="demand-forecast"
        element={<DemandForecast />}
      />

      <Route
        path="reorder-recommendations"
        element={<ReorderRecommendations />}
      />

      <Route
        path="supplier-intelligence"
        element={<SupplierIntelligence />}
      />

      <Route
        path="cost-optimization"
        element={<CostOptimization />}
      />

      <Route
        path="expiry-batch"
        element={<ExpiryBatchInsights />}
      />

      <Route
        path="ai-chat-assistant"
        element={<AIChatAssistant />}
      />

    </Route>

    {/* ALERTS */}
    <Route
      path="/alerts"
      element={<Alerts />}
    >

      <Route
        index
        element={<LowStockAlerts />}
      />

      <Route
        path="low-stock-alerts"
        element={<LowStockAlerts />}
      />

      <Route
        path="expiry-alerts"
        element={<ExpiryAlerts />}
      />

      <Route
        path="delayed-po-alerts"
        element={<DelayedPOAlerts />}
      />

      <Route
        path="payment-due-alerts"
        element={<PaymentDueAlerts />}
      />

      <Route
        path="system-notifications"
        element={<SystemNotifications />}
      />

    </Route>

    {/* SETTINGS */}
    <Route
      path="/settings"
      element={<Settings />}
    >

      <Route
        index
        element={<CompanyProfile />}
      />

      <Route
        path="company-profile"
        element={<CompanyProfile />}
      />

      <Route
        path="users-roles"
        element={<UsersRoles />}
      />

      <Route
        path="product-categories"
        element={<ProductCategories />}
      />

      <Route
        path="approval-workflow"
        element={<ApprovalWorkflow />}
      />

      <Route
        path="notification-settings"
        element={<NotificationSettings />}
      />

      <Route
        path="ai-settings"
        element={<AISettings />}
      />

      <Route
        path="integrations"
        element={<Integrations />}
      />

      <Route
        path="system-preferences"
        element={<SystemPreferences />}
      />

    </Route>

    {/* USERS */}
    <Route
      path="/users"
      element={<Users />}
    />

  </Route>

</Routes>

    </BrowserRouter>

  );

}

export default App;