import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Common/Footer";
import Navbar from "../Components/Common/Navbar";

const MainLayout = () => {
  return (
    <div>
     <Navbar></Navbar>
      <Outlet></Outlet>
     <Footer></Footer>
    </div>
  );
};

export default MainLayout;
