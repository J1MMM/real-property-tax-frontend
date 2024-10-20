import * as React from "react";
import { Button, TextField } from "@mui/material";
import Fieldset from "../../shared/Fieldset";
import { Stack } from "@mui/material";
import { ContainerModal } from "../../shared/ContainerModal";

export default function ComputationModal(props) {
  return (
    <>
      <ContainerModal
        title="REAL PROPERTY TAX ORDER OF PAYMENT"
        open={props?.open}
        onClose={props?.handleClose}
        actionButton={<Button variant="contained">submit</Button>}
      >
        <Fieldset title="Owner's Information">
          <Stack direction="row" gap={1}>
            <TextField
              margin="dense"
              fullWidth
              id="outlined-basic"
              label="Owner's Name"
              variant="outlined"
            />
            <TextField
              margin="dense"
              fullWidth
              id="outlined-basic"
              label="Location"
              variant="outlined"
              value={props.row?.OwnedAddress || ""}
            />
          </Stack>
          <Stack direction="row" gap={1}>
            <TextField
              margin="dense"
              fullWidth
              id="outlined-basic"
              label="PIN No."
              variant="outlined"
            />
            <TextField
              margin="dense"
              fullWidth
              id="outlined-basic"
              label="ARP No."
              variant="outlined"
              value={props.row?.ARPno || ""}
            />
            <TextField
              margin="dense"
              fullWidth
              variant="outlined"
              id="outlined-basic"
              label="Class"
              value={props.row?.Class || ""}
            />
          </Stack>
        </Fieldset>

        <Fieldset title="Computation">
          <Stack direction="row" gap={1}>
            <TextField
              margin="dense"
              fullWidth
              label="Assessed Value"
              variant="outlined"
            />
            <TextField
              margin="dense"
              fullWidth
              label="BASIC | SEF"
              variant="outlined"
            />
            <TextField
              margin="dense"
              fullWidth
              label="GARBAGE FEE"
              variant="outlined"
            />
            <TextField
              margin="dense"
              fullWidth
              label="TOTAL"
              variant="outlined"
            />
          </Stack>
        </Fieldset>
      </ContainerModal>
    </>
  );
}
