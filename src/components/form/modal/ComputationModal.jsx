import * as React from "react";
import { Button, TextField } from "@mui/material";
import Fieldset from "../../shared/Fieldset";
import { Stack } from "@mui/material";
import { ContainerModal } from "../../shared/ContainerModal";
import { sumFieldInArray } from "../../../utils/helper";

export default function ComputationModal(props) {
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

  return (
    <>
      <ContainerModal
        title="REAL PROPERTY TAX ORDER `OF PAYMENT"
        open={props?.open}
        onClose={props?.handleClose}
        actionButton={<Button variant="contained">submit</Button>}
      >
        <Fieldset title="Owner's Information">
          <Stack direction="row" gap={1}>
            <TextField
              margin="dense"
              fullWidth
              label="Owner's Name"
              variant="outlined"
              value={fullname}
              slotProps={{
                input: { readOnly: true },
              }}
            />
            <TextField
              margin="dense"
              fullWidth
              label="Location"
              variant="outlined"
              value={props.row?.Address}
              slotProps={{
                input: { readOnly: true },
              }}
            />
          </Stack>
          <Stack direction="row" gap={1}>
            <TextField
              margin="dense"
              fullWidth
              label="PIN No."
              variant="outlined"
              value={props.row?.PID}
              slotProps={{
                input: { readOnly: true },
              }}
            />
            <TextField
              margin="dense"
              fullWidth
              id="outlined-basic"
              label="ARP No."
              variant="outlined"
              value={props.row?.ArpNo}
              slotProps={{
                input: { readOnly: true },
              }}
            />
            <TextField
              margin="dense"
              fullWidth
              variant="outlined"
              id="outlined-basic"
              label="Class"
              value={props.row?.classification?.[0]?.classification}
              slotProps={{
                input: { readOnly: true },
              }}
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
              value={assessedValueTotal}
              slotProps={{
                input: { readOnly: true },
              }}
            />
            <TextField
              margin="dense"
              fullWidth
              label="BASIC | SEF"
              variant="outlined"
              name="basicSef"
              onChange={handleFormChange}
            />
            <TextField
              margin="dense"
              fullWidth
              label="GARBAGE FEE"
              variant="outlined"
              name="basicSef"
              onChange={handleFormChange}
            />
            <TextField
              margin="dense"
              fullWidth
              label="TOTAL"
              variant="outlined"
              onChange={handleFormChange}
            />
          </Stack>
        </Fieldset>
      </ContainerModal>
    </>
  );
}
