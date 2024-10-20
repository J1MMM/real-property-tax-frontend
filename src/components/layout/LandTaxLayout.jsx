import React from "react";
import { Outlet } from "react-router-dom";
import Tab from "./Tab";
import { LANDTAX_TAB_LINKS } from "../../utils/constant";

export const LandTaxLayout = () => {
  return (
    <>
      <Tab links={LANDTAX_TAB_LINKS} />
      <Outlet />
    </>
  );
};
