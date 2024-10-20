import { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Tab from "../../components/layout/Tab";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";

import Computation from "./Computation";
import {
  ASSESSMENT_ROLL_COLUMN,
  LANDTAX_TAB_LINKS,
} from "../../utils/constant";
import { CreateNewFolderOutlined } from "@mui/icons-material";
import { useQuery } from "react-query";
import useData from "../../hooks/useData";

const rows = [
  {
    id: 1,
    ArpNo: "121345211",
    PID: "PID12345",
    fname: "Jose",
    mname: "Doe",
    lname: "Smith",
    Address: "123 Main St",
    TIN: "123-456-789",
    AdminFname: "Jane",
    AdminMname: "D.",
    AdminLname: "Dela Cruz",
    AdminAddress: "kotobato",
    AdminTIN: "13123123",
    AdminTel: "02103123",
    noAndSt: "purok 1",
    Brgy: "san tisimo",
    oct: "sadasd",
    Survey: "place is shady",
    cct: "ASasdasd",
    LOT: "ASdasd",
    DATE: "2023-01-02T00:00:00.000Z",
    BLOCK: "block1",
    TAXABILITY: "exempted",
    qtr: "9",
    year: "2024-01-01T00:00:00.000Z",
    dateOfEffectivity: "2024-01-01T00:00:00.000Z",
    Boundaries: [
      {
        boundaryType: "land",
        active: "false",
        description: "ito ay lupa na tuyo na",
        NEboundary: "194",
        northBoundary: "192",
        EastBoundary: "194",
        SEBoundary: "194",
        southBoundary: "123",
        SWBoundary: "12",
        westBoundary: "",
        NWBoundary: "",
      },
      {
        boundaryType: "building",
        active: "true",
        description: "2 buildings",
        NEboundary: "",
        northBoundary: "",
        EastBoundary: "",
        SEBoundary: "",
        southBoundary: "",
        SWBoundary: "",
        westBoundary: "",
        NWBoundary: "",
      },
      {
        boundaryType: "machinery",
        active: "false",
        description: "factory machines",
        NEboundary: "",
        northBoundary: "",
        EastBoundary: "",
        SEBoundary: "",
        southBoundary: "",
        SWBoundary: "",
        westBoundary: "",
        NWBoundary: "",
      },
      {
        boundaryType: "others",
        active: "true",
        description: "",
        NEboundary: "",
        northBoundary: "",
        EastBoundary: "",
        SEBoundary: "",
        southBoundary: "",
        SWBoundary: "",
        westBoundary: "",
        NWBoundary: "",
      },
    ],
    classification: [
      {
        classification: "land",
        area: "100sqm",
        marketval: 100000,
        level: 0.15,
        actualUse: "Residential",
        assessedVal: 80000,
      },
      {
        classification: "building",
        area: "100sqm",
        marketval: 100000,
        level: 0.15,
        actualUse: "Residential",
        assessedVal: 80000,
      },
    ],
    oldArp: "123012031221",
    memoranda: "article 123",
    refId: null,
    isarchived: "false",
    updatedAt: "2024-10-07T02:13:31.000Z",
  },
  {
    id: 2,
    ArpNo: "1213452221",
    PID: "PID12345",
    fname: "Jose",
    mname: "Doe",
    lname: "Smith",
    Address: "123 Main St",
    TIN: "123-456-789",
    AdminFname: "Jane",
    AdminMname: "D.",
    AdminLname: "Dela Cruz",
    AdminAddress: "kotobato",
    AdminTIN: "13123123",
    AdminTel: "02103123",
    noAndSt: "purok 1",
    Brgy: "san tisimo",
    oct: "sadasd",
    Survey: "place is shady",
    cct: "ASasdasd",
    LOT: "ASdasd",
    DATE: "2023-01-02T00:00:00.000Z",
    BLOCK: "block1",
    TAXABILITY: "exempted",
    qtr: "9",
    year: "2024-01-01T00:00:00.000Z",
    dateOfEffectivity: "2024-01-01T00:00:00.000Z",
    Boundaries: [
      {
        boundaryType: "land",
        active: "false",
        description: "ito ay lupa na tuyo na",
        NEboundary: "194",
        northBoundary: "192",
        EastBoundary: "194",
        SEBoundary: "194",
        southBoundary: "123",
        SWBoundary: "12",
        westBoundary: "",
        NWBoundary: "",
      },
      {
        boundaryType: "building",
        active: "true",
        description: "2 buildings",
        NEboundary: "",
        northBoundary: "",
        EastBoundary: "",
        SEBoundary: "",
        southBoundary: "",
        SWBoundary: "",
        westBoundary: "",
        NWBoundary: "",
      },
      {
        boundaryType: "machinery",
        active: "false",
        description: "factory machines",
        NEboundary: "",
        northBoundary: "",
        EastBoundary: "",
        SEBoundary: "",
        southBoundary: "",
        SWBoundary: "",
        westBoundary: "",
        NWBoundary: "",
      },
      {
        boundaryType: "others",
        active: "true",
        description: "",
        NEboundary: "",
        northBoundary: "",
        EastBoundary: "",
        SEBoundary: "",
        southBoundary: "",
        SWBoundary: "",
        westBoundary: "",
        NWBoundary: "",
      },
    ],
    classification: [
      {
        classification: "land",
        area: "100sqm",
        marketval: 100000,
        level: 0.15,
        actualUse: "Residential",
        assessedVal: 80000,
      },
      {
        classification: "building",
        area: "100sqm",
        marketval: 100000,
        level: 0.15,
        actualUse: "Residential",
        assessedVal: 80000,
      },
    ],
    oldArp: "123012031221",
    memoranda: "article 123",
    refId: "033059dd-0323-4331-9481-25ae85e0b29f",
    isarchived: "false",
    updatedAt: "2024-10-07T02:33:55.000Z",
  },
  {
    id: 3,
    ArpNo: "1213452222",
    PID: "PID12345",
    fname: "Jose",
    mname: "Doe",
    lname: "Smith",
    Address: "123 Main St",
    TIN: "123-456-789",
    AdminFname: "Jane",
    AdminMname: "D.",
    AdminLname: "Dela Cruz",
    AdminAddress: "kotobato",
    AdminTIN: "13123123",
    AdminTel: "02103123",
    noAndSt: "purok 1",
    Brgy: "san tisimo",
    oct: "sadasd",
    Survey: "place is shady",
    cct: "ASasdasd",
    LOT: "ASdasd",
    DATE: "2023-01-02T00:00:00.000Z",
    BLOCK: "block1",
    TAXABILITY: "exempted",
    qtr: "9",
    year: "2024-01-01T00:00:00.000Z",
    dateOfEffectivity: "2024-01-01T00:00:00.000Z",
    Boundaries: [
      {
        boundaryType: "land",
        active: "false",
        description: "ito ay lupa na tuyo na",
        NEboundary: "194",
        northBoundary: "192",
        EastBoundary: "194",
        SEBoundary: "194",
        southBoundary: "123",
        SWBoundary: "12",
        westBoundary: "",
        NWBoundary: "",
      },
      {
        boundaryType: "building",
        active: "true",
        description: "2 buildings",
        NEboundary: "",
        northBoundary: "",
        EastBoundary: "",
        SEBoundary: "",
        southBoundary: "",
        SWBoundary: "",
        westBoundary: "",
        NWBoundary: "",
      },
      {
        boundaryType: "machinery",
        active: "false",
        description: "factory machines",
        NEboundary: "",
        northBoundary: "",
        EastBoundary: "",
        SEBoundary: "",
        southBoundary: "",
        SWBoundary: "",
        westBoundary: "",
        NWBoundary: "",
      },
      {
        boundaryType: "others",
        active: "true",
        description: "",
        NEboundary: "",
        northBoundary: "",
        EastBoundary: "",
        SEBoundary: "",
        southBoundary: "",
        SWBoundary: "",
        westBoundary: "",
        NWBoundary: "",
      },
    ],
    classification: [
      {
        classification: "land",
        area: "100sqm",
        marketval: 100000,
        level: 0.15,
        actualUse: "Residential",
        assessedVal: 80000,
      },
      {
        classification: "building",
        area: "100sqm",
        marketval: 100000,
        level: 0.15,
        actualUse: "Residential",
        assessedVal: 80000,
      },
    ],
    oldArp: "123012031221",
    memoranda: "article 123",
    refId: null,
    isarchived: "false",
    updatedAt: "2024-10-07T02:45:59.000Z",
  },
  {
    id: 4,
    ArpNo: "121345222ss2",
    PID: "PID12345",
    fname: "Jose",
    mname: "Doe",
    lname: "Smith",
    Address: "123 Main St",
    TIN: "123-456-789",
    AdminFname: "Jane",
    AdminMname: "D.",
    AdminLname: "Dela Cruz",
    AdminAddress: "kotobato",
    AdminTIN: "13123123",
    AdminTel: "02103123",
    noAndSt: "purok 1",
    Brgy: "san tisimo",
    oct: "sadasd",
    Survey: "place is shady",
    cct: "ASasdasd",
    LOT: "ASdasd",
    DATE: "2023-01-02T00:00:00.000Z",
    BLOCK: "block1",
    TAXABILITY: "exempted",
    qtr: "9",
    year: "2024-01-01T00:00:00.000Z",
    dateOfEffectivity: "2024-01-01T00:00:00.000Z",
    Boundaries: [
      {
        boundaryType: "land",
        active: "false",
        description: "ito ay lupa na tuyo na",
        NEboundary: "194",
        northBoundary: "192",
        EastBoundary: "194",
        SEBoundary: "194",
        southBoundary: "123",
        SWBoundary: "12",
        westBoundary: "",
        NWBoundary: "",
      },
      {
        boundaryType: "building",
        active: "true",
        description: "2 buildings",
        NEboundary: "",
        northBoundary: "",
        EastBoundary: "",
        SEBoundary: "",
        southBoundary: "",
        SWBoundary: "",
        westBoundary: "",
        NWBoundary: "",
      },
      {
        boundaryType: "machinery",
        active: "false",
        description: "factory machines",
        NEboundary: "",
        northBoundary: "",
        EastBoundary: "",
        SEBoundary: "",
        southBoundary: "",
        SWBoundary: "",
        westBoundary: "",
        NWBoundary: "",
      },
      {
        boundaryType: "others",
        active: "true",
        description: "",
        NEboundary: "",
        northBoundary: "",
        EastBoundary: "",
        SEBoundary: "",
        southBoundary: "",
        SWBoundary: "",
        westBoundary: "",
        NWBoundary: "",
      },
    ],
    classification: [
      {
        classification: "land",
        area: "100sqm",
        marketval: 100000,
        level: 0.15,
        actualUse: "Residential",
        assessedVal: 80000,
      },
      {
        classification: "building",
        area: "100sqm",
        marketval: 100000,
        level: 0.15,
        actualUse: "Residential",
        assessedVal: 80000,
      },
    ],
    oldArp: "123012031221",
    memoranda: "article 123",
    refId: null,
    isarchived: "false",
    updatedAt: "2024-10-07T02:47:06.000Z",
  },
];

function LAssesssmentRoll() {
  const [taxdecModalOpen, setTaxdecModalOpen] = useState(false);
  const [openComputation, setOpenComputation] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null); // State to hold clicked row data
  const { data, isLoading } = useData();

  const handleButtonClick = () => {
    setTaxdecModalOpen(true);
  };

  const handleCellDoubleClick = (params) => {
    setSelectedRow(params.row); // Capture the double-clicked row data
    setOpenComputation(true); // Open RPTview when a cell is double-clicked
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
              LANDTAX OFFICE
            </Typography>
            <Typography variant="body2">
              Office of the Revenue Commissioner
            </Typography>
          </Stack>
        </Box>

        <Box height={`calc(100vh - ${246}px)`} width="100%">
          <DataGrid
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

      <Computation
        open={openComputation} // Ensure this state is passed as the open prop
        handleClose={() => setOpenComputation(false)}
        row={selectedRow}
        Title={<>REAL PROPERTY TAX ORDER OF PAYMENT</>}
        actionButton={
          <>
            <Button variant="contained">submit</Button>
          </>
        }
      />
    </>
  );
}

export default LAssesssmentRoll;
