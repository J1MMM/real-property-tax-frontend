import * as React from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Fieldset from "../../shared/Fieldset";
import { Stack } from "@mui/material";
import { ContainerModal } from "../../shared/ContainerModal";
import { sumFieldInArray } from "../../../utils/helper";
import { Close } from "@mui/icons-material";
import { v4 } from "uuid";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function AddPaymentItemModal(props) {
  const handleFormChange = (e) => {
    props.setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  React.useEffect(() => {
    props.setFormData((prev) => ({
      ...prev,
      formattedAssessedValue: prev.assessedValue.toLocaleString("en-PH", {
        style: "currency",
        currency: "PHP",
      }),
    }));
  }, [props.formData.assessedValue]);

  const handleAddPayment = () => {
    const id = v4();

    props.setSelectedRow((prev) => ({
      ...prev,
      paymentList: [...prev?.paymentList, { ...props.formData, id: id }],
    }));

    props.computeTotal(10000, 1986, "ANNUAL");

    props.handleClose();
  };

  const quarterOptions = [
    "1st qtr",
    "2nd qtr",
    "3rd qtr",
    "4th qtr",
    "1st half",
    "2nd half",
    "ANNUAL",
  ];

  return (
    <>
      <ContainerModal
        title="ADD PAYMENT ORDER"
        open={props?.open}
        onClose={props?.handleClose}
        actionButton={
          <Button variant="contained" onClick={handleAddPayment}>
            add
          </Button>
        }
        maxWidth="sm"
      >
        <Stack gap={1}>
          <Stack direction="row" spacing={1}>
            <TextField
              margin="dense"
              fullWidth
              label="ARP No."
              variant="outlined"
              name="arpNo"
              value={props.formData.arpNo}
              onChange={handleFormChange}
              slotProps={{ input: { readOnly: true } }}
            />
            <TextField
              margin="dense"
              fullWidth
              label="Assessed Value"
              variant="outlined"
              name="assessedValue"
              value={props.formData.formattedAssessedValue}
              onChange={handleFormChange}
              slotProps={{ input: { readOnly: true } }}
            />
          </Stack>

          <Stack direction="row" spacing={1}>
            <FormControl margin="dense" fullWidth>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Tax Due"
                  format="YYYY"
                  openTo="year"
                  slotProps={{ textField: { required: true } }}
                  value={props.formData.taxDue}
                  onChange={(newValue) => {
                    props.setFormData((prev) => ({
                      ...prev,
                      taxDue: newValue,
                    }));
                  }}
                />
              </LocalizationProvider>
            </FormControl>

            <FormControl fullWidth margin="dense">
              <InputLabel>Period</InputLabel>
              <Select
                labelId="Period"
                value={props?.formData?.period || ""}
                required
                name="period"
                label="Period"
                onChange={handleFormChange}
                readOnly={props?.readOnly || props?.pendingPage}
              >
                {quarterOptions.map((val, index) => (
                  <MenuItem key={index} value={val}>
                    {val}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Stack direction="row" spacing={1}>
            <TextField
              margin="dense"
              fullWidth
              label="Basic Tax"
              variant="outlined"
              name="basicTax"
              value={props.formData.basicTax}
              onChange={handleFormChange}
              slotProps={{ input: { readOnly: true } }}
            />

            <TextField
              margin="dense"
              fullWidth
              label="Penalty Percentage"
              variant="outlined"
              name="penalty"
              value={props.formData.penalty}
              onChange={handleFormChange}
              slotProps={{ input: { readOnly: true } }}
            />
            <TextField
              margin="dense"
              fullWidth
              label="TOTAL"
              name="total"
              variant="outlined"
              value={props.formData.total}
              onChange={handleFormChange}
              slotProps={{ input: { readOnly: true } }}
            />
          </Stack>
        </Stack>
      </ContainerModal>
    </>
  );
}
