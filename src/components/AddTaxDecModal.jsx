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
import {
  Collapse,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  ALERT_SEV,
  ASSESSMENT_ROLL_COLUMN,
  BOUNDARIES_DETAILS_INITIAL,
  BRGY_LIST,
  CLASSIFICATION_COLUMN,
  CLASSIFICATION_DEFAULT,
  INITIAL_FORM_DATA,
} from "../utils/constant";
import { useState } from "react";
import { v4 } from "uuid";
import FlashOnOutlined from "@mui/icons-material/FlashOnOutlined";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { BoundariesCollapsible } from "./BoundariesCollapsible";
import axios from "../api/axios";
import { NumericFormat } from "react-number-format";
import ClassificationCustomFooter from "./ClassificationCustomFooter";
import dayjs from "dayjs";
import ConfirmationDialog from "./ConfirmationDialog";
import SnackBar from "./SnackBar";
import { useQueryClient } from "react-query";
import { ClassificationTable } from "./ClassificationTable";

export default function AddTaxDecModal(props) {
  const queryClient = useQueryClient();

  const [landIsActive, setLandIsActive] = useState(false);
  const [buildingIsActive, setBuildingActive] = useState(false);
  const [machineryIsActive, setMachineryActive] = useState(false);
  const [othersIsActive, setOthersActive] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const [alertShown, setAlertShown] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState(ALERT_SEV.info);
  const [formMsg, setFormMsg] = useState("");

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const [openClassificationModal, setOpenClassificationModal] = useState(false);
  const [landDetails, setLandDetails] = useState({
    ...BOUNDARIES_DETAILS_INITIAL,
    boundaryType: "land",
  });
  const [buildingDetails, setBuildingDetails] = useState({
    ...BOUNDARIES_DETAILS_INITIAL,
    boundaryType: "building",
  });
  const [machineryDetails, setMachineryDetails] = useState({
    ...BOUNDARIES_DETAILS_INITIAL,
    boundaryType: "machinery",
  });
  const [othersDetails, setOthersDetails] = useState({
    ...BOUNDARIES_DETAILS_INITIAL,
    boundaryType: "others",
  });

  const [classificationData, setClassificationData] = useState(
    CLASSIFICATION_DEFAULT
  );

  const handleChange = (e) => {
    setClassificationData({
      ...classificationData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
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

  const handleCheckboxChange = (e) => {
    switch (e.target.name) {
      case "land": {
        setLandIsActive(e.target.checked);
        setLandDetails((prev) => ({
          ...prev,
          active: `${e.target.checked}`,
        }));
        break;
      }
      case "building": {
        setBuildingActive(e.target.checked);
        setBuildingDetails((prev) => ({
          ...prev,
          active: `${e.target.checked}`,
        }));
        break;
      }
      case "machinery": {
        setMachineryActive(e.target.checked);
        setMachineryDetails((prev) => ({
          ...prev,
          active: `${e.target.checked}`,
        }));
        break;
      }
      case "others": {
        setOthersActive(e.target.checked);
        setOthersDetails((prev) => ({
          ...prev,
          active: `${e.target.checked}`,
        }));
        break;
      }
      default:
        break;
    }
  };

  const handleAddClassification = () => {
    if (classificationData.classification != "") {
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
    }
  };

  const handleSubmit = async (e) => {
    setIsDisable(true);

    try {
      const id = v4();
      // const DATE = dayjs(formData.DATE);
      // const year = dayjs(formData.year);
      // const dateOfEffectivity = dayjs(formData.dateOfEffectivity);

      const newFormData = {
        ...formData,
        id: id,
        Boundaries: [
          landDetails,
          buildingDetails,
          machineryDetails,
          othersDetails,
        ],
        DATE: formData.DATE.toISOString(),
        year: formData.year.toISOString(),
        dateOfEffectivity: formData.dateOfEffectivity.toISOString(),
      };

      const response = await axios.post("/api/assessor/createTax", newFormData);
      console.log(response.data);

      queryClient.setQueryData("assessorData", (oldData) => [
        ...oldData,
        newFormData,
      ]);

      setAlertShown(true);
      setAlertSeverity(ALERT_SEV.success);
      setFormMsg("Tax Created Successfully");
      props?.setOpen(false);

      setFormData(INITIAL_FORM_DATA);
    } catch (error) {
      console.log(error);
      setAlertShown(true);
      setAlertSeverity(ALERT_SEV.error);
      setFormMsg(error?.message);

      if (error.status == 409) {
        setFormMsg("ARP Already Exist");
      }
    }

    setConfirmationOpen(false);
    setIsDisable(false);
  };

  const totalMarketValue = formData?.classification?.reduce(
    (total, property) => {
      return total + parseFloat(property?.marketValue); // Accumulate the marketval
    },
    0
  );

  const assessedValueTotal = formData?.classification?.reduce(
    (total, property) => {
      return total + parseFloat(property?.assessedValue); // Accumulate the marketval
    },
    0
  );
  const areaTotal = formData?.classification?.reduce((total, property) => {
    return total + parseFloat(property?.area); // Accumulate the marketval
  }, 0);

  const handleCellEdit = (id, field, value) => {
    // const updatedRows = rows.map((row) => {
    //   if (row.id === id) {
    //     return { ...row, [field]: value };
    //   }
    //   return row;
    // });
    // setRows(updatedRows);
    // console.log(id);
    // console.log(field);
    // console.log(value);
    const updatedArr = formData?.classification?.map((row) => {
      if (row?.id == id) {
        return { ...row, [field]: value };
      }
      return row;
    });
    setFormData((prev) => ({ ...prev, classification: updatedArr }));
  };

  const handleCellKeyDown = (event, cellParams) => {
    const { field, id } = event; // Get the field and id of the cell being edited
    const newValue = cellParams.target.value; // Get the current value of the input

    console.log(event);

    if (cellParams.key === "Enter") {
      // Check if Enter key was pressed
      handleCellEdit(id, field, newValue); // Call the function to edit the cell value
    }
  };

  return (
    <>
      <Dialog
        component={"form"}
        maxWidth="lg"
        open={props.open}
        onClose={props.handleClose}
        scroll="paper"
        onSubmit={(e) => {
          e.preventDefault();
          setConfirmationOpen(true);
        }}
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
              required
              label="T.D. No."
              variant="outlined"
              sx={{ width: "45%" }}
              name="ArpNo"
              value={formData?.ArpNo}
              onChange={handleFormChange}
            />

            <TextField
              label="Property Identification No."
              variant="outlined"
              sx={{ width: "45%" }}
              name="PID"
              value={formData?.PID}
              onChange={handleFormChange}
              required
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
                name="TIN"
                value={formData?.TIN}
                onChange={handleFormChange}
              />
              <TextField
                margin="dense"
                fullWidth
                variant="outlined"
                id="outlined-basic"
                label="Telephone No."
                name="Telephone"
                value={formData?.Telephone}
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
                name="AdminFname"
                value={formData?.AdminFname}
                onChange={handleFormChange}
              />
              <TextField
                margin="dense"
                fullWidth
                label="last Name"
                variant="outlined"
                name="AdminLname"
                value={formData?.AdminLname}
                onChange={handleFormChange}
              />
              <TextField
                margin="dense"
                fullWidth
                label="Middle Name"
                variant="outlined"
                name="AdminMname"
                value={formData?.AdminMname}
                onChange={handleFormChange}
              />
            </Stack>
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                label="Address"
                variant="outlined"
                name="AdminAddress"
                value={formData?.AdminAddress}
                onChange={handleFormChange}
              />
              <TextField
                margin="dense"
                fullWidth
                label="TIN No."
                variant="outlined"
                name="AdminTIN"
                value={formData?.AdminTIN}
                onChange={handleFormChange}
              />
              <TextField
                margin="dense"
                fullWidth
                label="Telephone No."
                variant="outlined"
                name="AdminTel"
                value={formData?.AdminTel}
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
                name="noAndSt"
                value={formData?.noAndSt}
                onChange={handleFormChange}
              />

              <FormControl fullWidth margin="dense">
                <InputLabel id="Barangay/District">
                  Barangay/District
                </InputLabel>
                <Select
                  labelId="Barangay/District"
                  id="demo-simple-select"
                  value={formData.Brgy}
                  required
                  name="Brgy"
                  label="Barangay/District"
                  onChange={handleFormChange}
                >
                  {BRGY_LIST.map((val, index) => (
                    <MenuItem key={index} value={val}>
                      {val}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

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
                name="Survey"
                value={formData?.Survey}
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
                name="LOT"
                value={formData?.LOT}
                onChange={handleFormChange}
              />
            </Stack>
            <Stack direction="row" gap={1}>
              <FormControl margin="dense" fullWidth>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date"
                    value={formData.DATE == null ? null : dayjs(formData.DATE)}
                    onChange={(newVal) =>
                      setFormData((prev) => ({ ...prev, DATE: newVal }))
                    }
                    slotProps={{ textField: { required: true } }}
                  />
                </LocalizationProvider>
              </FormControl>
              <TextField
                margin="dense"
                fullWidth
                label="Block No."
                variant="outlined"
                name="BLOCK"
                value={formData?.BLOCK}
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
                name="land"
                onChange={handleCheckboxChange}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="BUILDING"
                checked={buildingIsActive}
                name="building"
                onChange={handleCheckboxChange}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="MACHINERY"
                checked={machineryIsActive}
                name="machinery"
                onChange={handleCheckboxChange}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="OTHERS"
                checked={othersIsActive}
                name="others"
                onChange={handleCheckboxChange}
              />
            </Stack>

            <BoundariesCollapsible
              handleLandChange={handleLandChange}
              handleBuildingChange={handleBuildingChange}
              handleMachineChange={handleMachineChange}
              handleOthersChange={handleOthersChange}
              landIsActive={landIsActive}
              landDetails={landDetails}
              buildingIsActive={buildingIsActive}
              buildingDetails={buildingDetails}
              machineryDetails={machineryDetails}
              machineryIsActive={machineryIsActive}
              othersIsActive={othersIsActive}
              othersDetails={othersDetails}
            />
          </Fieldset>

          <Fieldset title="TAXABILITY">
            <FormControlLabel
              onClick={() =>
                setFormData((prev) => ({ ...prev, TAXABILITY: "TAXABILITY" }))
              }
              checked={formData?.TAXABILITY == "TAXABILITY"}
              control={<Checkbox />}
              label="TAXABLE"
            />
            <FormControlLabel
              checked={formData?.TAXABILITY == "exempted"}
              onClick={() =>
                setFormData((prev) => ({ ...prev, TAXABILITY: "exempted" }))
              }
              control={<Checkbox />}
              label="EXEMPT"
            />
          </Fieldset>

          <Fieldset title="Effectively of Assessment/Reassessment">
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                label="QTR"
                variant="outlined"
                name="qtr"
                value={formData.qtr}
                onChange={handleFormChange}
              />

              <FormControl margin="dense" fullWidth>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Year"
                    value={formData.year == null ? null : dayjs(formData.year)}
                    format="YYYY"
                    onChange={(newVal) =>
                      setFormData((prev) => ({ ...prev, year: newVal }))
                    }
                    slotProps={{ textField: { required: true } }}
                  />
                </LocalizationProvider>
              </FormControl>

              <FormControl margin="dense" fullWidth>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date of Effectivity"
                    value={
                      formData.dateOfEffectivity == null
                        ? null
                        : dayjs(formData.dateOfEffectivity)
                    }
                    onChange={(newVal) =>
                      setFormData((prev) => ({
                        ...prev,
                        dateOfEffectivity: newVal,
                      }))
                    }
                  />
                </LocalizationProvider>
              </FormControl>
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

            {/* <DataGrid
              onCellKeyDown={handleCellKeyDown}
              rows={formData?.classification}
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
              slots={{
                footer: () => (
                  <ClassificationCustomFooter
                    totalMarketValue={totalMarketValueTotal}
                    assessedValueTotal={assessedValueTotal}
                    areaTotal={areaTotal}
                  />
                ),
              }}
            /> */}

            <ClassificationTable
              classification={formData?.classification}
              rows={formData?.classification}
              setFormData={setFormData}
              totalMarketValue={totalMarketValue}
              assessedValueTotal={assessedValueTotal}
              areaTotal={areaTotal}
            />
          </Fieldset>
          <Fieldset title="Cancels">
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                label="Cancels T.D. No."
                variant="outlined"
                name="oldArp"
                value={formData.oldArp}
                onChange={handleFormChange}
              />
              <TextField
                margin="dense"
                fullWidth
                label="Owner"
                variant="outlined"
                name="previousOwner"
                value={formData.previousOwner}
                onChange={handleFormChange}
              />
            </Stack>
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                label="Previous A.V. Php"
                variant="outlined"
                name="previousAV"
                value={formData.previousAV}
                onChange={handleFormChange}
              />
              <TextField
                margin="dense"
                fullWidth
                label="Property Index Number"
                variant="outlined"
                name="previousPid"
                value={formData.previousPid}
                onChange={handleFormChange}
              />
            </Stack>
            <TextField
              margin="dense"
              multiline
              fullWidth
              label="Memoranda"
              name="memoranda"
              value={formData.memoranda}
              onChange={handleFormChange}
            />
          </Fieldset>
        </DialogContent>
        <DialogActions>
          <Button size="small" onClick={props.handleClose} variant="outlined">
            Cancel
          </Button>
          <Button size="small" type="submit" variant="contained">
            Submit
          </Button>
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
              type="number"
              margin="dense"
              fullWidth
              label="Area"
              variant="outlined"
              name="area"
              value={classificationData.area}
              onChange={handleChange}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">m²</InputAdornment>
                  ),
                },
              }}
            />
            {/* <TextField
              margin="dense"
              fullWidth
              label="Market Value"
              variant="outlined"
              name="marketValue"
              value={classificationData.marketValue}
              onChange={handleChange}
            /> */}

            <NumericFormat
              customInput={TextField}
              margin="dense"
              fullWidth
              label="Market Value"
              variant="outlined"
              name="marketValue"
              value={classificationData.marketValue}
              onValueChange={(values) => {
                const { value } = values; // value will be the unformatted number (e.g., 1234567)
                handleChange({
                  target: {
                    name: "marketValue",
                    value: value,
                  },
                });
              }}
              thousandSeparator=","
              allowNegative={false} // Optional, to prevent negative numbers
            />
          </Stack>
          <Stack direction="row" gap={1}>
            <TextField
              margin="dense"
              fullWidth
              label="Actual Use"
              variant="outlined"
              name="actualUse"
              value={classificationData?.actualUse}
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
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                },
              }}
            />
            {/* <TextField
              margin="dense"
              fullWidth
              label="Assessed Value"
              variant="outlined"
              name="assessedValue"
              value={classificationData.assessedValue}
              onChange={handleChange}
            /> */}

            <NumericFormat
              customInput={TextField}
              margin="dense"
              fullWidth
              label="Assessed Value"
              variant="outlined"
              name="assessedValue"
              value={classificationData.assessedValue}
              onValueChange={(values) => {
                const { value } = values; // value will be the unformatted number (e.g., 1234567)
                handleChange({
                  target: {
                    name: "assessedValue",
                    value: value,
                  },
                });
              }}
              thousandSeparator=","
              allowNegative={false} // Optional, to prevent negative numbers
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

      <ConfirmationDialog
        open={confirmationOpen}
        setOpen={setConfirmationOpen}
        confirm={handleSubmit}
        title="Add Tax Dec Confirmation"
        content="Are you sure you want to add this data? Once confirmed, it will be permanently added to the system."
        disabled={isDisable}
      />

      <SnackBar
        open={alertShown}
        onClose={setAlertShown}
        severity={alertSeverity}
        msg={formMsg}
      />
    </>
  );
}
