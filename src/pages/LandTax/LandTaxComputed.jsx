import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  COMPUTED_COLUMN,
  DATA_GRID_INITIAL_STATE,
  DATA_GRID_STYLE,
  PAGE_SIZE_OPTION,
} from "../../utils/constant";
import ComputationModal from "../../components/form/modal/ComputationModal";
import { PageContainer } from "../../components/layout/PageContainer";
import useData from "../../hooks/useData";
import { TableToolbar } from "../../components/form/table/TableToolbar";

function LandTaxComputed() {
  const { assessorData, isAssessorLoading } = useData();

  const [openComputation, setOpenComputation] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null); // State to hold clicked row data

  const handleCellDoubleClick = (params) => {
    setSelectedRow(params.row); // Capture the double-clicked row data
    setOpenComputation(true); // Open RPTview when a cell is double-clicked
  };

  const rows = [
    {
      id: 1,
      PropertyOwner: "MELANIE CAPULONG ALIDIO",
      PropertyIndexNo: "18-968",
      ARPno: "03-0044-04479",
      OwnedAddress: "Washingtin St.",
      Kind: "L",
      Class: "R",
      LocationOfProperty: "San Cristobal",
      AssessedValue: "31,320.00",
      Taxability: "T",
      Effectivity: "2024",
    },
    {
      id: 2,
      PropertyOwner: "MELANIE CAPULONG ALIDIO",
      PropertyIndexNo: "18-968",
      ARPno: "03-0044-04479",
      OwnedAddress: "Washingtin St.",
      Kind: "L",
      Class: "R",
      LocationOfProperty: "San Cristobal",
      AssessedValue: "31,320.00",
      Taxability: "T",
      Effectivity: "2024",
    },
  ];

  return (
    <>
      <PageContainer>
        <DataGrid
          rows={assessorData}
          columns={COMPUTED_COLUMN}
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

        <ComputationModal
          open={openComputation}
          handleClose={() => setOpenComputation(false)}
          row={selectedRow}
        />
      </PageContainer>
    </>
  );
}

export default LandTaxComputed;
