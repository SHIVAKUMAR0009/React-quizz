import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QuizzProvider } from "./context/QuizzProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizzProvider>
      <App />
    </QuizzProvider>
  </React.StrictMode>
);
