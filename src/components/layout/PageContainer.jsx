import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export const PageContainer = ({
  titleText,
  subText,
  actionButtons,
  children,
}) => {
  return (
    <Box sx={{ p: 2, boxSizing: "border-box" }}>
      <Box height={`calc(100vh - ${160}px)`} width="100%">
        {children}
      </Box>
    </Box>
  );
};
