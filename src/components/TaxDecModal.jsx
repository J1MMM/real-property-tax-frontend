import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel"; // Import FormControlLabel
import Checkbox from "@mui/material/Checkbox"; // Import Checkbox

// Define boxStyle
const boxStyle = {
  display: "flex",
  justifyContent: "space-between",
  mb: "10px",
};

const style = {
  maxWidth: "100%",
  width: "55%",
  height: "95vh",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  overflowY: "auto",
};

const icons = {
  "Add Taxdec": <CreateNewFolderOutlinedIcon sx={{ fontSize: 28 }} />,
};

export default function TaxDecModal(props) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        scroll={scroll}
        PaperProps={{
          sx: { ...style }, // Apply styles directly to the Paper component inside Dialog
        }}
      >
        <DialogTitle
          id="scroll-dialog-title"
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 2.5,
            backgroundColor: "primary.main",
            color: "#ffffff",
            fontWeight: 600, // Correct weight for semi-bold
          }}
        >
          TAX DECLARATION OF REAL PROPERTY
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: "10px",
            }}
          >
            <TextField
              id="td-no"
              label="T.D. No."
              variant="outlined"
              sx={{ width: "45%" }}
            />
            <TextField
              id="property-id-no"
              label="Property Identification No."
              variant="outlined"
              sx={{ width: "45%" }}
            />
          </Box>

          <fieldset>
            <legend>OWNER INFORMATION</legend>
            <Box sx={boxStyle}>
              <TextField
                sx={{ flexGrow: 1 }}
                id="outlined-basic"
                label="First Name"
                variant="outlined"
              />
              <TextField
                sx={{ flexGrow: 1 }}
                id="outlined-basic"
                label="last Name"
                variant="outlined"
              />
              <TextField
                sx={{ flexGrow: 1 }}
                id="outlined-basic"
                label="Middle Name"
                variant="outlined"
              />
            </Box>
            <Box sx={boxStyle}>
              <TextField
                sx={{ flexGrow: 1 }}
                id="outlined-basic"
                label="Address"
                variant="outlined"
              />
              <TextField
                sx={{ flexGrow: 1 }}
                id="outlined-basic"
                label="TIN No."
                variant="outlined"
              />
              <TextField
                sx={{ flexGrow: 1 }}
                id="outlined-basic"
                label="Telephone No."
                variant="outlined"
              />
            </Box>
            <fieldset>
              <legend>ADMINISTRATOR / BENEFICIAL USER</legend>
              <Box sx={boxStyle}>
                <TextField
                  sx={{ flexGrow: 1 }}
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                />
                <TextField
                  sx={{ flexGrow: 1 }}
                  id="outlined-basic"
                  label="last Name"
                  variant="outlined"
                />
                <TextField
                  sx={{ flexGrow: 1 }}
                  id="outlined-basic"
                  label="Middle Name"
                  variant="outlined"
                />
              </Box>
              <Box sx={boxStyle}>
                <TextField
                  sx={{ flexGrow: 1 }}
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                />
                <TextField
                  sx={{ flexGrow: 1 }}
                  id="outlined-basic"
                  label="TIN No."
                  variant="outlined"
                />
                <TextField
                  sx={{ flexGrow: 1 }}
                  id="outlined-basic"
                  label="Telephone No."
                  variant="outlined"
                />
              </Box>
            </fieldset>
          </fieldset>

          <fieldset>
            <legend>PROPERTY INFORMATION</legend>
            <Box sx={boxStyle}>
              <TextField
                sx={{ flexGrow: 1 }}
                id="outlined-basic"
                label="Number and Street"
                variant="outlined"
              />
              <TextField
                sx={{ flexGrow: 1 }}
                id="outlined-basic"
                label="Barangay/District"
                variant="outlined"
              />
              <TextField
                sx={{ flexGrow: 1 }}
                id="outlined-basic"
                label="Municipality & Province/City"
                variant="outlined"
              />
            </Box>
            <Box sx={boxStyle}>
              <TextField
                sx={{ flexGrow: 1 }}
                id="outlined-basic"
                label="OCT/TCT/CLOA No.."
                variant="outlined"
              />
              <TextField
                sx={{ flexGrow: 1 }}
                id="outlined-basic"
                label="Survey No."
                variant="outlined"
              />
            </Box>
            <Box sx={boxStyle}>
              <TextField
                sx={{ flexGrow: 1 }}
                id="outlined-basic"
                label="CCT"
                variant="outlined"
              />
              <TextField
                sx={{ flexGrow: 1 }}
                id="outlined-basic"
                label="Lot No"
                variant="outlined"
              />
            </Box>
            <Box sx={boxStyle}>
              <TextField
                sx={{ flexGrow: 1 }}
                id="outlined-basic"
                label="Date"
                variant="outlined"
              />
              <TextField
                sx={{ flexGrow: 1 }}
                id="outlined-basic"
                label="Block No."
                variant="outlined"
              />
            </Box>
            <fieldset>
              <legend>BOUNDARIES</legend>
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
            </fieldset>
            <legend>TAXABILITY</legend>
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
          </fieldset>
          <Button
            variant="contained"
            sx={{ display: "block", my: 2, ml: "auto" }}
          >
            Add Classification
          </Button>
          <fieldset>
            <legend>CLASSIFICATION</legend>
            <TextField
              sx={{ flexGrow: 1, width: "7vw" }}
              id="outlined-basic"
              label="Classification"
              variant="outlined"
            />
            <TextField
              sx={{ flexGrow: 1, width: "5vw" }}
              id="outlined-basic"
              label="Area"
              variant="outlined"
            />
            <TextField
              sx={{ flexGrow: 1 }}
              id="outlined-basic"
              label="Market Value"
              variant="outlined"
            />
            <TextField
              sx={{ flexGrow: 1 }}
              id="outlined-basic"
              label="Actual Use"
              variant="outlined"
            />
            <TextField
              sx={{ flexGrow: 1, width: "5vw" }}
              id="outlined-basic"
              label="Level"
              variant="outlined"
            />
            <TextField
              sx={{ flexGrow: 1 }}
              id="outlined-basic"
              label="Assessed Value"
              variant="outlined"
            />
          </fieldset>

          <fieldset className="cancels">
            <legend className="cancels">CANCELS</legend>
            <Box sx={boxStyle}>
              <TextField
                sx={{ flexGrow: 1, width: "6vw" }}
                id="outlined-basic"
                label="Cancels T.D. No."
                variant="outlined"
              />
              <TextField
                sx={{ flexGrow: 1, width: "5vw" }}
                id="outlined-basic"
                label="Owner"
                variant="outlined"
              />
            </Box>
            <Box sx={boxStyle}>
              <TextField
                sx={{ flexGrow: 1 }}
                id="outlined-basic"
                label="Previous A.V. Php"
                variant="outlined"
              />
              <TextField
                sx={{ flexGrow: 1 }}
                id="outlined-basic"
                label="Property Index Number"
                variant="outlined"
              />
            </Box>
            <Box sx={{ boxStyle }}>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-multiline-flexible"
                label="Memoranda"
                multiline
                maxRows={4}
              />
            </Box>
          </fieldset>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={props.handleClose}
            sx={{ color: "rgb(168, 37, 37)" }}
          >
            Cancel
          </Button>
          <Button>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
