import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
