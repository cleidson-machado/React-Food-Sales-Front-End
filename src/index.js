import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import NavMenuCSS1 from "./core/components/NavMenuCSS1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavMenuCSS1 />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
