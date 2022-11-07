import { createBrowserRouter } from "react-router-dom";
import Home from "../HOME/Home";
import MainLayout from "../Layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <h1>LOGIN</h1>,
      },
    ],
  },
]);
