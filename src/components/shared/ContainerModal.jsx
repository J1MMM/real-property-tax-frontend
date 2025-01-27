import { CloseRounded } from "@mui/icons-material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React from "react";

export const ContainerModal = ({
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
      maxWidth={maxWidth || "md"}
      open={open}
      fullWidth
      onSubmit={onSubmit}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "primary.main",
          color: "#ffffff",
          fontWeight: 600, // Correct weight for semi-bold
        }}
      >
        {title}
        <IconButton sx={{ color: "#FFF" }} onClick={onClose}>
          <CloseRounded />
        </IconButton>
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
