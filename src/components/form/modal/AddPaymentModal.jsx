import * as React from "react";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import Fieldset from "../../shared/Fieldset";
import { Stack } from "@mui/material";
import { ContainerModal } from "../../shared/ContainerModal";
import { sumFieldInArray } from "../../../utils/helper";
import { Close } from "@mui/icons-material";
import { DataGrid, GridToolbarFilterButton } from "@mui/x-data-grid";
import useData from "../../../hooks/useData";
import {
  ASSESSMENT_ROLL_COLUMN,
  DATA_GRID_INITIAL_STATE,
  DATA_GRID_STYLE,
  PAGE_SIZE_OPTION,
} from "../../../utils/constant";
import { TableToolbar } from "../table/TableToolbar";
import dayjs from "dayjs";

export default function AddPaymentModal(props) {
  const { assessorData, isAssessorLoading } = useData();

  React.useEffect(() => {
    const computeTotalFn = () => {
      console.log("props.formData.taxDue.year");
      console.log(props.formData?.taxDue?.year());

      const taxDue = props.formData?.taxDue?.year();
      const period = props.formData?.period;
      const assessedValue = props.formData?.assessedValue;
      const { total, penalty } = props.computeTotal(
        assessedValue,
        taxDue,
        period
      );
      const formattedTotal = total.toLocaleString("en-PH", {
        style: "currency",
        currency: "PHP",
      });
      const penaltyPercentage = `${parseInt(penalty * 100)}%`;
      console.log("period asas");
      console.log(period);

      props.setFormData((prev) => ({
        ...prev,
        total: formattedTotal,
        penalty: penaltyPercentage,
      }));
    };
    if (props.formData.taxDue != null && props.formData.period != "") {
      computeTotalFn();
    }
  }, [props.formData.taxDue, props.formData.period]);

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
    props.setSelectedRow({ ...params.row, paymentList: [] });

    const assessedValueTotal = sumFieldInArray(
      params.row?.classification || [],
      "assessedValue"
    );

    props.setFormData((prev) => ({
      ...prev,
      arpNo: params.row.ArpNo,
      assessedValue: assessedValueTotal,
      basicTax: assessedValueTotal * 0.02,
    }));
    props.setAddPaymentItemActive(true);
  };

  return (
    <>
      <ContainerModal
        title="REAL PROPERTY TAX ORDER OF PAYMENT"
        open={props?.open}
        onClose={props?.handleClose}
        actionButton={<Button variant="contained">submit</Button>}
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
        <Fieldset title="Payment Order">
          <Stack>
            {props?.selectedRow?.paymentList &&
              props?.selectedRow?.paymentList?.map((obj) => (
                <Typography key={obj.id}>{obj.id} </Typography>
              ))}
          </Stack>
        </Fieldset>
      </ContainerModal>
    </>
  );
}
