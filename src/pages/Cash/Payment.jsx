import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import Fieldset from "../../components/Fieldset";
import { Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from 'prop-types'; // Import prop-types for prop validation

const boxStyle = {
    display: "flex",
    justifyContent: "space-between",
    mb: "10px",
  };
  

export default function Payment(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        maxWidth="md"
        open={props.open}
        onClose={props.handleClose}
        fullWidth
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
          {props.Title}
        </DialogTitle>

        <DialogContent
          dividers
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
                      <Fieldset title="Payment Details">
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                id="outlined-basic"
                label="O.R."
                variant="outlined"
              />
              <TextField
                margin="dense"
                fullWidth
                id="outlined-basic"
                label="O.R. DATE"
                variant="outlined"
              />
            </Stack>
          </Fieldset>

          <Fieldset title="Owner's Information">
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                id="outlined-basic"
                label="Owner's Name"
                variant="outlined"
              />
              <TextField
                margin="dense"
                fullWidth
                id="outlined-basic"
                label="Location"
                variant="outlined"
                value={props.row?.OwnedAddress || ""}
              />
            </Stack>
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                id="outlined-basic"
                label="PIN No."
                variant="outlined"
                
              />
              <TextField
                margin="dense"
                fullWidth
                id="outlined-basic"
                label="ARP No."
                variant="outlined"
              />
              <TextField
                margin="dense"
                fullWidth
                variant="outlined"
                id="outlined-basic"
                label="Class"
              />
            </Stack>
          </Fieldset>

          <Fieldset title="Computation">
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                label="Assessed Value"
                variant="outlined"
              />
              <TextField
                margin="dense"
                fullWidth
                label="BASIC | SEF"
                variant="outlined"
              />
              <TextField
                margin="dense"
                fullWidth
                label="GARBAGE FEE"
                variant="outlined"
              />
                            <TextField
                margin="dense"
                fullWidth
                label="TOTAL"
                variant="outlined"
              />
            </Stack>
          </Fieldset>

        </DialogContent>

        <DialogActions>
            {props.actionButton}
        </DialogActions>
      </Dialog>
    </>
  );
}

// Define PropTypes for the component
Payment.propTypes = {
  open: PropTypes.bool.isRequired,       // `open` must be a boolean and is required
  handleClose: PropTypes.func.isRequired, // `handleClose` must be a function and is required
  row: PropTypes.object                   // `row` is an object that contains the data for the selected property
};
