import React from "react";
import Fieldset from "../../shared/Fieldset";
import { Stack, TextField } from "@mui/material";

export const OwnerInfoFields = ({ props, handleFormChange }) => {
  return (
    <Fieldset title="Owner's Information">
      <Stack direction="row" gap={1}>
        <TextField
          margin="dense"
          fullWidth
          label="First Name"
          variant="outlined"
          name="fname"
          value={props?.row?.fname}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
        />
        <TextField
          margin="dense"
          fullWidth
          id="outlined-basic"
          label="last Name"
          variant="outlined"
          name="lname"
          value={props?.row?.lname}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
        />
        <TextField
          margin="dense"
          fullWidth
          id="outlined-basic"
          label="Middle Name"
          variant="outlined"
          name="mname"
          value={props?.row?.mname}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
        />
      </Stack>
      <Stack direction="row" gap={1}>
        <TextField
          margin="dense"
          fullWidth
          id="outlined-basic"
          label="Address"
          variant="outlined"
          name="Address"
          value={props?.row?.Address}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
        />
        <TextField
          margin="dense"
          fullWidth
          id="outlined-basic"
          label="TIN No."
          variant="outlined"
          name="TIN"
          value={props?.row?.TIN}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
        />
        <TextField
          margin="dense"
          fullWidth
          variant="outlined"
          id="outlined-basic"
          label="Telephone No."
          name="Telephone"
          value={props?.row?.Telephone}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
        />
      </Stack>
    </Fieldset>
  );
};
