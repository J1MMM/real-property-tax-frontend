import * as React from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import Fieldset from "../../shared/Fieldset";
import { Stack } from "@mui/material";
import { ContainerModal } from "../../shared/ContainerModal";
import { sumFieldInArray } from "../../../utils/helper";
import { Close } from "@mui/icons-material";
import { DataGrid, GridToolbarFilterButton } from "@mui/x-data-grid";
import useData from "../../../hooks/useData";
import {
  ASSESSMENT_ROLL_COLUMN,
  PAYMENT_ORDER_TABLE_COLUMN,
  DATA_GRID_INITIAL_STATE,
  DATA_GRID_STYLE,
  PAGE_SIZE_OPTION,
} from "../../../utils/constant";
import { TableToolbar } from "../table/TableToolbar";
import dayjs from "dayjs";
import ClassificationCustomFooter from "../custom/ClassificationCustomFooter";

export default function AddPaymentModal(props) {
  const { assessorData, isAssessorLoading } = useData();

  React.useEffect(() => {
    const computeTotalFn = () => {
      const taxDue = props.formData?.taxDue?.year();
      const selectedQuarters = props.formData?.selectedQuarters;
      const assessedValue = props.formData?.assessedValue;
      const { total, penalty } = props.computeTotal(
        assessedValue,
        taxDue,
        selectedQuarters
      );
      const formattedTotal = total.toLocaleString("en-PH", {
        style: "currency",
        currency: "PHP",
      });
      const penaltyPercentage = `${parseInt(penalty * 100)}%`;

      props.setFormData((prev) => ({
        ...prev,
        total: total,
        formattedTotal: formattedTotal,
        penalty: penaltyPercentage,
      }));
    };
    console.log(props.formData);

    const isAnyQuarterSelected = Object.values(
      props.formData.selectedQuarters
    ).some((value) => value);

    if (props.formData.taxDue != null && isAnyQuarterSelected) {
      computeTotalFn();
    }
  }, [props.formData.taxDue, props.formData.selectedQuarters]);

  const handleFormChange = (e) => {
    props?.setSelectedRow((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const fullname = `${props?.row?.fname || ""} ${props?.row?.mname || ""} ${
    props?.row?.lname || ""
  }`;

  const assessedValueTotal = sumFieldInArray(
    props?.row?.classification || [],
    "assessedValue"
  );

  const handleDelete = (par) => {
    props.setSelectedRow((prev) => ({
      ...prev,
      paymentList: prev?.paymentList.filter((obj) => obj.id !== par.id),
    }));
  };

  const handleCellDoubleClick = (params) => {
    console.log(props.paymentList.length);

    if (props.paymentList.length < 6) {
      props.setSelectedRow(params.row);

      const assessedValueTotal = sumFieldInArray(
        params.row?.classification || [],
        "assessedValue"
      );

      props.setFormData((prev) => ({
        ...prev,
        arpNo: params.row.ArpNo,
        pin: params.row.PID,
        assessedValue: assessedValueTotal,
        basicTax: parseFloat(assessedValueTotal * 0.02).toLocaleString(
          "en-PH",
          {
            style: "currency",
            currency: "PHP",
          }
        ),
      }));
      props.setAddPaymentItemActive(true);
    }
  };

  const paymentTotal = sumFieldInArray(props.paymentList || [], "total");

  return (
    <Box>
      <ContainerModal
        title="REAL PROPERTY TAX ORDER OF PAYMENT"
        open={props?.open}
        onClose={props?.handleClose}
        actionButton={
          <Button
            variant="contained"
            onClick={props.handleClickSubmit}
            disabled={props.paymentList.length === 0}
          >
            submit
          </Button>
        }
        maxWidth={"lg"}
      >
        <DataGrid
          loading={isAssessorLoading}
          rows={assessorData}
          columns={ASSESSMENT_ROLL_COLUMN}
          onCellDoubleClick={handleCellDoubleClick}
          initialState={DATA_GRID_INITIAL_STATE}
          pageSizeOptions={PAGE_SIZE_OPTION}
          sx={{
            ...DATA_GRID_STYLE,
            height: "400px",
            minHeight: "400px",
            maxHeight: "400px",
          }}
          disableRowSelectionOnClick
          slots={{
            toolbar: TableToolbar,
          }}
          slotProps={{
            panel: { placement: "bottom-end" }, // by default its bottom-start
          }}
        />
        <Typography variant="body1" sx={{ color: "primary.main", ml: 1 }}>
          Payment Order List
        </Typography>
        <DataGrid
          rows={props.paymentList || []}
          columns={[
            ...PAYMENT_ORDER_TABLE_COLUMN,
            {
              field: "",
              headerName: "",
              headerClassName: "data-grid-header",
              width: 50,
              renderCell: (params) => (
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={() =>
                      props.setPaymentList((prev) =>
                        prev.filter((obj) => obj.id !== params.row.id)
                      )
                    }
                  >
                    <Close />
                  </IconButton>
                </Stack>
              ),
            },
          ]}
          initialState={DATA_GRID_INITIAL_STATE}
          pageSizeOptions={PAGE_SIZE_OPTION}
          disableRowSelectionOnClick
          sx={{
            ...DATA_GRID_STYLE,
            border: "1px solid rgba(224, 224, 224, 1)",
          }}
          slots={{
            footer: () => (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                  borderTop: "1px solid rgba(224, 224, 224, 1)",
                  minHeight: 52,
                  boxSizing: "border-box",
                  bgcolor: "#EEF2F6",
                }}
              >
                <Typography
                  sx={{
                    flex: 1,
                    borderRight: "1px solid rgba(224, 224, 224, 1)", // Right border
                    padding: "8px", // Padding inside each cell
                    display: "flex", // Use flex to align content
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  variant="body2"
                >
                  Total:
                </Typography>

                <Typography
                  sx={{
                    flex: 1,
                    borderRight: "1px solid rgba(224, 224, 224, 1)", // Right border
                    padding: "8px",
                  }}
                  variant="body2"
                ></Typography>
                <Typography
                  sx={{
                    flex: 1,
                    borderRight: "1px solid rgba(224, 224, 224, 1)", // Right border
                    padding: "8px",
                  }}
                  variant="body2"
                ></Typography>
                <Typography
                  sx={{
                    flex: 1,
                    borderRight: "1px solid rgba(224, 224, 224, 1)", // Right border
                    padding: "8px",
                  }}
                  variant="body2"
                ></Typography>
                <Typography
                  sx={{
                    flex: 1,
                    borderRight: "1px solid rgba(224, 224, 224, 1)", // Right border
                    padding: "8px",
                  }}
                  variant="body2"
                ></Typography>
                <Typography
                  sx={{
                    flex: 1,
                    borderRight: "1px solid rgba(224, 224, 224, 1)", // Right border
                    padding: "8px",
                  }}
                  variant="body2"
                ></Typography>
                <Typography
                  sx={{
                    flex: 1,
                    borderRight: "1px solid rgba(224, 224, 224, 1)", // Right border
                    padding: "8px",
                  }}
                  variant="body2"
                ></Typography>
                <Typography
                  sx={{
                    flex: 1,
                    borderRight: "1px solid rgba(224, 224, 224, 1)", // Right border
                    padding: "8px",
                    display: "flex", // Use flex to align content
                    justifyContent: "space-between", // Space between main content and endorsement
                    alignItems: "center", // Center vertically
                  }}
                  variant="body2"
                >
                  {paymentTotal.toLocaleString("en-PH", {
                    style: "currency",
                    currency: "PHP",
                  })}
                </Typography>
                <Typography
                  sx={{
                    borderRight: "1px solid rgba(224, 224, 224, 1)", // Right border
                    padding: "8px",
                    display: "flex", // Use flex to align content
                    justifyContent: "space-between", // Space between main content and endorsement
                    alignItems: "center", // Center vertically
                    width: 50,
                  }}
                  variant="body2"
                ></Typography>
              </Box>
            ),
          }}
        />
      </ContainerModal>
    </Box>
  );
}
