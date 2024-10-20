import { Checkbox, FormControlLabel, Stack } from "@mui/material";
import React from "react";

export const BoundariesCheckboxes = ({ props, handleCheckboxChange }) => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <FormControlLabel
          control={<Checkbox />}
          label="LAND"
          checked={props?.row?.Boundaries?.land}
          name="land"
          onChange={handleCheckboxChange}
          disabled={props?.readOnly}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="BUILDING"
          checked={props?.row?.Boundaries?.building}
          name="building"
          onChange={handleCheckboxChange}
          disabled={props?.readOnly}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="MACHINERY"
          checked={props?.row?.Boundaries?.machinery}
          name="machinery"
          onChange={handleCheckboxChange}
          disabled={props?.readOnly}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="OTHERS"
          checked={props?.row?.Boundaries?.others}
          name="others"
          onChange={handleCheckboxChange}
          disabled={props?.readOnly}
        />
      </Stack>
    </>
  );
};
