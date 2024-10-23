import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ComputationModal from "../../components/form/modal/ComputationModal";
import { PageContainer } from "../../components/layout/PageContainer";
import useData from "../../hooks/useData";
import {
  ASSESSMENT_ROLL_COLUMN,
  DATA_GRID_INITIAL_STATE,
  DATA_GRID_STYLE,
  PAGE_SIZE_OPTION,
} from "../../utils/constant";
import { TableToolbar } from "../../components/form/table/TableToolbar";

function LandTaxAR() {
  const { assessorData, isAssessorLoading } = useData();

  const [openComputation, setOpenComputation] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null); // State to hold clicked row data

  const handleCellDoubleClick = (params) => {
    setSelectedRow(params.row); // Capture the double-clicked row data
    setOpenComputation(true); // Open RPTview when a cell is double-clicked
  };

  return (
    <>
      <PageContainer>
        <DataGrid
          loading={isAssessorLoading}
          rows={assessorData}
          columns={ASSESSMENT_ROLL_COLUMN}
          onCellDoubleClick={handleCellDoubleClick}
          initialState={DATA_GRID_INITIAL_STATE}
          pageSizeOptions={PAGE_SIZE_OPTION}
          sx={DATA_GRID_STYLE}
          disableRowSelectionOnClick
          slots={{
            toolbar: () => (
              <TableToolbar
                titleText="LANDTAX OFFICE"
                subText="Office of the Revenue Commissioner"
              />
            ),
          }}
        />
      </PageContainer>

      <ComputationModal
        open={openComputation}
        handleClose={() => setOpenComputation(false)}
        row={selectedRow}
        setSelectedRow={setSelectedRow}
      />
    </>
  );
}

export default LandTaxAR;
