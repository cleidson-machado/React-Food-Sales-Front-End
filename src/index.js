import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
<<<<<<< HEAD
import NavMenuCSS1 from "./core/components/NavMenuCSS1";
=======
import NavMenu from "./core/components/NavMenu";
>>>>>>> a60bfc315d5ca54a2af7b052a75c51646744275e

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <NavMenuCSS1 />
=======
      <NavMenu />
>>>>>>> a60bfc315d5ca54a2af7b052a75c51646744275e
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
