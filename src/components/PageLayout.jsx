import React from "react";
import { Outlet } from "react-router-dom";

export const PageLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
