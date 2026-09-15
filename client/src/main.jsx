import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";
import { InventoryProvider } from "./context/InventoryContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <AuthProvider>

  <InventoryProvider>

    <App />

  </InventoryProvider>

</AuthProvider>

  </React.StrictMode>

);