import React from "react";
import Tab from "./Tab";
import { CASH_TAB_LINKS } from "../../utils/constant";
import { Outlet } from "react-router-dom";

export const CashLayout = () => {
  return (
    <>
      <Tab links={CASH_TAB_LINKS} />
      <Outlet />
    </>
  );
};
