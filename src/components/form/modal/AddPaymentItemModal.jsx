import * as React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
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
    if (!props.formData.total) return;
    const id = v4();

    // props.setSelectedRow((prev) => ({
    //   ...prev,
    //   paymentList: [...prev?.paymentList, { ...props.formData, id: id }],
    // }));

    props.setPaymentList((prev) => [...prev, { ...props.formData, id: id }]);

    props.handleClose();
  };

  return (
    <>
      <ContainerModal
        title="ADD PAYMENT ORDER"
        open={props?.open}
        onClose={props?.handleClose}
        actionButton={
          <Button
            variant="contained"
            disabled={props.formData.total == ""}
            onClick={handleAddPayment}
          >
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

            {/* <FormControl fullWidth margin="dense">
              <InputLabel>Number of Quarters</InputLabel>
              <Select
                value={props?.formData?.period || ""}
                required
                name="period"
                label="Number of Quarters"
                onChange={handleFormChange}
                readOnly={props?.readOnly || props?.pendingPage}
              >
                {quarterOptions.map((val, index) => (
                  <MenuItem key={index} value={val}>
                    {val}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}
          </Stack>
          <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="first"
                  checked={props.formData.selectedQuarters.first}
                  onChange={props.handleCheckboxChange}
                />
              }
              label="1st Quarter"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="second"
                  checked={props.formData.selectedQuarters.second}
                  onChange={props.handleCheckboxChange}
                />
              }
              label="2nd Quarter"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="third"
                  checked={props.formData.selectedQuarters.third}
                  onChange={props.handleCheckboxChange}
                />
              }
              label="3rd Quarter"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="fourth"
                  checked={props.formData.selectedQuarters.fourth}
                  onChange={props.handleCheckboxChange}
                />
              }
              label="4th Quarter"
            />
          </FormGroup>
          <Stack direction="row" spacing={1}>
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
              value={props.formData.formattedTotal}
              onChange={handleFormChange}
              slotProps={{ input: { readOnly: true } }}
            />
          </Stack>
        </Stack>
      </ContainerModal>
    </>
  );
}
