import { useState } from "react";
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
  Collapse,
  Checkbox,
} from "@mui/material";
import Fieldset from "../../components/Fieldset";
import { Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types"; // Import prop-types for prop validation
import {
  CLASSIFICATION_COLUMN,
  CLASSIFICATION_DEFAULT,
} from "../../utils/constant";

const boxStyle = {
  display: "flex",
  justifyContent: "space-between",
  mb: "10px",
};
const BOUNDARIES_DETAILS_INITIAL = {
  boundaryType: "",
  active: "",
  description: "",
  NEboundary: "",
  northBoundary: "",
  EastBoundary: "",
  SEBoundary: "",
  southBoundary: "",
  SWBoundary: "",
};

const FORM_INITIAL_DATA = {
  arp: "121345211",
  pid: "PID12345",
  fname: "John",
  mname: "Doe",
  lname: "Smith",
  Address: "123 Main St",
  tin: "123-456-789",
  tel: "123-456-7890",
  afname: "Jane",
  amname: "D.",
  alname: "Doe",
  aAdd: "456 Admin St",
  atin: "987-654-321",
  atel: "098-765-4321",
  noSt: "No. 10, St. 5",
  brgy: "Barangay 1",
  oct: "OCT123456",
  survey: "Survey 2023",
  cct: "CCT123456",
  lot: "LOT-123",
  date: "2024-09-30",
  block: "Block 1",
  taxability: "Taxable",
  qtr: 9,
  year: 2024,
  effectivity: 2024,
  //   "boundaries": {
  //     "land":"true",
  //     "building":{
  //         "haveBuilding":"true",
  //         "numberOfBuildings":2,
  //         "description":"malaki"
  //     },"machinery":{
  //         "haveMachinery":"true",
  //         "numberOfMachinery":2,
  //         "description":"apat ang gulong"
  //     }
  //   },
  boundaries: [
    // {
    //   boundaryType: "land",
    //   active: "false",
    //   description: "ito ay lupa na tuyo na",
    //   NEboundary: "194",
    //   northBoundary: "192",
    //   EastBoundary: "194",
    //   SEBoundary: "194",
    //   southBoundary: "123",
    //   SWBoundary: "12",
    // },
    // {
    //   boundaryType: "others",
    //   active: "true",
    //   description: "",
    //   NEboundary: "",
    //   northBoundary: "",
    //   EastBoundary: "",
    //   SEBoundary: "",
    //   southBoundary: "",
    //   SWBoundary: "",
    // },
  ],
  classification: [
    // {
    //   classification: "land",
    //   area: "100sqm",
    //   marketval: 100000,
    //   level: 0.15,
    //   actualUse: "Residential",
    //   assessedVal: 80000,
    // },
    // {
    //   classification: "building",
    //   area: "100sqm",
    //   marketval: 100000,
    //   level: 0.15,
    //   actualUse: "Residential",
    //   assessedVal: 80000,
    // },
  ],
  oldArp: "123012031221",
  memoranda: "article 112312312",
};
export default function RPTview(props) {
  const [open, setOpen] = useState(false);

  const [landIsActive, setLandIsActive] = useState(false);
  const [buildingIsActive, setBuildingActive] = useState(false);
  const [machineryIsActive, setMachineryActive] = useState(false);
  const [othersIsActive, setOthersActive] = useState(false);

  const [openClassificationModal, setOpenClassificationModal] = useState(false);
  const [classificationData, setClassificationData] = useState(
    CLASSIFICATION_DEFAULT
  );

  const handleChange = (e) => {
    setClassificationData({
      ...classificationData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLandChange = (e) => {
    setLandDetails({
      ...landDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleBuildingChange = (e) => {
    setBuildingDetails({
      ...buildingDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleMachineChange = (e) => {
    setMachineryDetails({
      ...machineryDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleOthersChange = (e) => {
    setOthersDetails({
      ...othersDetails,
      [e.target.name]: e.target.value,
    });
  };

  const [landDetails, setLandDetails] = useState(BOUNDARIES_DETAILS_INITIAL);
  const [buildingDetails, setBuildingDetails] = useState(
    BOUNDARIES_DETAILS_INITIAL
  );
  const [machineryDetails, setMachineryDetails] = useState(
    BOUNDARIES_DETAILS_INITIAL
  );
  const [othersDetails, setOthersDetails] = useState(
    BOUNDARIES_DETAILS_INITIAL
  );
  const [formData, setFormData] = useState(FORM_INITIAL_DATA);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              label="T.D. No."
              variant="outlined"
              sx={{ width: "45%" }}
              name="arp"
              value={formData?.arp}
              onChange={handleFormChange}
            />

            <TextField
              label="Property Identification No."
              variant="outlined"
              sx={{ width: "45%" }}
              name="pid"
              value={formData?.pid}
              onChange={handleFormChange}
            />
          </Box>

          <Fieldset title="Owner's Information">
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                label="First Name"
                variant="outlined"
                name="fname"
                value={formData?.fname}
                onChange={handleFormChange}
              />
              <TextField
                margin="dense"
                fullWidth
                id="outlined-basic"
                label="last Name"
                variant="outlined"
                name="lname"
                value={formData?.lname}
                onChange={handleFormChange}
              />
              <TextField
                margin="dense"
                fullWidth
                sx={{ flexGrow: 1 }}
                id="outlined-basic"
                label="Middle Name"
                variant="outlined"
                name="mname"
                value={formData?.mname}
                onChange={handleFormChange}
              />
            </Stack>
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                id="outlined-basic"
                label="Address"
                variant="outlined"
                name="Address"
                value={formData?.Address}
                onChange={handleFormChange}
              />
              <TextField
                margin="dense"
                fullWidth
                id="outlined-basic"
                label="TIN No."
                variant="outlined"
                name="tin"
                value={formData?.tin}
                onChange={handleFormChange}
              />
              <TextField
                margin="dense"
                fullWidth
                variant="outlined"
                id="outlined-basic"
                label="Telephone No."
                name="tel"
                value={formData?.tel}
                onChange={handleFormChange}
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
                name="afname"
                value={formData?.afname}
                onChange={handleFormChange}
              />
              <TextField
                margin="dense"
                fullWidth
                label="last Name"
                variant="outlined"
                name="alname"
                value={formData?.alname}
                onChange={handleFormChange}
              />
              <TextField
                margin="dense"
                fullWidth
                label="Middle Name"
                variant="outlined"
                name="amname"
                value={formData?.amname}
                onChange={handleFormChange}
              />
            </Stack>
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                label="Address"
                variant="outlined"
                name="aAdd"
                value={formData?.aAdd}
                onChange={handleFormChange}
              />
              <TextField
                margin="dense"
                fullWidth
                label="TIN No."
                variant="outlined"
                name="atin"
                value={formData?.atin}
                onChange={handleFormChange}
              />
              <TextField
                margin="dense"
                fullWidth
                label="Telephone No."
                variant="outlined"
                name="atel"
                value={formData?.atel}
                onChange={handleFormChange}
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
                name="noSt"
                value={formData?.noSt}
                onChange={handleFormChange}
              />
              <TextField
                margin="dense"
                fullWidth
                label="Barangay/District"
                variant="outlined"
                name="brgy"
                value={formData?.brgy}
                onChange={handleFormChange}
              />
              <TextField
                margin="dense"
                fullWidth
                label="Municipality & Province/City"
                variant="outlined"
                value={"San Pablo"}
              />
            </Stack>
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                label="OCT/TCT/CLOA No.."
                variant="outlined"
                name="oct"
                value={formData?.oct}
                onChange={handleFormChange}
              />
              <TextField
                margin="dense"
                fullWidth
                label="Survey No."
                variant="outlined"
                name="survey"
                value={formData?.survey}
                onChange={handleFormChange}
              />
            </Stack>
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                label="CCT"
                variant="outlined"
                name="cct"
                value={formData?.cct}
                onChange={handleFormChange}
              />
              <TextField
                margin="dense"
                fullWidth
                label="Lot No"
                variant="outlined"
                name="lot"
                value={formData?.lot}
                onChange={handleFormChange}
              />
            </Stack>
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                label="Date"
                variant="outlined"
                name="date"
                value={formData?.date}
                onChange={handleFormChange}
              />
              <TextField
                margin="dense"
                fullWidth
                label="Block No."
                variant="outlined"
                name="block"
                value={formData?.block}
                onChange={handleFormChange}
              />
            </Stack>
          </Fieldset>

          <Fieldset title="Boundaries">
            <Stack direction="row" justifyContent="space-between">
              <FormControlLabel
                control={<Checkbox />}
                label="LAND"
                checked={landIsActive}
                onChange={(e) => setLandIsActive(e.target.checked)}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="BUILDING"
                checked={buildingIsActive}
                onChange={(e) => setBuildingActive(e.target.checked)}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="MACHINERY"
                checked={machineryIsActive}
                onChange={(e) => setMachineryActive(e.target.checked)}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="OTHERS"
                checked={othersIsActive}
                onChange={(e) => setOthersActive(e.target.checked)}
              />
            </Stack>

            <Collapse in={landIsActive}>
              <Fieldset title="LAND">
                <Stack direction="row" gap={1}>
                  <TextField
                    margin="dense"
                    fullWidth
                    label="North"
                    variant="outlined"
                    name="northBoundary"
                    value={landDetails.northBoundary}
                    onChange={handleLandChange}
                  />
                  <TextField
                    margin="dense"
                    fullWidth
                    label="South"
                    variant="outlined"
                    name="southBoundary"
                    value={landDetails.southBoundary}
                    onChange={handleLandChange}
                  />
                  <TextField
                    margin="dense"
                    fullWidth
                    label="East"
                    variant="outlined"
                    name="EastBoundary"
                    value={landDetails.EastBoundary}
                    onChange={handleLandChange}
                  />
                  <TextField
                    margin="dense"
                    fullWidth
                    label="West"
                    variant="outlined"
                    name="westBoundary"
                    value={landDetails.westBoundary}
                    onChange={handleLandChange}
                  />
                </Stack>
                <Stack direction="row" gap={1}>
                  <TextField
                    margin="dense"
                    fullWidth
                    label="NE"
                    variant="outlined"
                    name="NEboundary"
                    value={landDetails.NEboundary}
                    onChange={handleLandChange}
                  />
                  <TextField
                    margin="dense"
                    fullWidth
                    label="SW"
                    variant="outlined"
                    name="SWBoundary"
                    value={landDetails.SWBoundary}
                    onChange={handleLandChange}
                  />

                  <TextField
                    margin="dense"
                    fullWidth
                    label="SE"
                    variant="outlined"
                    name="SEBoundary"
                    value={landDetails.SEBoundary}
                    onChange={handleLandChange}
                  />
                  <TextField
                    margin="dense"
                    fullWidth
                    label="NW"
                    variant="outlined"
                    name="NWBoundary"
                    value={landDetails.NWBoundary}
                    onChange={handleLandChange}
                  />
                </Stack>
                <TextField
                  margin="dense"
                  fullWidth
                  label="Description"
                  variant="outlined"
                />
              </Fieldset>
            </Collapse>

            <Collapse in={buildingIsActive}>
              <Fieldset title="BUILDING">
                <Stack direction="row" gap={1}>
                  <TextField
                    margin="dense"
                    fullWidth
                    label="North"
                    variant="outlined"
                  />
                  <TextField
                    margin="dense"
                    fullWidth
                    label="South"
                    variant="outlined"
                  />
                  <TextField
                    margin="dense"
                    fullWidth
                    label="East"
                    variant="outlined"
                  />
                  <TextField
                    margin="dense"
                    fullWidth
                    label="West"
                    variant="outlined"
                  />
                </Stack>
                <Stack direction="row" gap={1}>
                  <TextField
                    margin="dense"
                    fullWidth
                    label="NE"
                    variant="outlined"
                  />
                  <TextField
                    margin="dense"
                    fullWidth
                    label="SW"
                    variant="outlined"
                  />
                  <TextField
                    margin="dense"
                    fullWidth
                    label="SE"
                    variant="outlined"
                  />
                  <TextField
                    margin="dense"
                    fullWidth
                    label="NW"
                    variant="outlined"
                  />
                </Stack>
                <TextField
                  margin="dense"
                  fullWidth
                  label="Description"
                  variant="outlined"
                />
              </Fieldset>
            </Collapse>

            <Collapse in={machineryIsActive}>
              <Fieldset title="MACHINERY">
                <Stack direction="row" gap={1}>
                  <TextField
                    margin="dense"
                    fullWidth
                    label="North"
                    variant="outlined"
                  />
                  <TextField
                    margin="dense"
                    fullWidth
                    label="South"
                    variant="outlined"
                  />
                  <TextField
                    margin="dense"
                    fullWidth
                    label="East"
                    variant="outlined"
                  />
                  <TextField
                    margin="dense"
                    fullWidth
                    label="West"
                    variant="outlined"
                  />
                </Stack>
                <Stack direction="row" gap={1}>
                  <TextField
                    margin="dense"
                    fullWidth
                    label="NE"
                    variant="outlined"
                  />
                  <TextField
                    margin="dense"
                    fullWidth
                    label="SW"
                    variant="outlined"
                  />
                  <TextField
                    margin="dense"
                    fullWidth
                    label="SE"
                    variant="outlined"
                  />
                  <TextField
                    margin="dense"
                    fullWidth
                    label="NW"
                    variant="outlined"
                  />
                </Stack>
                <TextField
                  margin="dense"
                  fullWidth
                  label="Description"
                  variant="outlined"
                />
              </Fieldset>
            </Collapse>

            <Collapse in={othersIsActive}>
              <Fieldset title="OTHERS">
                <Stack direction="row" gap={1}>
                  <TextField
                    margin="dense"
                    fullWidth
                    label="North"
                    variant="outlined"
                  />
                  <TextField
                    margin="dense"
                    fullWidth
                    label="South"
                    variant="outlined"
                  />
                  <TextField
                    margin="dense"
                    fullWidth
                    label="East"
                    variant="outlined"
                  />
                  <TextField
                    margin="dense"
                    fullWidth
                    label="West"
                    variant="outlined"
                  />
                </Stack>
                <Stack direction="row" gap={1}>
                  <TextField
                    margin="dense"
                    fullWidth
                    label="NE"
                    variant="outlined"
                  />
                  <TextField
                    margin="dense"
                    fullWidth
                    label="SW"
                    variant="outlined"
                  />
                  <TextField
                    margin="dense"
                    fullWidth
                    label="SE"
                    variant="outlined"
                  />
                  <TextField
                    margin="dense"
                    fullWidth
                    label="NW"
                    variant="outlined"
                  />
                </Stack>
                <TextField
                  margin="dense"
                  fullWidth
                  label="Description"
                  variant="outlined"
                />
              </Fieldset>
            </Collapse>
          </Fieldset>

          <Fieldset title="TAXABILITY">
            <FormControlLabel control={<Checkbox />} label="TAXABLE" />
            <FormControlLabel control={<Checkbox />} label="EXEMPT" />
          </Fieldset>

          <Fieldset title="Effectively of Assessment/Reassessment">
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                label="QTR"
                variant="outlined"
              />
              <TextField
                margin="dense"
                fullWidth
                label="Year"
                variant="outlined"
              />
              <TextField
                margin="dense"
                fullWidth
                label="Date of Effectivity "
                variant="outlined"
              />
            </Stack>
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
              columns={CLASSIFICATION_COLUMN}
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
          <Fieldset title="Cancels">
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
            <TextField margin="dense" multiline fullWidth label="Memoranda" />
          </Fieldset>
        </DialogContent>
        <DialogActions>{props.actionButton}</DialogActions>
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
          {" "}
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
            // onClick={handleAddClassification}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

// Define PropTypes for the component
RPTview.propTypes = {
  open: PropTypes.bool.isRequired, // `open` must be a boolean and is required
  handleClose: PropTypes.func.isRequired, // `handleClose` must be a function and is required
  row: PropTypes.object, // `row` is an object that contains the data for the selected property
};
