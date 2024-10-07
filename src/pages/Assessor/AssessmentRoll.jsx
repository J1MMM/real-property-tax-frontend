import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Tab from "../../components/Tab";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";
import TaxDecModal from "../../components/TaxDecModal";
import {
  ASSESSMENT_ROLL_COLUMN,
  ASSESSOR_TAB_LINKS,
  SOCKET,
} from "../../utils/constant";
import { CreateNewFolderOutlined } from "@mui/icons-material";
import { useQuery, useQueryClient } from "react-query";
import { fetchInitialData } from "../../api/assessorAPI";
import RPTview from "./RPTview";

function AssessmentRoll() {
  const [taxdecModalOpen, setTaxdecModalOpen] = useState(false);
  const [openRPTview, setOpenRPTview] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null); // State to hold clicked row data

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery("data", fetchInitialData);

  const handleButtonClick = () => {
    setTaxdecModalOpen(true);
  };

  const handleCellDoubleClick = (params) => {
    console.log("doubloe click");
    console.log(params.row);

    setSelectedRow(params.row); // Capture the double-clicked row data
    setOpenRPTview(true); // Open RPTview when a cell is double-clicked
  };

  useEffect(() => {}, [queryClient]); // Ensure queryClient is in the dependency array

  return (
    <>
      <Tab links={ASSESSOR_TAB_LINKS} />

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
          <Button
            onClick={handleButtonClick}
            variant="contained"
            startIcon={<CreateNewFolderOutlined />}
          >
            Add Taxdec
          </Button>
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
                borderRight: "1px solid rgba(224, 224, 224, 1)", // Right border for each cell
              },
              "& .MuiDataGrid-row": {
                "&:last-child .MuiDataGrid-cell": {
                  borderBottom: "none", // Remove bottom border from last row
                },
              },
            }}
          />
        </Box>
      </Box>

      <RPTview
        open={openRPTview} // Ensure this state is passed as the open prop
        handleClose={() => setOpenRPTview(false)}
        row={selectedRow}
        actionButton={
          <>
            <Button variant="contained" sx={{ color: "rgb(255, 255, 255)" }}>
              TRANSFER
            </Button>
            <Button
              variant="contained"
              sx={{ color: "rgb(255, 255, 255)" }}
              // rgb(168, 37, 37)
              // rgb(12, 19, 99)
            >
              SUBDIVIDE
            </Button>
            <Button variant="outlined" sx={{ color: "rgb(12, 19, 99)" }}>
              GENERATE FORM
            </Button>
          </>
        }
      />

      <TaxDecModal
        open={taxdecModalOpen}
        handleClose={() => setTaxdecModalOpen(false)}
      />
    </>
  );
}

export default AssessmentRoll;
