import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Rutas } from "./Router/Router";

ReactDOM.render(
  <React.StrictMode>
    <Rutas />
  </React.StrictMode>,
  document.getElementById("root")
);
