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
import Fieldset from "./Fieldset";
import { Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { ASSESSMENT_ROLL_COLUMN } from "../utils/constant";
import { useState } from "react";
import { v4 } from "uuid";

// Define boxStyle
const boxStyle = {
  display: "flex",
  justifyContent: "space-between",
  mb: "10px",
};

const classificationTaableColumn = [
  {
    field: "classification",
    headerName: "Classification",
    flex: 1,
    editable: true,
    headerClassName: "data-grid-header",
  },
  {
    field: "area",
    headerName: "Area",
    flex: 1,
    editable: true,
    headerClassName: "data-grid-header",
  },
  {
    field: "marketValue",
    headerName: "Market Value",
    flex: 1,
    editable: true,
    headerClassName: "data-grid-header",
  },
  {
    field: "actualUse",
    headerName: "Actual Use",
    flex: 1,
    editable: true,
    headerClassName: "data-grid-header",
  },
  {
    field: "level",
    headerName: "Level",
    flex: 1,
    editable: true,
    headerClassName: "data-grid-header",
  },
  {
    field: "assessedValue",
    headerName: "Assessed Value",
    editable: true,
    headerClassName: "data-grid-header",
    flex: 1,
  },
];

const icons = {
  "Add Taxdec": <CreateNewFolderOutlinedIcon sx={{ fontSize: 28 }} />,
};

export default function TaxDecModal(props) {
  const [formData, setFormData] = useState({
    tdNo: "",
    pin: "",
    classification: [],
  });

  const CLASSIFICATION_DEFAULT = {
    classification: "",
    area: "",
    marketValue: "",
    actualUse: "",
    level: "",
    assessedValue: "",
  };

  const [classificationData, setClassificationData] = useState(
    CLASSIFICATION_DEFAULT
  );

  const handleChange = (e) => {
    setClassificationData({
      ...classificationData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddClassification = () => {
    const id = v4();

    setFormData((prev) => ({
      ...formData,
      classification: [
        ...prev.classification,
        { ...classificationData, id: id },
      ],
    }));

    console.log(formData);

    setClassificationData(CLASSIFICATION_DEFAULT);
    setOpenClassificationModal(false);
  };

  const [openClassificationModal, setOpenClassificationModal] = useState(false);

  return (
    <>
      <Dialog
        maxWidth="lg"
        open={props.open}
        onClose={props.handleClose}
        scroll="paper"
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
              sx={{ width: "45%" }}
            />

            <TextField
              name="propertyIdNo"
              label="Property Identification No."
              variant="outlined"
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
              onClick={() => setOpenClassificationModal(true)}
            >
              Add Classification
            </Button>

            <DataGrid
              onCellEditStart={(e, n) => {
                console.log(e);
              }}
              onCellKeyDown={(e, n) => {
                console.log(n.target.value);
              }}
              hideFooter
              rows={formData.classification}
              columns={classificationTaableColumn}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              pageSizeOptions={[10]}
              autoHeight
              disableRowSelectionOnClick
              sx={{
                ".data-grid-header": {
                  bgcolor: "primary.main",
                  color: "#fff",
                },
                "& .MuiDataGrid-columnHeaderTitle": {
                  fontWeight: "bold", // Make header title bold
                },
                "& .MuiDataGrid-cell": {
                  borderRight: "1px solid rgba(224, 224, 224, 1)", // Right border for each cell
                },
                "& .MuiDataGrid-row": {
                  "&:last-child .MuiDataGrid-cell": {
                    borderBottom: "none", // Remove bottom border from last row
                  },
                },
              }}
            />
          </Fieldset>
          {/* <Fieldset title="Cancel">
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
          </Fieldset> */}
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

      <Dialog
        maxWidth="sm"
        open={openClassificationModal}
        onClose={() => setOpenClassificationModal(false)}
        scroll="paper"
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
          Add Classification
        </DialogTitle>

        <DialogContent
          dividers
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Stack direction="row" gap={1}>
            <TextField
              margin="dense"
              fullWidth
              label="Classification"
              variant="outlined"
              name="classification"
              value={classificationData.classification}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              fullWidth
              label="Area"
              variant="outlined"
              name="area"
              value={classificationData.area}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              fullWidth
              label="Market Value"
              variant="outlined"
              name="marketValue"
              value={classificationData.marketValue}
              onChange={handleChange}
            />
          </Stack>
          <Stack direction="row" gap={1}>
            <TextField
              margin="dense"
              fullWidth
              label="Actual Use"
              variant="outlined"
              name="actualUse"
              value={classificationData.actualUse}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              fullWidth
              label="Level"
              variant="outlined"
              name="level"
              value={classificationData.level}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              fullWidth
              label="Assessed Value"
              variant="outlined"
              name="assessedValue"
              value={classificationData.assessedValue}
              onChange={handleChange}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={() => setOpenClassificationModal(false)}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={handleAddClassification}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
