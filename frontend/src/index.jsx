import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "./app/store.ts";
import App from "./App.tsx";
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
