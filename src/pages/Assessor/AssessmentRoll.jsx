import { useRef, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { Collapse, Stack } from "@mui/material";
import {
  ALERT_SEV,
  ASSESSMENT_ROLL_COLUMN,
  BOUNDARIES_INITIAL_STATE,
  DATA_GRID_INITIAL_STATE,
  DATA_GRID_STYLE,
  INITIAL_FORM_DATA,
  PAGE_SIZE_OPTION,
  SUBDIVIDE_INITIAL_DATA,
} from "../../utils/constant";
import { CreateNewFolderOutlined } from "@mui/icons-material";
import { useQueryClient } from "react-query";
import AddTaxDecModal from "../../components/form/modal/AddTaxDecModal";
import { v4 } from "uuid";
import useData from "../../hooks/useData";
import axios from "../../api/axios";
import ConfirmationDialog from "../../components/shared/ConfirmationDialog";
import SnackBar from "../../components/shared/SnackBar";
import dayjs from "dayjs";
import { SubdivideModal } from "../../components/form/modal/SubdivideModal";
import { useRowFormatter } from "../../hooks/useRowFormatter";
import { formatFullname, sumFieldInArray } from "../../utils/helper";
import { PageContainer } from "../../components/layout/PageContainer";
import TaxDecModal from "../../components/form/modal/TaxDecModal";
import { useReactToPrint } from "react-to-print";
import { AssessorFormPrintable } from "../../components/printable/assessor-form/AssessorFormPrintable";
import { PrintableFormModal } from "../../components/form/modal/PrintableFormModal";
import { TableToolbar } from "../../components/form/table/TableToolbar";

function AssessmentRoll() {
  const queryClient = useQueryClient();

  const { assessorData, isAssessorLoading } = useData();

  const [taxdecModalOpen, setTaxdecModalOpen] = useState(false);
  const [openRPTview, setOpenRPTview] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedArpNos, setSelectedArpNos] = useState([]);
  const [selectedRowID, setSelectedRowID] = useState(null);
  const [prevSelected, setPrevSelected] = useState(null);
  const [readOnly, setReadOnly] = useState(true);

  const [isDisable, setIsDisable] = useState(false);
  const [alertShown, setAlertShown] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState(ALERT_SEV.info);
  const [formMsg, setFormMsg] = useState("");
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [addTaxConfirmation, setAddTaxConfirmation] = useState(false);

  const [subdivideForm, setSubdivideForm] = useState(SUBDIVIDE_INITIAL_DATA);
  const [subdivideModalOpen, setSubdivideModalOpen] = useState(false);

  const [formDataNew, setFormDataNew] = useState(INITIAL_FORM_DATA);
  const [printableFormOpen, setPrintableFormOpen] = useState(false);

  const handleCellDoubleClick = (params) => {
    setSelectedRowID(params?.row?.id);

    const formattedRow = useRowFormatter(params);

    setSelectedRow(formattedRow);
    setPrevSelected(formattedRow);
    setOpenRPTview(true);
  };

  const handleTransferClick = (e) => {
    const Boundaries = BOUNDARIES_INITIAL_STATE;

    const assessedValueTotal = sumFieldInArray(
      selectedRow?.classification || [],
      "assessedValue"
    );

    const new_data = {
      ...INITIAL_FORM_DATA,
      oldArp: selectedRow?.ArpNo,
      previousOwner: formatFullname(selectedRow),
      previousAV: assessedValueTotal || 0,
      previousPid: selectedRow?.PID,
      Boundaries,
    };

    setSelectedRow(new_data);
    setReadOnly(false);
  };

  const handleCancelTransferClick = () => {
    setReadOnly(true);
    setSelectedRow(prevSelected);
  };

  const handleAddTaxSubmit = async (e) => {
    setIsDisable(true);

    try {
      const id = v4();
      console.log("submit add");
      console.log(formDataNew);

      const newFormData = {
        ...formDataNew,
        id: id,

        DATE: dayjs(formDataNew.DATE).toISOString(),
        year: dayjs(formDataNew.year).toISOString(),
        dateOfEffectivity: dayjs(formDataNew.dateOfEffectivity).toISOString(),
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
      setTaxdecModalOpen(false);

      setFormDataNew(INITIAL_FORM_DATA);
    } catch (error) {
      console.log(error);
      setAlertShown(true);
      setAlertSeverity(ALERT_SEV.error);
      setFormMsg(error?.message);

      if (error.status == 409) {
        setFormMsg("ARP Already Exist");
      }
    }

    setAddTaxConfirmation(false);
    setIsDisable(false);
  };

  const handleTransferSubmit = async () => {
    setIsDisable(true);
    const id = v4();

    try {
      const formatedArr = {
        ...selectedRow,
        NewArp: selectedRow?.ArpNo,
        ArpNo: selectedRow?.oldArp,
        DATE: dayjs(selectedRow?.DATE).toISOString(),
        dateOfEffectivity: dayjs(selectedRow?.dateOfEffectivity).toISOString(),
        year: dayjs(selectedRow?.year).toISOString(),
      };

      const response = await axios.post("/api/assessor/cancel", formatedArr);
      console.log(response);

      await queryClient.setQueryData("assessorData", (oldData) => [
        ...oldData.filter((item) => item.id != selectedRowID),
        { ...formatedArr, id },
      ]);
      await queryClient.invalidateQueries("cancelsData");

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

  const handleSubdivideClick = () => {
    setSubdivideModalOpen(true);
    setSubdivideForm((prev) => ({ ...prev, ArpNo: selectedRow?.ArpNo }));
  };

  const handleTaxModalClose = () => {
    setReadOnly(true);
    setOpenRPTview(false);
  };
  const handleSubdivideSubmit = async () => {
    setIsDisable(true);
    try {
      const formatedData = {
        ...subdivideForm,
        count: parseInt(subdivideForm?.count),
        startArpNo: parseInt(subdivideForm?.startArpNo),
      };

      const response = await axios.post(
        "/api/assessor/subdivide",
        formatedData
      );
      console.log("response");
      console.log(response);

      setAlertSeverity(ALERT_SEV.success);
      if (response.data?.message == "auto rollback of transaction") {
        setFormMsg(response.data?.error);
        setAlertSeverity(ALERT_SEV.error);
        setAlertShown(true);
        setIsDisable(false);
        return;
      }
      setFormMsg(response.data?.message);
      await queryClient.setQueryData("assessorData", (oldData) =>
        oldData.filter((item) => item.id != selectedRowID)
      );
      await queryClient.invalidateQueries("pendingData");
      await queryClient.invalidateQueries("cancelsData");
      setOpenRPTview(false);
    } catch (error) {
      console.log(error);
      setAlertSeverity(ALERT_SEV.error);
      setFormMsg(error?.message);
    }
    setAlertShown(true);
    setIsDisable(false);
    setSubdivideModalOpen(false);
  };

  const handleSelectionChange = (newSelection) => {
    // Get only the ArpNo field for the selected IDs
    const selectedArpNosData = newSelection?.map((id) => {
      const selectedRow = assessorData?.find((row) => row.id === id);
      return selectedRow ? selectedRow?.ArpNo : null; // Return only the ArpNo
    });
    setSelectedArpNos(selectedArpNosData);
  };

  const TaxdecModalButtons = () => {
    return (
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
            <Button variant="contained" onClick={handleSubdivideClick}>
              SUBDIVIDE
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                setOpenRPTview(false);
                setPrintableFormOpen(true);
              }}
            >
              GENERATE FORM
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
            <Button variant="outlined" onClick={handleCancelTransferClick}>
              cancel
            </Button>
            <Button variant="contained" type="submit">
              submit
            </Button>
          </Stack>
        </Collapse>
      </>
    );
  };

  const PageButton = () => {
    return (
      <Stack direction="row" gap={1}>
        <Button variant="outlined">consolidate</Button>
        <Button
          onClick={() => setTaxdecModalOpen(true)}
          variant="contained"
          startIcon={<CreateNewFolderOutlined />}
        >
          Add Taxdec
        </Button>
      </Stack>
    );
  };

  return (
    <>
      <PageContainer>
        <DataGrid
          checkboxSelection
          loading={isAssessorLoading}
          rows={assessorData}
          columns={ASSESSMENT_ROLL_COLUMN}
          initialState={DATA_GRID_INITIAL_STATE}
          pageSizeOptions={PAGE_SIZE_OPTION}
          disableRowSelectionOnClick
          onCellDoubleClick={handleCellDoubleClick}
          onRowSelectionModelChange={handleSelectionChange}
          sx={DATA_GRID_STYLE}
          slots={{
            toolbar: () => (
              <TableToolbar
                titleText="ASSESSOR OFFICE"
                subText="Office of the Property Appraiser"
                actionBtn={<PageButton />}
              />
            ),
          }}
        />
      </PageContainer>

      <TaxDecModal
        open={openRPTview}
        handleClose={handleTaxModalClose}
        row={selectedRow}
        setSelectedRow={setSelectedRow}
        readOnly={readOnly}
        setConfirmationOpen={setConfirmationOpen}
        setReadOnly={setReadOnly}
        actionButton={<TaxdecModalButtons />}
      />

      <AddTaxDecModal
        open={taxdecModalOpen}
        handleClose={() => setTaxdecModalOpen(false)}
        row={formDataNew}
        setSelectedRow={setFormDataNew}
        setConfirmationOpen={setAddTaxConfirmation}
        setReadOnly={setReadOnly}
        // actionButton={<TaxdecModalButtons />}
      />

      <SubdivideModal
        open={subdivideModalOpen}
        setOpen={setSubdivideModalOpen}
        Brgy={selectedRow?.Brgy || null}
        subdivideForm={subdivideForm}
        setSubdivideForm={setSubdivideForm}
        handleSubmit={handleSubdivideSubmit}
        disabled={isDisable}
      />

      <ConfirmationDialog
        open={confirmationOpen}
        setOpen={setConfirmationOpen}
        confirm={handleTransferSubmit}
        title="Transfer Tax Dec Confirmation"
        content="Are you sure you want to transfer this data? Once confirmed, the new data will be added to the system, and the previous data will be moved to the canceled records."
        disabled={isDisable}
      />

      <ConfirmationDialog
        open={addTaxConfirmation}
        setOpen={setAddTaxConfirmation}
        confirm={handleAddTaxSubmit}
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

      {/* <AssessorFormPrintable ref={contentRef} /> */}
      <PrintableFormModal
        open={printableFormOpen}
        onClose={() => setPrintableFormOpen(false)}
        row={selectedRow}
      />
    </>
  );
}

export default AssessmentRoll;
