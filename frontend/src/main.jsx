import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { SociosProvider } from "./context/SociosContext";
import App from "./App";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <SociosProvider>
          <App />
        </SociosProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
