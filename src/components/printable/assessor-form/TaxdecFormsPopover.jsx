import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

export default function TaxdecFprmPopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="outlined" onClick={handleClick}>
        <ArticleOutlinedIcon fontSize="medium" color="#1A237E" />
        GENERATE FORM
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        {props.actionBttn}
      </Popover>
    </div>
  );
}
