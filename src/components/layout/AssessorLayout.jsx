import React from "react";
import { ASSESSOR_TAB_LINKS } from "../../utils/constant";
import { Outlet } from "react-router-dom";
import Tab from "./Tab";

export const AssessorLayout = () => {
  return (
    <>
      <Tab links={ASSESSOR_TAB_LINKS} />
      <Outlet />
    </>
  );
};
