import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/App.css"; // Import global styles
import "./styles/Navbar.css";
// Create the root element for React
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
