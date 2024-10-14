import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { CLASSIFICATION_COLUMN } from "../utils/constant";
import ClassificationCustomFooter from "./ClassificationCustomFooter";

export const ClassificationTable = ({
  classification,
  setFormData,
  totalMarketValue,
  assessedValueTotal,
  areaTotal,
}) => {
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

    console.log(event);

    if (cellParams.key === "Enter") {
      // Check if Enter key was pressed
      handleCellEdit(id, field, newValue); // Call the function to edit the cell value
    }
  };
  return (
    <DataGrid
      onCellKeyDown={handleCellKeyDown}
      rows={classification}
      columns={CLASSIFICATION_COLUMN}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      pageSizeOptions={[10]}
      autoHeight
      disableRowSelectionOnClick
      sx={{
        ".data-grid-header": {
          bgcolor: "primary.main",
          color: "#fff",
        },
        "& .MuiDataGrid-columnHeaderTitle": {
          fontWeight: "bold", // Make header title bold
        },
        "& .MuiDataGrid-cell": {
          borderRight: "1px solid rgba(224, 224, 224, 1)", // Right border for each cell
        },
        "& .MuiDataGrid-row": {
          "&:last-child .MuiDataGrid-cell": {
            borderBottom: "none", // Remove bottom border from last row
          },
        },
      }}
      slots={{
        footer: () => (
          <ClassificationCustomFooter
            totalMarketValue={totalMarketValue}
            assessedValueTotal={assessedValueTotal}
            areaTotal={areaTotal}
          />
        ),
      }}
    />
  );
};
