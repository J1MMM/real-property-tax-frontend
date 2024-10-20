import { Box, Typography } from "@mui/material";
import React from "react";

const ClassificationCustomFooter = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.04)",
        borderTop: "1px solid rgba(224, 224, 224, 1)",
        minHeight: 52,
        boxSizing: "border-box",
        bgcolor: "#EEF2F6",
      }}
    >
      {/* Columns with borders */}
      <Typography
        sx={{
          flex: 1,
          borderRight: "1px solid rgba(224, 224, 224, 1)", // Right border
          padding: "8px", // Padding inside each cell
        }}
        variant="body2"
      >
        Total:
      </Typography>

      <Typography
        sx={{
          flex: 1,
          borderRight: "1px solid rgba(224, 224, 224, 1)", // Right border
          padding: "8px",
          display: "flex", // Use flex to align content
          justifyContent: "space-between", // Space between main content and endorsement
          alignItems: "center", // Center vertically
        }}
        variant="body2"
      >
        <span>{props?.areaValueTotal || 0}</span>{" "}
        {/* Replace with your actual value */}
        <Box component="span" sx={{ marginLeft: "8px" }}>
          m²
        </Box>
      </Typography>

      <Typography
        sx={{
          flex: 1,
          borderRight: "1px solid rgba(224, 224, 224, 1)", // Right border
          padding: "8px",
        }}
        variant="body2"
      >
        {props?.marketValueTotal || 0}
      </Typography>

      <Typography
        sx={{
          flex: 1,
          borderRight: "1px solid rgba(224, 224, 224, 1)", // Right border
          padding: "8px",
        }}
        variant="body2"
      ></Typography>

      <Typography
        sx={{
          flex: 1,
          borderRight: "1px solid rgba(224, 224, 224, 1)", // Right border
          padding: "8px",
        }}
        variant="body2"
      ></Typography>

      <Typography
        sx={{
          flex: 1,
          padding: "8px", // No right border for the last column
        }}
        variant="body2"
      >
        {props?.assessedValueTotal || 0}
      </Typography>
    </Box>
  );
};

export default ClassificationCustomFooter;
