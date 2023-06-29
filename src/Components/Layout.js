import React from "react";
import {Outlet} from "react-router-dom";
import BarterNavbar from "./BarterNavbar";

const Layout = () => {
  return (
    <div>
      <BarterNavbar />
      <Outlet />
    </div>
  );
};

export default Layout;