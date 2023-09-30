import Navbar from "../components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="bg-transparent">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
