import { createBrowserRouter } from "react-router-dom";
import AddReview from "../Components/AddReview";
import Error404 from "../Components/Error404";
import Login from "../Components/Login";
import MyReview from "../Components/MyReview";
import Register from "../Components/Register";
import Review from "../Components/Review";
import { Service } from "../Components/Service";
import ServiceDetails from "../Components/ServiceDetails";
import Home from "../HOME/Home";
import MainLayout from "../Layout/MainLayout";
import PrivateRoute from "./PrivateRoute";

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
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/review",
        element: <Review></Review>
      },
      {
        path: "/myreview/:id",
        element: <MyReview></MyReview>
      },
      {
        path: "/services",
        element: <Service></Service>,
      },
      {
        path: `/services/:id`,
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: `/addreview/:id`,
        element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
      },
    ],
  },
  {
    path: "*",
    element: <Error404></Error404>
  },
]);
