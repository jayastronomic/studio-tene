import React from "react";
import { Outlet } from "react-router-dom";
import LinkTree from "./LinkTree";

const Wrapper = () => {
  return (
    <div className="relative">
      <LinkTree />
      <Outlet />
    </div>
  );
};

export default Wrapper;
