import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../pages/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
