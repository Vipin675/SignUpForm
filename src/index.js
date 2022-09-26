import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { Userprovider } from "./context/user.context";
import { AlertProvider } from "./context/alert.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AlertProvider>
        <Userprovider>
          <App />
        </Userprovider>
      </AlertProvider>
    </BrowserRouter>
  </React.StrictMode>
);
