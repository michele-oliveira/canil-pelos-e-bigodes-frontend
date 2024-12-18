import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./providers/AuthProvider";
import { AnimalsProvider } from "./providers/AnimalsProvider";
import { Toaster } from "react-stacked-toast";
import router from "./router";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Toaster />
    <AuthProvider>
      <AnimalsProvider>
        <RouterProvider router={router} />
      </AnimalsProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
