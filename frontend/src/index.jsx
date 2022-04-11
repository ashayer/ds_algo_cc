import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import App from "./App.tsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.render(
  <StrictMode>
    <ToastContainer pauseOnFocusLoss={false} theme="colored" />
    <App />
  </StrictMode>,
  document.getElementById("root"),
);
