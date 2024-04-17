import React from "react";
import ReactDOM from "react-dom/client";
import "./index-tailwincss.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

//## APP _STEP 00 | START APP

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
