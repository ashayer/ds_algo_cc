import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "./app/store";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <ToastContainer pauseOnFocusLoss={false} theme="colored" />
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById("root"),
);
