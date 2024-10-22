import { Stack, TextField } from "@mui/material";
import React from "react";

export const TaxNumberFields = ({ props, handleFormChange }) => {
  return (
    <Stack flexDirection="row" justifyContent="space-between">
      <TextField
        required
        label="T.D. No."
        variant="outlined"
        sx={{ width: "45%" }}
        name="ArpNo"
        value={props?.row?.ArpNo}
        onChange={handleFormChange}
        slotProps={{
          input: {
            readOnly: props?.readOnly || props?.pendingPage,
          },
        }}
      />

      <TextField
        required
        label="Property Identification No."
        variant="outlined"
        sx={{ width: "45%" }}
        name="PID"
        value={props?.row?.PID}
        onChange={handleFormChange}
        slotProps={{
          input: {
            readOnly: props?.readOnly,
          },
        }}
      />
    </Stack>
  );
};
