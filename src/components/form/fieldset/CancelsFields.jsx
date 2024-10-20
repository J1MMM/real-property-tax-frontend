import React from "react";
import Fieldset from "../../shared/Fieldset";
import { Stack, TextField } from "@mui/material";

export const CancelsFields = ({ props, handleFormChange }) => {
  return (
    <Fieldset title="Cancels">
      <Stack direction="row" gap={1}>
        <TextField
          margin="dense"
          fullWidth
          label="Cancels T.D. No."
          variant="outlined"
          name="oldArp"
          value={props?.row?.oldArp}
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
          label="Owner"
          variant="outlined"
          name="previousOwner"
          value={props?.row?.previousOwner}
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
          label="Previous A.V. Php"
          variant="outlined"
          name="previousAV"
          value={props?.row?.previousAV}
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
          label="Property Index Number"
          variant="outlined"
          name="previousPid"
          value={props?.row?.previousPid}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
        />
      </Stack>
      <TextField
        margin="dense"
        multiline
        fullWidth
        label="Memoranda"
        name="memoranda"
        value={props?.row?.memoranda}
        onChange={handleFormChange}
        slotProps={{
          input: {
            readOnly: props?.readOnly,
          },
        }}
      />
    </Fieldset>
  );
};
