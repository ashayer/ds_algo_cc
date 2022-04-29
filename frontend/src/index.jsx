import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

let theme = createTheme();
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ToastContainer pauseOnFocusLoss={false} theme="colored" />
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root"),
);
