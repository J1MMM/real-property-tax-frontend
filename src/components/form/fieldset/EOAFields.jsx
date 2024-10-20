import React from "react";
import Fieldset from "../../shared/Fieldset";
import { FormControl, Stack, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export const EOAFields = ({ props, handleFormChange }) => {
  return (
    <Fieldset title="Effectively of Assessment/Reassessment">
      <Stack direction="row" gap={1}>
        <TextField
          margin="dense"
          fullWidth
          label="QTR"
          variant="outlined"
          name="qtr"
          value={props?.row?.qtr}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
        />

        <FormControl margin="dense" fullWidth>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Year"
              value={props?.row?.year == null ? null : dayjs(props?.row?.year)}
              format="YYYY"
              readOnly={props?.readOnly}
              onChange={(newVal) =>
                props?.setSelectedRow((prev) => ({
                  ...prev,
                  year: newVal,
                }))
              }
              slotProps={{ textField: { required: true } }}
            />
          </LocalizationProvider>
        </FormControl>

        <FormControl margin="dense" fullWidth>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date of Effectivity"
              value={
                props?.row?.dateOfEffectivity == null
                  ? null
                  : dayjs(props?.row?.dateOfEffectivity)
              }
              readOnly={props?.readOnly}
              onChange={(newVal) =>
                props?.setSelectedRow((prev) => ({
                  ...prev,
                  dateOfEffectivity: newVal,
                }))
              }
              slotProps={{ textField: { required: true } }}
            />
          </LocalizationProvider>
        </FormControl>
      </Stack>
    </Fieldset>
  );
};
