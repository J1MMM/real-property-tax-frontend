import { useEffect, useState } from "react";
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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Fieldset from "../../components/Fieldset";
import { Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types"; // Import prop-types for prop validation
import {
  BRGY_LIST,
  CLASSIFICATION_COLUMN,
  CLASSIFICATION_DEFAULT,
  SUBDIVIDE_INITIAL_DATA,
} from "../../utils/constant";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import ClassificationCustomFooter from "../../components/ClassificationCustomFooter";
import { ClassificationTable } from "../../components/ClassificationTable";
import { BoundariesCollapsible } from "../../components/BoundariesCollapsible";
import { v4 } from "uuid";
import { submitSubdivide } from "../../api/assessorAPI";
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
    props?.setSelectedRow((prev) => {
      return {
        ...prev,
        Boundaries: {
          ...prev.Boundaries,
          landDetails: {
            ...prev?.Boundaries?.landDetails,
            [e.target.name]: e.target.value,
          },
        },
      };
    });
  };
  const handleBuildingChange = (e) => {
    props?.setSelectedRow((prev) => {
      return {
        ...prev,
        Boundaries: {
          ...prev.Boundaries,
          buildingDetails: {
            ...prev?.Boundaries.buildingDetails,
            [e.target.name]: e.target.value,
          },
        },
      };
    });
  };
  const handleMachineChange = (e) => {
    props?.setSelectedRow((prev) => {
      return {
        ...prev,
        Boundaries: {
          ...prev.Boundaries,
          machineryDetails: {
            ...prev?.Boundaries.machineryDetails,
            [e.target.name]: e.target.value,
          },
        },
      };
    });
  };
  const handleOthersChange = (e) => {
    props?.setSelectedRow((prev) => {
      return {
        ...prev,
        Boundaries: {
          ...prev.Boundaries,
          othersDetails: {
            ...prev?.Boundaries.othersDetails,
            [e.target.name]: e.target.value,
          },
        },
      };
    });
  };

  const handleFormChange = (e) => {
    props?.setSelectedRow({
      ...props?.row,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) =>
    props.setSelectedRow((prev) => {
      return {
        ...prev,
        Boundaries: {
          ...prev.Boundaries,
          [e.target.name]: e.target.checked,
        },
      };
    });

  const handleAddClassification = () => {
    if (classificationData.classification != "") {
      const id = v4();

      props.setSelectedRow((prev) => {
        return {
          ...prev,
          classification: [
            ...prev.classification,
            { ...classificationData, id: id },
          ],
        };
      });

      setClassificationData(CLASSIFICATION_DEFAULT);
      setOpenClassificationModal(false);
    }
  };

  return (
    <>
      <Dialog
        maxWidth="md"
        open={props.open}
        onClose={() => {
          props?.setReadOnly(true);
          props?.handleClose();
        }}
        fullWidth
        component={"form"}
        onSubmit={(e) => {
          e.preventDefault();
          props?.setConfirmationOpen(true);
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
              value={props.row?.ArpNo}
              onChange={handleFormChange}
              slotProps={{
                input: {
                  readOnly: props.readOnly,
                },
              }}
            />

            <TextField
              required
              label="Property Identification No."
              variant="outlined"
              sx={{ width: "45%" }}
              name="PID"
              value={props?.row?.PID}
              onChange={handleFormChange}
              slotProps={{
                input: {
                  readOnly: props.readOnly,
                },
              }}
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
                value={props?.row?.fname}
                onChange={handleFormChange}
                slotProps={{
                  input: {
                    readOnly: props.readOnly,
                  },
                }}
              />
              <TextField
                margin="dense"
                fullWidth
                id="outlined-basic"
                label="last Name"
                variant="outlined"
                name="lname"
                value={props?.row?.lname}
                onChange={handleFormChange}
                slotProps={{
                  input: {
                    readOnly: props.readOnly,
                  },
                }}
              />
              <TextField
                margin="dense"
                fullWidth
                sx={{ flexGrow: 1 }}
                id="outlined-basic"
                label="Middle Name"
                variant="outlined"
                name="mname"
                value={props?.row?.mname}
                onChange={handleFormChange}
                slotProps={{
                  input: {
                    readOnly: props.readOnly,
                  },
                }}
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
                value={props?.row?.Address}
                onChange={handleFormChange}
                slotProps={{
                  input: {
                    readOnly: props.readOnly,
                  },
                }}
              />
              <TextField
                margin="dense"
                fullWidth
                id="outlined-basic"
                label="TIN No."
                variant="outlined"
                name="TIN"
                value={props?.row?.TIN}
                onChange={handleFormChange}
                slotProps={{
                  input: {
                    readOnly: props.readOnly,
                  },
                }}
              />
              <TextField
                margin="dense"
                fullWidth
                variant="outlined"
                id="outlined-basic"
                label="Telephone No."
                name="Telephone"
                value={props.row?.Telephone}
                onChange={handleFormChange}
                slotProps={{
                  input: {
                    readOnly: props.readOnly,
                  },
                }}
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
                value={props?.row?.AdminFname}
                onChange={handleFormChange}
                slotProps={{
                  input: {
                    readOnly: props.readOnly,
                  },
                }}
              />
              <TextField
                margin="dense"
                fullWidth
                label="last Name"
                variant="outlined"
                name="AdminLname"
                value={props?.row?.AdminLname}
                onChange={handleFormChange}
                slotProps={{
                  input: {
                    readOnly: props.readOnly,
                  },
                }}
              />
              <TextField
                margin="dense"
                fullWidth
                label="Middle Name"
                variant="outlined"
                name="AdminMname"
                value={props?.row?.AdminMname}
                onChange={handleFormChange}
                slotProps={{
                  input: {
                    readOnly: props.readOnly,
                  },
                }}
              />
            </Stack>
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                label="Address"
                variant="outlined"
                name="AdminAddress"
                value={props?.row?.AdminAddress}
                onChange={handleFormChange}
                slotProps={{
                  input: {
                    readOnly: props.readOnly,
                  },
                }}
              />
              <TextField
                margin="dense"
                fullWidth
                label="TIN No."
                variant="outlined"
                name="AdminTIN"
                value={props?.row?.AdminTIN}
                onChange={handleFormChange}
                slotProps={{
                  input: {
                    readOnly: props.readOnly,
                  },
                }}
              />
              <TextField
                margin="dense"
                fullWidth
                label="Telephone No."
                variant="outlined"
                name="AdminTel"
                value={props?.row?.AdminTel}
                onChange={handleFormChange}
                slotProps={{
                  input: {
                    readOnly: props.readOnly,
                  },
                }}
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
                value={props?.row?.noAndSt}
                onChange={handleFormChange}
                slotProps={{
                  input: {
                    readOnly: props.readOnly,
                  },
                }}
              />
              {/* <TextField
                required
                margin="dense"
                fullWidth
                label="Barangay/District"
                variant="outlined"
                name="Brgy"
                value={props?.row?.Brgy}
                onChange={handleFormChange}
                slotProps={{
                  input: {
                    readOnly: props.readOnly,
                  },
                }}
              /> */}

              <FormControl fullWidth margin="dense">
                <InputLabel id="Barangay/District">
                  Barangay/District
                </InputLabel>
                <Select
                  labelId="Barangay/District"
                  id="demo-simple-select"
                  value={props?.row?.Brgy}
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
                slotProps={{
                  input: {
                    readOnly: props.readOnly,
                  },
                }}
              />
            </Stack>
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                label="OCT/TCT/CLOA No.."
                variant="outlined"
                name="oct"
                value={props?.row?.oct}
                onChange={handleFormChange}
                slotProps={{
                  input: {
                    readOnly: props.readOnly,
                  },
                }}
              />
              <TextField
                margin="dense"
                fullWidth
                label="Survey No."
                variant="outlined"
                name="Survey"
                value={props?.row?.Survey}
                onChange={handleFormChange}
                slotProps={{
                  input: {
                    readOnly: props.readOnly,
                  },
                }}
              />
            </Stack>
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                label="CCT"
                variant="outlined"
                name="cct"
                value={props?.row?.cct}
                onChange={handleFormChange}
                slotProps={{
                  input: {
                    readOnly: props.readOnly,
                  },
                }}
              />
              <TextField
                margin="dense"
                fullWidth
                label="Lot No"
                variant="outlined"
                name="LOT"
                value={props?.row?.LOT}
                onChange={handleFormChange}
                slotProps={{
                  input: {
                    readOnly: props.readOnly,
                  },
                }}
              />
            </Stack>
            <Stack direction="row" gap={1}>
              <FormControl margin="dense" fullWidth>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date"
                    value={
                      props?.row?.DATE == null ? null : dayjs(props?.row?.DATE)
                    }
                    readOnly={props.readOnly}
                    onChange={(newVal) =>
                      props?.setSelectedRow((prev) => ({
                        ...prev,
                        DATE: newVal,
                      }))
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
                value={props?.row?.BLOCK}
                onChange={handleFormChange}
                slotProps={{
                  input: {
                    readOnly: props.readOnly,
                  },
                }}
              />
            </Stack>
          </Fieldset>

          <Fieldset title="Boundaries">
            <Stack direction="row" justifyContent="space-between">
              <FormControlLabel
                control={<Checkbox />}
                label="LAND"
                checked={props?.row?.Boundaries?.land}
                name="land"
                onChange={handleCheckboxChange}
                disabled={props?.readOnly}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="BUILDING"
                checked={props?.row?.Boundaries?.building}
                name="building"
                onChange={handleCheckboxChange}
                disabled={props?.readOnly}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="MACHINERY"
                checked={props?.row?.Boundaries?.machinery}
                name="machinery"
                onChange={handleCheckboxChange}
                disabled={props?.readOnly}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="OTHERS"
                checked={props?.row?.Boundaries?.others}
                name="others"
                onChange={handleCheckboxChange}
                disabled={props?.readOnly}
              />
            </Stack>

            <BoundariesCollapsible
              handleLandChange={handleLandChange}
              handleBuildingChange={handleBuildingChange}
              handleMachineChange={handleMachineChange}
              handleOthersChange={handleOthersChange}
              landIsActive={props?.row?.Boundaries?.land}
              buildingIsActive={props?.row?.Boundaries?.building}
              machineryIsActive={props?.row?.Boundaries?.machinery}
              othersIsActive={props?.row?.Boundaries?.others}
              landDetails={props?.row?.Boundaries?.landDetails}
              buildingDetails={props?.row?.Boundaries?.buildingDetails}
              machineryDetails={props?.row?.Boundaries?.machineryDetails}
              othersDetails={props?.row?.Boundaries?.othersDetails}
              readOnly={props.readOnly}
            />
          </Fieldset>

          <Fieldset title="TAXABILITY">
            <FormControlLabel
              control={<Checkbox />}
              label="TAXABLE"
              checked={props?.row?.TAXABILITY == "TAXABILITY"}
              onClick={() =>
                props?.setSelectedRow((prev) => ({
                  ...prev,
                  TAXABILITY: "TAXABILITY",
                }))
              }
              disabled={props?.readOnly}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="EXEMPT"
              checked={props?.row?.TAXABILITY == "exempted"}
              onClick={() =>
                props?.setSelectedRow((prev) => ({
                  ...prev,
                  TAXABILITY: "exempted",
                }))
              }
              disabled={props?.readOnly}
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
                value={props.row?.qtr}
                onChange={handleFormChange}
                slotProps={{
                  input: {
                    readOnly: props.readOnly,
                  },
                }}
              />
              {/* <TextField
                margin="dense"
                fullWidth
                label="Year"
                variant="outlined"
                value={props.row?.year}
              /> */}

              <FormControl margin="dense" fullWidth>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Year"
                    value={
                      props?.row?.year == null ? null : dayjs(props?.row?.year)
                    }
                    format="YYYY"
                    readOnly={props.readOnly}
                    onChange={(newVal) =>
                      props?.setSelectedRow((prev) => ({
                        ...prev,
                        year: newVal,
                      }))
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
                      props?.row?.dateEffectivity == null
                        ? null
                        : dayjs(props?.row?.dateEffectivity)
                    }
                    readOnly={props.readOnly}
                    onChange={(newVal) =>
                      props?.setSelectedRow((prev) => ({
                        ...prev,
                        dateOfEffectivity: newVal,
                      }))
                    }
                    slotProps={{ textField: { required: true } }}
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
              disabled={props?.readOnly}
            >
              Add Classification
            </Button>

            <ClassificationTable
              classification={props?.row?.classification}
              // rows={formData?.classification}
              setFormData={props?.setSelectedRow}
              totalMarketValue={props?.totalMarketValue || 0}
              assessedValueTotal={props?.assessedValueTotal || 0}
              areaTotal={props?.areaTotal || 0}
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
                value={props.row?.oldArp}
                onChange={handleFormChange}
                slotProps={{
                  input: {
                    readOnly: props.readOnly,
                  },
                }}
              />
              <TextField
                margin="dense"
                fullWidth
                label="Owner"
                variant="outlined"
                name="previousOwner"
                value={props.row?.previousOwner}
                onChange={handleFormChange}
                slotProps={{
                  input: {
                    readOnly: props.readOnly,
                  },
                }}
              />
            </Stack>
            <Stack direction="row" gap={1}>
              <TextField
                margin="dense"
                fullWidth
                label="Previous A.V. Php"
                variant="outlined"
                name="previousAV"
                value={props.row?.previousAV}
                onChange={handleFormChange}
                slotProps={{
                  input: {
                    readOnly: props.readOnly,
                  },
                }}
              />
              <TextField
                margin="dense"
                fullWidth
                label="Property Index Number"
                variant="outlined"
                name="previousPid"
                value={props.row?.previousPid}
                onChange={handleFormChange}
                slotProps={{
                  input: {
                    readOnly: props.readOnly,
                  },
                }}
              />
            </Stack>
            <TextField
              margin="dense"
              multiline
              fullWidth
              label="Memoranda"
              name="memoranda"
              value={props.row?.memoranda}
              onChange={handleFormChange}
              slotProps={{
                input: {
                  readOnly: props.readOnly,
                },
              }}
            />
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
              slotProps={{
                input: {
                  readOnly: props.readOnly,
                },
              }}
            />
            <TextField
              margin="dense"
              fullWidth
              label="Area"
              variant="outlined"
              name="area"
              value={classificationData.area}
              onChange={handleChange}
              slotProps={{
                input: {
                  readOnly: props.readOnly,
                },
              }}
            />
            <TextField
              margin="dense"
              fullWidth
              label="Market Value"
              variant="outlined"
              name="marketValue"
              value={classificationData.marketValue}
              onChange={handleChange}
              slotProps={{
                input: {
                  readOnly: props.readOnly,
                },
              }}
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
              slotProps={{
                input: {
                  readOnly: props.readOnly,
                },
              }}
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
                  readOnly: props.readOnly,
                },
              }}
            />

            <TextField
              margin="dense"
              fullWidth
              label="Assessed Value"
              variant="outlined"
              name="assessedValue"
              value={classificationData.assessedValue}
              onChange={handleChange}
              slotProps={{
                input: {
                  readOnly: props.readOnly,
                },
              }}
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

// Define PropTypes for the component
RPTview.propTypes = {
  open: PropTypes.bool.isRequired, // `open` must be a boolean and is required
  handleClose: PropTypes.func.isRequired, // `handleClose` must be a function and is required
  row: PropTypes.object, // `row` is an object that contains the data for the selected property
};
