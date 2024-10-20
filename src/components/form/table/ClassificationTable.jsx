import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import {
  CLASSIFICATION_COLUMN,
  DATA_GRID_INITIAL_STATE,
  DATA_GRID_STYLE,
  PAGE_SIZE_OPTION,
} from "../../../utils/constant";
import ClassificationCustomFooter from "../custom/ClassificationCustomFooter";
import { sumFieldInArray } from "../../../utils/helper";

export const ClassificationTable = ({ props, classification, setFormData }) => {
  const handleCellEdit = (id, field, value) => {
    const updatedArr = classification?.map((row) => {
      if (row?.id == id) {
        return { ...row, [field]: value };
      }
      return row;
    });
    setFormData((prev) => ({ ...prev, classification: updatedArr }));
  };

  const handleCellKeyDown = (event, cellParams) => {
    const { field, id } = event; // Get the field and id of the cell being edited
    const newValue = cellParams.target.value; // Get the current value of the input

    if (cellParams.key === "Enter") {
      handleCellEdit(id, field, newValue);
    }
  };

  const marketValueTotal = sumFieldInArray(
    props?.row?.classification || [],
    "marketValue"
  );

  const assessedValueTotal = sumFieldInArray(
    props?.row?.classification || [],
    "assessedValue"
  );

  const areaValueTotal = sumFieldInArray(
    props?.row?.classification || [],
    "area"
  );
  return (
    <DataGrid
      onCellKeyDown={handleCellKeyDown}
      rows={classification}
      columns={CLASSIFICATION_COLUMN}
      initialState={DATA_GRID_INITIAL_STATE}
      pageSizeOptions={PAGE_SIZE_OPTION}
      autoHeight
      disableRowSelectionOnClick
      sx={DATA_GRID_STYLE}
      slots={{
        footer: () => (
          <ClassificationCustomFooter
            marketValueTotal={marketValueTotal}
            assessedValueTotal={assessedValueTotal}
            areaValueTotal={areaValueTotal}
          />
        ),
      }}
    />
  );
};
