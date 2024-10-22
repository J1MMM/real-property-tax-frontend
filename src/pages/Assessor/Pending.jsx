import { useState } from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import {
  ALERT_SEV,
  CENCELS_TABLE_COLUMN,
  DATA_GRID_INITIAL_STATE,
  DATA_GRID_STYLE,
  PAGE_SIZE_OPTION,
} from "../../utils/constant";
import useData from "../../hooks/useData";
import TaxDecModal from "../../components/form/modal/TaxDecModal";
import { PageContainer } from "../../components/layout/PageContainer";
import { useRowFormatter } from "../../hooks/useRowFormatter";
import { Collapse, Stack } from "@mui/material";
import ConfirmationDialog from "../../components/shared/ConfirmationDialog";
import { useQueryClient } from "react-query";
import { v4 } from "uuid";
import dayjs from "dayjs";
import axios from "../../api/axios";
import SnackBar from "../../components/shared/SnackBar";
import { TableToolbar } from "../../components/form/table/TableToolbar";

function Pending() {
  const queryClient = useQueryClient();
  const { pendingData, isPendingData } = useData();

  const [taxdecModalOpen, setTaxdecModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedRowID, setSelectedRowID] = useState(null);
  const [readOnly, setReadOnly] = useState(true);
  const [isDisable, setIsDisable] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  const [alertShown, setAlertShown] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState(ALERT_SEV.info);
  const [formMsg, setFormMsg] = useState("");

  const handleCellDoubleClick = (params) => {
    setSelectedRowID(params?.row?.id);

    const formattedRow = useRowFormatter(params);
    setSelectedRow(formattedRow);
    setTaxdecModalOpen(true);
  };

  const handleModalClose = () => {
    setTaxdecModalOpen(false);
    setReadOnly(true);
  };

  const handleEditSumit = async () => {
    setIsDisable(true);
    try {
      const id = v4();
      console.log("submit add");
      console.log(selectedRow);

      const newFormData = {
        ...selectedRow,
        id: id,

        DATE: dayjs(selectedRow.DATE).toISOString(),
        year: dayjs(selectedRow.year).toISOString(),
        dateOfEffectivity: dayjs(selectedRow.dateOfEffectivity).toISOString(),
      };

      const response = await axios.post(
        "/api/assessor/updatePending",
        newFormData
      );
      console.log("response.data");
      console.log(response.data);

      queryClient.setQueryData("assessorData", (oldData) => [
        ...oldData,
        newFormData,
      ]);
      queryClient.setQueryData("pendingData", (oldData) =>
        oldData.filter((item) => item.id != selectedRowID)
      );
      setFormMsg(response?.data?.message);
      setAlertSeverity(ALERT_SEV.success);
      setTaxdecModalOpen(false);
    } catch (error) {
      console.log(error);
      setAlertSeverity(ALERT_SEV.error);
      setFormMsg(error?.message);
    }

    setAlertShown(true);
    setIsDisable(false);
    setConfirmationOpen(false);
  };

  const ActionButtons = () => {
    return (
      <>
        <Collapse
          in={readOnly}
          mountOnEnter
          unmountOnExit
          timeout={readOnly ? 200 : 0}
        >
          <Stack direction="row" gap={1}>
            <Button variant="outlined" onClick={handleModalClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={() => setReadOnly(false)}>
              Edit Record
            </Button>
          </Stack>
        </Collapse>
        <Collapse
          in={!readOnly}
          mountOnEnter
          unmountOnExit
          timeout={!readOnly ? 200 : 0}
        >
          <Stack direction="row" gap={1}>
            <Button variant="outlined" onClick={() => setReadOnly(true)}>
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Stack>
        </Collapse>
      </>
    );
  };

  return (
    <>
      <PageContainer>
        <DataGrid
          rows={pendingData}
          loading={isPendingData}
          columns={CENCELS_TABLE_COLUMN}
          initialState={DATA_GRID_INITIAL_STATE}
          pageSizeOptions={PAGE_SIZE_OPTION}
          disableRowSelectionOnClick
          onCellDoubleClick={handleCellDoubleClick}
          sx={DATA_GRID_STYLE}
          slots={{
            toolbar: () => (
              <TableToolbar
                titleText="PENDING  RECORDS"
                subText="Records to be filled in after subdivision"
              />
            ),
          }}
        />
      </PageContainer>

      <TaxDecModal
        open={taxdecModalOpen}
        handleClose={handleModalClose}
        row={selectedRow}
        setSelectedRow={setSelectedRow}
        readOnly={readOnly}
        actionButton={<ActionButtons />}
        setConfirmationOpen={setConfirmationOpen}
        pendingPage={true}
      />

      <ConfirmationDialog
        open={confirmationOpen}
        setOpen={setConfirmationOpen}
        confirm={handleEditSumit}
        title="Edit Tax Dec Confirmation"
        content="Are you sure you want to save this data? Once confirmed, the new data will be added to the system."
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

export default Pending;
