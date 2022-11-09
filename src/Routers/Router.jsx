import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login";
import { Service } from "../Components/Service";
import ServiceDetails from "../Components/ServiceDetails";
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
        element: <Login></Login>,
      },
      {
        path: "/services",
        element: <Service></Service>,
      },
      {
        path: `/services/:id`,
        element: <ServiceDetails></ServiceDetails>,
      },
    ],
  },
]);
