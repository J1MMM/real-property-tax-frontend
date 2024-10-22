import {
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import React from "react";

export const TableFilterBtn = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton
        sx={{
          px: 2,
          py: 1,
          border: "1px solid #1A237E",
        }}
      />
    </GridToolbarContainer>
  );
};
