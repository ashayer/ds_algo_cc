import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "./app/store";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ToastContainer />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root"),
);
