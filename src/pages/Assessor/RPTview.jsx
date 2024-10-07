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
  

export default function RPTview(props) {
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
          TAX DECLARATION OF REAL PROPERTY
        </DialogTitle>

        <DialogContent
          dividers
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              name="tdNo"
              label="T.D. No."
              variant="outlined"
              value={props.row?.ARPno || ""}
              sx={{ width: "45%" }}
            />

            <TextField
            name="propertyIdNo"
            label="Property Identification No."
            variant="outlined"
            value={props.row?.PropertyIndexNo || ""}
            sx={{ width: "45%" }}
            />
          </Box>
            
          <Fieldset title="Owner's Information">
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                id="outlined-basic"
                label="First Name"
                variant="outlined"
              />
              <TextField
                margin="dense"
                fullWidth
                id="outlined-basic"
                label="last Name"
                variant="outlined"
              />
              <TextField
                margin="dense"
                fullWidth
                sx={{ flexGrow: 1 }}
                id="outlined-basic"
                label="Middle Name"
                variant="outlined"
              />
            </Stack>
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                id="outlined-basic"
                label="Address"
                variant="outlined"
                value={props.row?.OwnedAddress || ""}
              />
              <TextField
                margin="dense"
                fullWidth
                id="outlined-basic"
                label="TIN No."
                variant="outlined"
              />
              <TextField
                margin="dense"
                fullWidth
                variant="outlined"
                id="outlined-basic"
                label="Telephone No."
              />
            </Stack>
          </Fieldset>

          <Fieldset title="Administrator / Beneficial User">
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                label="First Name"
                variant="outlined"
              />
              <TextField
                margin="dense"
                fullWidth
                label="last Name"
                variant="outlined"
              />
              <TextField
                margin="dense"
                fullWidth
                label="Middle Name"
                variant="outlined"
              />
            </Stack>
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                label="Address"
                variant="outlined"
              />
              <TextField
                margin="dense"
                fullWidth
                label="TIN No."
                variant="outlined"
              />
              <TextField
                margin="dense"
                fullWidth
                label="Telephone No."
                variant="outlined"
              />
            </Stack>
          </Fieldset>

          <Fieldset title="Property Information">
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                label="Number and Street"
                variant="outlined"
              />
              <TextField
                margin="dense"
                fullWidth
                label="Barangay/District"
                variant="outlined"
              />
              <TextField
                margin="dense"
                fullWidth
                label="Municipality & Province/City"
                variant="outlined"
              />
            </Stack>
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                label="OCT/TCT/CLOA No.."
                variant="outlined"
              />
              <TextField
                margin="dense"
                fullWidth
                label="Survey No."
                variant="outlined"
              />
            </Stack>
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                label="CCT"
                variant="outlined"
              />
              <TextField
                margin="dense"
                fullWidth
                label="Lot No"
                variant="outlined"
              />
            </Stack>
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                label="Date"
                variant="outlined"
              />
              <TextField
                margin="dense"
                fullWidth
                label="Block No."
                variant="outlined"
              />
            </Stack>
          </Fieldset>

          <Fieldset title="Boundaries">
            <Box sx={boxStyle}>
              <FormControlLabel
                sx={{ flexGrow: 1 }}
                control={<Checkbox />}
                label="LAND"
              />
              <FormControlLabel
                sx={{ flexGrow: 1 }}
                control={<Checkbox />}
                label="BUILDING"
              />
              <FormControlLabel
                sx={{ flexGrow: 1 }}
                control={<Checkbox />}
                label="MACHINERY"
              />
              <FormControlLabel
                sx={{ flexGrow: 1 }}
                control={<Checkbox />}
                label="OTHER"
              />
            </Box>
          </Fieldset>

          <Fieldset title="TAXABILITY">
            <FormControlLabel
              sx={{ flexGrow: 1 }}
              control={<Checkbox />}
              label="TAXABLE"
            />
            <FormControlLabel
              sx={{ flexGrow: 1 }}
              control={<Checkbox />}
              label="EXEMPT"
            />
          </Fieldset>

          <Fieldset title="CLASSIFICATION">
            <Button
              variant="contained"
              sx={{ display: "block", ml: "auto", mb: 1 }}
            >
              Add Classification
            </Button>

          </Fieldset>
          <Fieldset title="Cancel">
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                label="Cancels T.D. No."
                variant="outlined"
              />
              <TextField
                margin="dense"
                fullWidth
                label="Owner"
                variant="outlined"
              />
            </Stack>
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                label="Previous A.V. Php"
                variant="outlined"
              />
              <TextField
                margin="dense"
                fullWidth
                label="Property Index Number"
                variant="outlined"
              />
            </Stack>
            <TextField margin="dense" fullWidth label="Memoranda" />
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
RPTview.propTypes = {
  open: PropTypes.bool.isRequired,       // `open` must be a boolean and is required
  handleClose: PropTypes.func.isRequired, // `handleClose` must be a function and is required
  row: PropTypes.object                   // `row` is an object that contains the data for the selected property
};
