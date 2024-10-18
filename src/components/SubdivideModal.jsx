import { Search } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getLatestArp, submitSubdivide } from "../api/assessorAPI";
import { SUBDIVIDE_INITIAL_DATA } from "../utils/constant";

export const SubdivideModal = ({
  open,
  setOpen,
  disabled,
  Brgy,
  handleSubmit,
  subdivideForm,
  setSubdivideForm,
}) => {
  const handleFormChange = (e) => {
    setSubdivideForm({
      ...subdivideForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearchClick = async () => {
    const n = await getLatestArp(Brgy);

    setSubdivideForm((prev) => {
      return { ...prev, latestArp: n };
    });
  };

  const handleClose = () => {
    setOpen(false);
    setSubdivideForm(SUBDIVIDE_INITIAL_DATA);
  };

  return (
    <Dialog
      open={open}
      component={"form"}
      onClose={handleClose}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <DialogTitle
        variant="h6"
        fontWeight="500"
        sx={{ bgcolor: "primary.main" }}
        color="white"
      >
        Subdivide Modal
      </DialogTitle>
      <DialogContent component={"span"} dividers>
        <DialogContentText component={"span"}>
          <TextField
            required
            disabled={disabled}
            margin="dense"
            fullWidth
            label="Input Count"
            variant="outlined"
            name="count"
            value={subdivideForm.count}
            onChange={handleFormChange}
            type="number"
            inputProps={{ min: 2, max: 1000 }} // Set the min and max values
          />

          <Stack flexDirection="row" gap={1}>
            <TextField
              required
              disabled={disabled}
              margin="dense"
              fullWidth
              label="Input the latest ARP Count"
              variant="outlined"
              name="startArpNo"
              value={subdivideForm.startArpNo}
              onChange={handleFormChange}
            />
            <TextField
              disabled={disabled}
              margin="dense"
              fullWidth
              label="Search"
              variant="outlined"
              name="latestArp"
              value={subdivideForm.latestArp}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        size="small"
                        variant="contained"
                        onClick={handleSearchClick}
                      >
                        Find Arp
                      </Button>
                    </InputAdornment>
                  ),
                  readOnly: true,
                },
              }}
            />
          </Stack>
        </DialogContentText>
      </DialogContent>
      <DialogActions component={"span"}>
        <>
          <Button
            disabled={!!disabled}
            variant="outlined"
            size="small"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            autoFocus
            disabled={!!disabled}
            variant="contained"
            size="small"
            type="submit"
          >
            {!!disabled ? (
              <Box display="flex" alignItems="center" gap={2}>
                <CircularProgress size={18} color="inherit" />
                <span>Loading...</span>
              </Box>
            ) : (
              <span>{"Generate"}</span>
            )}
          </Button>
        </>
      </DialogActions>
    </Dialog>
  );
};
