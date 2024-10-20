import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import {
  CENCELS_TABLE_COLUMN,
  DATA_GRID_INITIAL_STATE,
  DATA_GRID_STYLE,
  PAGE_SIZE_OPTION,
} from "../../utils/constant";
import useData from "../../hooks/useData";
import TaxDecModal from "../../components/form/TaxDecModal";
import { PageContainer } from "../../components/layout/PageContainer";
import { useRowFormatter } from "../../hooks/useRowFormatter";
import { Collapse, Stack } from "@mui/material";
import ConfirmationDialog from "../../components/shared/ConfirmationDialog";

function Pending() {
  const { pendingData, isPendingData } = useData();

  const [taxdecModalOpen, setTaxdecModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [readOnly, setReadOnly] = useState(true);
  const [isDisable, setIsDisable] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  const handleCellDoubleClick = (params) => {
    const formattedRow = useRowFormatter(params);
    setSelectedRow(formattedRow);
    setTaxdecModalOpen(true);
  };

  const handleModalClose = () => {
    setTaxdecModalOpen(false);
    setReadOnly(true);
  };

  const handleEditSumit = () => {
    setIsDisable(true);
    try {
    } catch (error) {
      console.log(error);
    }
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
      <PageContainer
        titleText="PENDING  RECORDS"
        subText="Records to be filled in after subdivision"
      >
        <DataGrid
          rows={pendingData}
          loading={isPendingData}
          columns={CENCELS_TABLE_COLUMN}
          initialState={DATA_GRID_INITIAL_STATE}
          pageSizeOptions={PAGE_SIZE_OPTION}
          disableRowSelectionOnClick
          onCellDoubleClick={handleCellDoubleClick}
          sx={DATA_GRID_STYLE}
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
      />

      <ConfirmationDialog
        open={confirmationOpen}
        setOpen={setConfirmationOpen}
        confirm={handleEditSumit}
        title="Edit Tax Dec Confirmation"
        content="Are you sure you want to save this data? Once confirmed, the new data will be added to the system."
        disabled={isDisable}
      />
    </>
  );
}

export default Pending;
