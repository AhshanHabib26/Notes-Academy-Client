import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import HomePage from "../pages/HomePage";
import Course from "../pages/Course";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/courses",
        element: <Course />,
      },
      {
        path: "/course/:id",
        element: <Course />,
      },
    ],
  },
]);
