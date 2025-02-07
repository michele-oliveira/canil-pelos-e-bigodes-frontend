import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-stacked-toast";
import { AuthProvider } from "./providers/AuthProvider";
import { AnimalsProvider } from "./providers/AnimalsProvider";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import AppRouter from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Toaster />
    <AuthProvider>
      <AnimalsProvider>
        <AppRouter />
      </AnimalsProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
