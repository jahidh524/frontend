import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // Ensure this file exists

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Root element not found!");
} else {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
