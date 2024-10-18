import { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Tab from "../../components/Tab";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";
import RPTview from "./RPTview";
import {
  ASSESSMENT_ROLL_COLUMN,
  ASSESSOR_TAB_LINKS,
  CENCELS_TABLE_COLUMN,
} from "../../utils/constant";
import { CreateNewFolderOutlined } from "@mui/icons-material";
import useData from "../../hooks/useData";
import { v4 } from "uuid";

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

function Pending() {
  const [taxdecModalOpen, setTaxdecModalOpen] = useState(false);
  const [openRPTview, setOpenRPTview] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null); // State to hold clicked row data
  const [readOnly, setReadOnly] = useState(true); // State to hold clicked row data

  const { pendingData, isPendingData } = useData();

  const handleButtonClick = () => {};

  const handleCellDoubleClick = (params) => {
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
    setOpenRPTview(true);
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
        </Box>

        <Box height={`calc(100vh - ${246}px)`} width="100%">
          <DataGrid
            rows={pendingData}
            loading={isPendingData}
            columns={CENCELS_TABLE_COLUMN}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 100,
                },
              },
            }}
            pageSizeOptions={[10, 50, 100]}
            disableRowSelectionOnClick
            onCellDoubleClick={handleCellDoubleClick}
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
        readOnly={true}
        totalMarketValue={totalMarketValue}
        areaTotal={areaTotal}
        assessedValueTotal={assessedValueTotal}
        setReadOnly={setReadOnly}
        actionButton={
          <>
            <Button variant="outlined" sx={{ color: "rgb(12, 19, 99)" }}>
              GENERATE FORM
            </Button>
          </>
        }
      />
    </>
  );
}

export default Pending;
