import { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Tab from "../../components/layout/Tab";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";

import {
  COMPUTED_COLUMN,
  CASH_TAB_LINKS,
  DATA_GRID_INITIAL_STATE,
  PAGE_SIZE_OPTION,
  DATA_GRID_STYLE,
} from "../../utils/constant";
import { CreateNewFolderOutlined } from "@mui/icons-material";
import PaymentModal from "../../components/form/modal/PaymentModal";
import { PageContainer } from "../../components/layout/PageContainer";
import { TableToolbar } from "../../components/form/table/TableToolbar";

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

function CashPaidList() {
  const [taxdecModalOpen, setTaxdecModalOpen] = useState(false);
  const [openPayment, setOpenPayment] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null); // State to hold clicked row data

  const handleButtonClick = () => {
    setTaxdecModalOpen(true);
  };

  const handleCellDoubleClick = (params) => {
    setSelectedRow(params.row); // Capture the double-clicked row data
    setOpenPayment(true); // Open RPTview when a cell is double-clicked
  };

  return (
    <>
      <PageContainer>
        <DataGrid
          rows={rows}
          columns={COMPUTED_COLUMN}
          onCellDoubleClick={handleCellDoubleClick}
          initialState={DATA_GRID_INITIAL_STATE}
          pageSizeOptions={PAGE_SIZE_OPTION}
          sx={DATA_GRID_STYLE}
          disableRowSelectionOnClick
          slots={{
            toolbar: () => (
              <TableToolbar
                titleText="CASH OFFICE"
                subText="Office of the City Treasury"
              />
            ),
          }}
        />
      </PageContainer>

      <PaymentModal
        open={openPayment} // Ensure this state is passed as the open prop
        handleClose={() => setOpenPayment(false)}
        row={selectedRow}
        actionButton={<Button variant="outlined">View Receipt</Button>}
      />
    </>
  );
}

export default CashPaidList;
