import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "./pages/App";
import React from "react";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Adopted from "./pages/Adopted";
import Notices from "./pages/Notices";
import ReportAnimal from "./pages/ReportAnimal";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Register />,
    },
    {
      path: "/adopted",
      element: <Adopted />,
    },
    {
      path: "/notices",
      element: <Notices />,
    },
    {
      path: "/report",
      element: <ReportAnimal />,
    },
  ]);

export default router;