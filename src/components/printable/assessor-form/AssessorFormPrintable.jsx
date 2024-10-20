import React, { forwardRef } from "react";
import "./style.scss";
import logo1 from "../../../assets/images/seal.png";

export const AssessorFormPrintable = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="paper">
      <div className="stack space-between">
        {/* display image  */}
        <img className="logo logo-1" src={logo1} alt="logo1" />
        <img className="logo logo-2" src={logo1} alt="logo1" />
      </div>
      {/* how to access selected data */}
      <h1>{props?.row?.fname}</h1>
      <h1>{props?.row?.mname}</h1>
      <h1>{props?.row?.lname}</h1>
      <h1>content to print</h1>
      <h1>content to print</h1>
      <h1>content to print</h1>
      <h1>content to print</h1>
      <h1>content to print</h1>
      <h1>content to print</h1>
      <h1>content to print</h1>
      <h1>content to print</h1>
      <h1>content to print</h1>
    </div>
  );
});
