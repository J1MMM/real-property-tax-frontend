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
import { getLatestArp } from "../../../api/assessorAPI";
import { SUBDIVIDE_INITIAL_DATA } from "../../../utils/constant";
import { ContainerModal } from "../../shared/ContainerModal";

export const SubdivideModal = ({
  open,
  setOpen,
  disabled,
  Brgy,
  handleSubmit,
  subdivideForm,
  setSubdivideForm,
}) => {
  const [isDisable, setIsDisable] = useState(false);
  const handleFormChange = (e) => {
    setSubdivideForm({
      ...subdivideForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearchClick = async () => {
    setIsDisable(true);
    const n = await getLatestArp(Brgy);

    setSubdivideForm((prev) => {
      return { ...prev, latestArp: n };
    });
    setIsDisable(false);
  };

  const handleClose = () => {
    setOpen(false);
    setSubdivideForm(SUBDIVIDE_INITIAL_DATA);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  const ActionButtons = () => {
    return (
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
    );
  };
  return (
    <ContainerModal
      maxWidth="sm"
      open={open}
      onClose={handleClose}
      title="Subdivide Modal"
      onSubmit={handleOnSubmit}
      actionButton={<ActionButtons />}
    >
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
        inputProps={{ min: 2, max: 499 }} // Set the min and max values
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
                    disabled={isDisable}
                  >
                    {isDisable ? "Loading..." : "Find ARP"}
                  </Button>
                </InputAdornment>
              ),
              readOnly: true,
            },
          }}
        />
      </Stack>
    </ContainerModal>
  );
};
