import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import LinkTree from "./LinkTree";

const Wrapper = () => {
  return (
    <div className="relative flex flex-col h-screen p-2 ">
      <LinkTree />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Wrapper;
