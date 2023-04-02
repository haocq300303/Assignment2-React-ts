import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <div>
      <header className="bg-red-500 h-[64px] flex items-center">
        <Header />
      </header>
      <div className="content">
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ClientLayout;
