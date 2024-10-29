import React from "react";
import Fieldset from "../../shared/Fieldset";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { BRGY_LIST } from "../../../utils/constant";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export const PropertyInfoFields = ({ props, handleFormChange }) => {
  return (
    <Fieldset title="Property Information">
      <Stack direction="row" gap={1}>
        <TextField
          margin="dense"
          fullWidth
          label="Number and Street"
          variant="outlined"
          name="noAndSt"
          value={props?.row?.noAndSt}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
        />

        <FormControl fullWidth margin="dense">
          <InputLabel id="Barangay/District">Barangay/District</InputLabel>
          <Select
            labelId="Barangay/District"
            id="demo-simple-select"
            value={props?.row?.Brgy || ""}
            required
            name="Brgy"
            label="Barangay/District"
            onChange={handleFormChange}
            readOnly={props?.readOnly || props?.pendingPage}
          >
            {BRGY_LIST.map((val, index) => (
              <MenuItem key={index} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          margin="dense"
          fullWidth
          label="Municipality & Province/City"
          variant="outlined"
          value={"San Pablo"}
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
          label="OCT/TCT/CLOA No.."
          variant="outlined"
          name="oct"
          value={props?.row?.oct}
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
          label="Survey No."
          variant="outlined"
          name="Survey"
          value={props?.row?.Survey}
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
          label="CCT"
          variant="outlined"
          name="cct"
          value={props?.row?.cct}
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
          label="Lot No"
          variant="outlined"
          name="LOT"
          value={props?.row?.LOT}
          onChange={handleFormChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
        />
      </Stack>
      <Stack direction="row" gap={1}>
        <FormControl margin="dense" fullWidth>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              value={props?.row?.DATE == null ? null : dayjs(props?.row?.DATE)}
              readOnly={props?.readOnly}
              onChange={(newVal) =>
                props?.setSelectedRow((prev) => ({
                  ...prev,
                  DATE: newVal,
                }))
              }
              slotProps={{ textField: { required: true } }}
            />
          </LocalizationProvider>
        </FormControl>
        <TextField
          margin="dense"
          fullWidth
          label="Block No."
          variant="outlined"
          name="BLOCK"
          value={props?.row?.BLOCK}
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
