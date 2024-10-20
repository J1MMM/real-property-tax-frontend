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
      <Stack
        width="100%"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Stack>
          <Typography variant="h6" fontWeight={600}>
            {titleText}
          </Typography>
          <Typography variant="body2">{subText}</Typography>
        </Stack>
        {actionButtons}
      </Stack>

      <Box height={`calc(100vh - ${246}px)`} width="100%">
        {children}
      </Box>
    </Box>
  );
};
