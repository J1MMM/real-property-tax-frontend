import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Tab from "../../components/Tab";
import Button from "@mui/material/Button";
import { Collapse, Slide, Stack, Typography } from "@mui/material";
import {
  ALERT_SEV,
  ASSESSMENT_ROLL_COLUMN,
  ASSESSOR_TAB_LINKS,
  BOUNDARIES_DETAILS_INITIAL,
  INITIAL_FORM_DATA,
} from "../../utils/constant";
import { CreateNewFolderOutlined } from "@mui/icons-material";
import { useQuery, useQueryClient } from "react-query";
import { fetchInitialData } from "../../api/assessorAPI";
import RPTview from "./RPTview";
import AddTaxDecModal from "../../components/AddTaxDecModal";
import { v4 } from "uuid";
import useData from "../../hooks/useData";
import axios from "../../api/axios";
import ConfirmationDialog from "../../components/ConfirmationDialog";
import SnackBar from "../../components/SnackBar";
import dayjs from "dayjs";

function AssessmentRoll() {
  const [taxdecModalOpen, setTaxdecModalOpen] = useState(false);
  const [openRPTview, setOpenRPTview] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null); // State to hold clicked row data
  const [selectedRowID, setSelectedRowID] = useState(null); // State to hold clicked row data
  const [prevSelected, setPrevSelected] = useState(null); // State to hold clicked row data
  const [readOnly, setReadOnly] = useState(true);

  const [isDisable, setIsDisable] = useState(false);
  const [alertShown, setAlertShown] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState(ALERT_SEV.info);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [formMsg, setFormMsg] = useState("");

  const queryClient = useQueryClient();

  const { data, isLoading } = useData();

  const handleButtonClick = () => {
    setTaxdecModalOpen(true);
  };

  const handleCellDoubleClick = (params) => {
    setSelectedRowID(params?.row?.id);
    // format boundaries
    let Boundaries = null;
    const boundaries_initial_format = {
      land: false,
      landDetails: {},
      building: false,
      buildingDetails: {},
      machinery: false,
      machineryDetails: {},
      others: false,
      othersDetails: {},
    };

    if (Array.isArray(params?.row?.Boundaries)) {
      params?.row?.Boundaries?.map((obj) => {
        if (obj?.boundaryType == "land" && obj?.active == "true") {
          boundaries_initial_format.land = true;
          boundaries_initial_format.landDetails = obj;
        }
        if (obj?.boundaryType == "building" && obj?.active == "true") {
          boundaries_initial_format.building = true;
          boundaries_initial_format.buildingDetails = obj;
        }
        if (obj?.boundaryType == "machinery" && obj?.active == "true") {
          boundaries_initial_format.machinery = true;
          boundaries_initial_format.machineryDetails = obj;
        }
        if (obj?.boundaryType == "others" && obj?.active == "true") {
          boundaries_initial_format.others = true;
          boundaries_initial_format.othersDetails = obj;
        }
      });

      Boundaries = boundaries_initial_format;
    } else {
      Boundaries = params?.row?.Boundaries;
    }
    // format classification
    const classification = [];
    params?.row?.classification?.map((obj) => {
      const id = v4();

      classification.push({ ...obj, id });
    });

    console.log("doouble click");
    console.log(params?.row);

    setSelectedRow({ ...params.row, Boundaries, classification });
    setPrevSelected({ ...params.row, Boundaries, classification });
    setOpenRPTview(true);
  };

  const handleTransferClick = (e) => {
    const Boundaries = {
      land: false,
      landDetails: BOUNDARIES_DETAILS_INITIAL,
      building: false,
      buildingDetails: BOUNDARIES_DETAILS_INITIAL,
      machinery: false,
      machineryDetails: BOUNDARIES_DETAILS_INITIAL,
      others: false,
      othersDetails: BOUNDARIES_DETAILS_INITIAL,
    };

    const NEW_DATA = {
      ...INITIAL_FORM_DATA,
      oldArp: selectedRow?.ArpNo,
      previousOwner: `${selectedRow?.fname} ${selectedRow?.mname} ${selectedRow?.lname}`,
      previousAV: assessedValueTotal || 0,
      previousPid: selectedRow?.PID,
      Boundaries,
    };

    setSelectedRow(NEW_DATA);
    setReadOnly(false);
  };
  const handleCancelClick = () => {
    setReadOnly(true);
    setSelectedRow(prevSelected);
  };

  const totalMarketValue = selectedRow?.classification?.reduce(
    (total, property) => {
      return total + parseFloat(property?.marketValue || 0); // Accumulate the marketval
    },
    0
  );

  const assessedValueTotal = selectedRow?.classification?.reduce(
    (total, property) => {
      return total + parseFloat(property?.assessedValue || 0); // Accumulate the marketval
    },
    0
  );
  const areaTotal = selectedRow?.classification?.reduce((total, property) => {
    return total + parseFloat(property?.area || 0); // Accumulate the marketval
  }, 0);

  const handleSubmit = async () => {
    setIsDisable(true);
    const id = v4();
    console.log("submit");

    console.log(selectedRow);

    try {
      const formatedArr = {
        ...selectedRow,
        NewArp: selectedRow?.ArpNo,
        ArpNo: selectedRow?.oldArp,
        DATE: dayjs(selectedRow?.DATE).toISOString(),
        dateOfEffectivity: dayjs(selectedRow?.dateOfEffectivity).toISOString(),
        year: dayjs(selectedRow?.year).toISOString(),
      };

      console.log(formatedArr);
      const response = await axios.post("/api/assessor/cancel", formatedArr);
      console.log(response);

      queryClient.setQueryData("assessorData", (oldData) => [
        ...oldData.filter((item) => item.id != selectedRowID),
        { ...formatedArr, id },
      ]);

      setAlertShown(true);
      setAlertSeverity(ALERT_SEV.success);
      setFormMsg("ARP found and values have been moved to tax cancels");
      setOpenRPTview(false);
      setSelectedRow(INITIAL_FORM_DATA);

      setReadOnly(true);
    } catch (error) {
      console.log(error);
      setAlertShown(true);
      setAlertSeverity(ALERT_SEV.error);
      setFormMsg(error?.message);

      if (error.status == 409) {
        setFormMsg("ARP Already Exist");
      }
    }
    setIsDisable(false);
    setConfirmationOpen(false);
  };

  return (
    <>
      <Box sx={{ p: 2, boxSizing: "border-box" }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            boxSizing: "border-box",
            mb: 2,
          }}
        >
          <Stack>
            <Typography variant="h6" fontWeight={600}>
              ASSESSOR OFFICE
            </Typography>
            <Typography variant="body2">
              Office of the Property Appraiser
            </Typography>
          </Stack>
          <Stack direction="row" gap={1}>
            <Button
              // onClick={handleButtonClick}
              variant="outlined"
              // startIcon={<CreateNewFolderOutlined />}
              // disabled
            >
              consolidate
            </Button>
            <Button
              onClick={handleButtonClick}
              variant="contained"
              startIcon={<CreateNewFolderOutlined />}
            >
              Add Taxdec
            </Button>
          </Stack>
        </Box>

        <Box height={`calc(100vh - ${246}px)`} width="100%">
          <DataGrid
            checkboxSelection
            loading={isLoading}
            rows={data}
            columns={ASSESSMENT_ROLL_COLUMN}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 100,
                },
              },
            }}
            pageSizeOptions={[10, 50, 100]}
            disableRowSelectionOnClick
            onCellDoubleClick={handleCellDoubleClick} // Add the onCellDoubleClick event
            sx={{
              ".data-grid-header": {
                bgcolor: "primary.main",
                color: "#fff",
              },
              "& .MuiDataGrid-columnHeaderTitle": {
                fontWeight: "bold", // Make header title bold
              },
              "& .MuiDataGrid-cell": {
                // borderRight: "1px solid rgba(224, 224, 224, 1)", // Right border for each cell
              },
              "& .MuiDataGrid-row": {
                "&:last-child .MuiDataGrid-cell": {
                  borderBottom: "none", // Remove bottom border from last row
                },
              },
              ".MuiDataGrid-columnHeaderTitleContainer": {
                bgcolor: "primary.main",
              },
            }}
          />
        </Box>
      </Box>

      <RPTview
        open={openRPTview} // Ensure this state is passed as the open prop
        handleClose={() => setOpenRPTview(false)}
        row={selectedRow}
        setSelectedRow={setSelectedRow}
        readOnly={readOnly}
        totalMarketValue={totalMarketValue}
        areaTotal={areaTotal}
        assessedValueTotal={assessedValueTotal}
        setConfirmationOpen={setConfirmationOpen}
        setReadOnly={setReadOnly}
        actionButton={
          <>
            <Collapse
              in={readOnly}
              mountOnEnter
              unmountOnExit
              timeout={readOnly ? 200 : 0}
            >
              <Stack direction="row" gap={1}>
                <Button
                  variant="contained"
                  className="transfer"
                  onClick={handleTransferClick}
                >
                  TRANSFER
                </Button>
                <Button variant="contained">SUBDIVIDE</Button>
                <Button variant="outlined">GENERATE FORM</Button>
              </Stack>
            </Collapse>
            <Collapse
              in={!readOnly}
              mountOnEnter
              unmountOnExit
              timeout={!readOnly ? 200 : 0}
            >
              <Stack direction="row" gap={1}>
                <Button variant="outlined" onClick={handleCancelClick}>
                  cancel
                </Button>
                <Button variant="contained" type="submit">
                  submit
                </Button>
              </Stack>
            </Collapse>
          </>
        }
      />

      <AddTaxDecModal
        open={taxdecModalOpen}
        setOpen={setTaxdecModalOpen}
        handleClose={() => setTaxdecModalOpen(false)}
      />

      <ConfirmationDialog
        open={confirmationOpen}
        setOpen={setConfirmationOpen}
        confirm={handleSubmit}
        title="Transfer Tax Dec Confirmation"
        content="Are you sure you want to transfer this data? Once confirmed, the new data will be added to the system, and the previous data will be moved to the canceled records."
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

export default AssessmentRoll;
