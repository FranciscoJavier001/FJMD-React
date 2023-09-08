import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.js"; //* Llamo al index.js Directo a la Pagina */
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
