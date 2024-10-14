import React from "react";
import { Outlet } from "react-router-dom";
import { LANDTAX_TAB_LINKS } from "../../utils/constant";
import Tab from "../../components/Tab";

export const LandTaxLayout = () => {
  return (
    <>
      <Tab links={LANDTAX_TAB_LINKS} />
      <Outlet />
    </>
  );
};
