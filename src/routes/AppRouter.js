import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import App from "../pages/App";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Animal from "../pages/Animal";
import Notices from "../pages/Notices";
import ProtectedRoute from "./ProtectedRoute";
import ReportAnimal from "../pages/ReportAnimal";
import AdoptionRequests from "../pages/AdoptionRequests";

const AppRouter = () => {
  const { user } = useAuth();

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
      element: (
        <ProtectedRoute isAuthenticated={!!user}>
          <ReportAnimal />
        </ProtectedRoute>
      ),
    },
    {
      path: "/report/:animal_id",
      element: (
        <ProtectedRoute isAuthenticated={!!user}>
          <ReportAnimal />
        </ProtectedRoute>
      ),
    },
    {
      path: "/made-adoption-requests",
      element: (
        <ProtectedRoute isAuthenticated={!!user}>
          <AdoptionRequests type="made" />
        </ProtectedRoute>
      ),
    },
    {
      path: "/received-adoption-requests",
      element: (
        <ProtectedRoute isAuthenticated={!!user}>
          <AdoptionRequests type="received" />
        </ProtectedRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
