import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";

export const ContainerReceipt56 = ({
  children,
  actionButton,
  title,
  open,
  onClose,
  onSubmit,
  maxWidth,
}) => {
  return (
    <Dialog
      component={"form"}
      maxWidth={maxWidth || "lg"}
      open={open}
      onClose={onClose}
      fullWidth
      onSubmit={onSubmit}
      // // sx={{
      // //   "& .MuiPaper-root": {
      // //     width: "520px", // Set custom width
      // //     maxWidth: "100%", // Optional: Make it responsive
      // //     height: "100%", // Set custom height
      // //   },
      // }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "primary.main",
          color: "#ffffff",
          fontWeight: 600, // Correct weight for semi-bold
        }}
      >
        {title}
      </DialogTitle>

      <DialogContent
        dividers
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        {children}
      </DialogContent>

      <DialogActions>{actionButton}</DialogActions>
    </Dialog>
  );
};
