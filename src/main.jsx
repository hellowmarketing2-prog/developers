import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { HashRouter } from "react-router-dom"; // ✅ change here
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <HashRouter>   {/* ✅ change here */}
        <App />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);
