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
import TaxDecModal from "../../components/form/modal/TaxDecModal";
import { PageContainer } from "../../components/layout/PageContainer";
import { useRowFormatter } from "../../hooks/useRowFormatter";
import { TableToolbar } from "../../components/form/table/TableToolbar";

function Cancels() {
  const { cancelsData, isCancelsLoading } = useData();

  const [taxdecModalOpen, setTaxdecModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleCellDoubleClick = (params) => {
    const formattedRow = useRowFormatter(params);

    setSelectedRow(formattedRow);
    setTaxdecModalOpen(true);
  };

  return (
    <>
      <PageContainer>
        <DataGrid
          rows={cancelsData}
          loading={isCancelsLoading}
          columns={CENCELS_TABLE_COLUMN}
          initialState={DATA_GRID_INITIAL_STATE}
          pageSizeOptions={PAGE_SIZE_OPTION}
          disableRowSelectionOnClick
          onCellDoubleClick={handleCellDoubleClick}
          sx={DATA_GRID_STYLE}
          slots={{
            toolbar: () => (
              <TableToolbar
                titleText="ARCHIVED RECORDS"
                subText="All Cancelled Records"
              />
            ),
          }}
        />
      </PageContainer>

      <TaxDecModal
        open={taxdecModalOpen}
        handleClose={() => setTaxdecModalOpen(false)}
        row={selectedRow}
        setSelectedRow={setSelectedRow}
        readOnly={true}
        actionButton={<Button variant="outlined">GENERATE FORM</Button>}
      />
    </>
  );
}

export default Cancels;
