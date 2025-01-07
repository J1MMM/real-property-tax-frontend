import * as React from "react";
import { Box, Button, IconButton, TextField } from "@mui/material";
import Fieldset from "../../shared/Fieldset";
import { Stack } from "@mui/material";
import { ContainerModal } from "../../shared/ContainerModal";
import { sumFieldInArray } from "../../../utils/helper";
import { Close } from "@mui/icons-material";

export default function PaymentModalPreview(props) {
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
              value={props.row?.Brgy}
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
          </Stack>
        </Fieldset>

        <Fieldset title="Computation">
          <Box display="flex" justifyContent="flex-end" mb={1}>
            <Button
              variant="contained"
              size="small"
              onClick={() => props.setPaymentModalActive(true)}
            >
              Add Payment
            </Button>
          </Box>
          <Stack>
            {props?.row?.paymentList &&
              props?.row?.paymentList?.map((obj, i) => (
                <Stack key={i} direction="row" gap={1} alignItems="center">
                  <IconButton size="small" onClick={() => handleDelete(obj)}>
                    <Close />
                  </IconButton>
                  <TextField
                    value={obj?.assessedValue}
                    margin="dense"
                    fullWidth
                    label="Assessed Value"
                    variant="outlined"
                    name="assessedValue"
                    slotProps={{
                      input: { readOnly: true },
                    }}
                  />
                  <TextField
                    value={obj?.taxDue}
                    margin="dense"
                    fullWidth
                    label="Tax Due"
                    variant="outlined"
                    name="taxDue"
                    slotProps={{
                      input: { readOnly: true },
                    }}
                  />
                  <TextField
                    value={obj?.fullPayment}
                    margin="dense"
                    fullWidth
                    label="Full Payment"
                    variant="outlined"
                    name="fullPayment"
                    slotProps={{
                      input: { readOnly: true },
                    }}
                  />
                  <TextField
                    value={obj?.penalty}
                    margin="dense"
                    fullWidth
                    label="Penalty Per Cent"
                    variant="outlined"
                    name="penaltyPerCent"
                    slotProps={{
                      input: { readOnly: true },
                    }}
                  />
                  <TextField
                    value={obj?.total}
                    margin="dense"
                    fullWidth
                    label="TOTAL"
                    variant="outlined"
                    slotProps={{
                      input: { readOnly: true },
                    }}
                  />
                </Stack>
              ))}
          </Stack>
        </Fieldset>
      </ContainerModal>
    </>
  );
}
