import React from "react";
import Fieldset from "../../shared/Fieldset";
import { Stack, TextField } from "@mui/material";

export const BenificialFields = ({ props, handleFormChange }) => {
  return (
    <Fieldset title="Administrator / Beneficial User">
      <Stack direction="row" gap={1}>
        <TextField
          margin="dense"
          fullWidth
          label="First Name"
          variant="outlined"
          name="AdminFname"
          value={props?.row?.AdminFname}
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
          label="last Name"
          variant="outlined"
          name="AdminLname"
          value={props?.row?.AdminLname}
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
          label="Middle Name"
          variant="outlined"
          name="AdminMname"
          value={props?.row?.AdminMname}
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
          label="Address"
          variant="outlined"
          name="AdminAddress"
          value={props?.row?.AdminAddress}
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
          label="TIN No."
          variant="outlined"
          name="AdminTIN"
          value={props?.row?.AdminTIN}
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
          label="Telephone No."
          variant="outlined"
          name="AdminTel"
          value={props?.row?.AdminTel}
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
