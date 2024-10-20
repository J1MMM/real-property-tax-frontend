import React from "react";
import Fieldset from "../../shared/Fieldset";
import { Button } from "@mui/material";
import { ClassificationTable } from "../table/ClassificationTable";
import { AddClassificationModal } from "../modal/AddClassificationModal";
import { sumFieldInArray } from "../../../utils/helper";

export const ClassificationFields = ({
  props,
  addClassOnlick,
  open,
  onClose,
  handleAddClassification,
  handleClassificationChange,
  classificationData,
}) => {
  return (
    <>
      <Fieldset title="CLASSIFICATION">
        <Button
          variant="contained"
          sx={{ display: "block", ml: "auto", mb: 1 }}
          onClick={addClassOnlick}
          disabled={props?.readOnly}
        >
          Add Classification
        </Button>

        <ClassificationTable
          props={props}
          classification={props?.row?.classification}
          setFormData={props?.setSelectedRow}
        />
      </Fieldset>

      <AddClassificationModal
        props={props}
        open={open}
        onClose={onClose}
        handleAddClassification={handleAddClassification}
        handleClassificationChange={handleClassificationChange}
        classificationData={classificationData}
      />
    </>
  );
};
