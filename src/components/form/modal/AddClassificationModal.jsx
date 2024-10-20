import React from "react";
import { ContainerModal } from "../../shared/ContainerModal";
import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import { NumericFormat } from "react-number-format";

export const AddClassificationModal = ({
  props,
  open,
  onClose,
  handleAddClassification,
  handleClassificationChange,
  classificationData,
}) => {
  return (
    <ContainerModal
      maxWidth="sm"
      title="Add Classification"
      open={open}
      onClose={onClose}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleAddClassification();
      }}
      actionButton={
        <>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button variant="contained" size="small" type="submit">
            Add
          </Button>
        </>
      }
    >
      <Stack direction="row" gap={1}>
        <TextField
          required
          margin="dense"
          fullWidth
          label="Classification"
          variant="outlined"
          name="classification"
          value={classificationData?.classification}
          onChange={handleClassificationChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
        />
        <TextField
          required
          type="number"
          margin="dense"
          fullWidth
          label="Area"
          variant="outlined"
          name="area"
          value={classificationData?.area}
          onChange={handleClassificationChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
              endAdornment: <InputAdornment position="end">m²</InputAdornment>,
            },
          }}
        />

        <NumericFormat
          customInput={TextField}
          margin="dense"
          fullWidth
          label="Market Value"
          variant="outlined"
          name="marketValue"
          value={classificationData?.marketValue}
          onValueChange={(values) => {
            const { value } = values; // value will be the unformatted number (e.g., 1234567)
            handleClassificationChange({
              target: {
                name: "marketValue",
                value: value,
              },
            });
          }}
          thousandSeparator=","
          allowNegative={false} // Optional, to prevent negative numbers
        />
      </Stack>
      <Stack direction="row" gap={1}>
        <TextField
          required
          margin="dense"
          fullWidth
          label="Actual Use"
          variant="outlined"
          name="actualUse"
          value={classificationData?.actualUse}
          onChange={handleClassificationChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
            },
          }}
        />

        <TextField
          required
          margin="dense"
          fullWidth
          label="Level"
          variant="outlined"
          name="level"
          value={classificationData?.level}
          onChange={handleClassificationChange}
          slotProps={{
            input: {
              readOnly: props?.readOnly,
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            },
          }}
        />

        <NumericFormat
          customInput={TextField}
          margin="dense"
          fullWidth
          label="Assessed Value"
          variant="outlined"
          name="assessedValue"
          value={classificationData?.assessedValue}
          onValueChange={(values) => {
            const { value } = values; // value will be the unformatted number (e.g., 1234567)
            handleClassificationChange({
              target: {
                name: "assessedValue",
                value: value,
              },
            });
          }}
          thousandSeparator=","
          allowNegative={false} // Optional, to prevent negative numbers
        />
      </Stack>
    </ContainerModal>
  );
};
