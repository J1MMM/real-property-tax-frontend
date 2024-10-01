import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Tab from "../../components/Tab";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";
import TaxDecModal from "../../components/TaxDecModal";
import {
  ASSESSMENT_ROLL_COLUMN,
  ASSESSMENT_ROLL_TAB_LINKS,
} from "../../utils/constant";
import { CreateNewFolderOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getAssessorData } from "../../features/assessor/assessorSlice";

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

function AssessmentRoll() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.assessor);
  const [taxdecModalOpen, setTaxdecModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getAssessorData());
  }, [dispatch]);

  const handleButtonClick = () => {
    setTaxdecModalOpen(true);
  };

  return (
    <>
      <Tab links={ASSESSMENT_ROLL_TAB_LINKS} />

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
            rows={data}
            columns={ASSESSMENT_ROLL_COLUMN}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            disableRowSelectionOnClick
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

      <TaxDecModal
        open={taxdecModalOpen}
        handleClose={() => setTaxdecModalOpen(false)}
      />
    </>
  );
}

export default AssessmentRoll;
