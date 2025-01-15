import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import React from "react";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Animal from "./pages/Animal";
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
    path: "/animal/:animal_id",
    element: <Animal />,
  },
  {
    path: "/notices",
    element: <Notices />,
  },
  {
    path: "/report",
    element: <ReportAnimal />,
  },
  {
    path: "/report/:animal_id",
    element: <ReportAnimal />,
  },
]);

export default router;
