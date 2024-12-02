import React, { useRef } from "react";
import { ContainerModal } from "../../../shared/ContainerModal";
import { ClientFormCopy } from "../../../printable/assessor-form/ClientFormCopy";
import { AssessorFormCopy } from "../../../printable/assessor-form/AssessorFormCopy";
import { BookbindFormCopy } from "../../../printable/assessor-form/BookbindFormCopy";
import { Button } from "@mui/material";
import { useReactToPrint } from "react-to-print";

export const TaxdecPrintableFormModal = ({
  open,
  onClose,
  row,
  disable,
  formType,
}) => {
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  // Choose which form to render based on the formType prop
  const renderForm = () => {
    if (formType === "ClientForm") {
      return <ClientFormCopy ref={contentRef} row={row} />;
    }
    if (formType === "AssessorForm") {
      return <AssessorFormCopy ref={contentRef} row={row} />;
    }
    if (formType === "BookbindForm") {
      return <BookbindFormCopy ref={contentRef} row={row} />;
    }
    return null; // Return nothing if no formType matches
  };

  return (
    <ContainerModal
      title="TAX DECLARATION OF REAL PROPERTY FORM"
      open={open}
      onClose={onClose}
      actionButton={
        <>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={reactToPrintFn}
            disabled={disable}
          >
            Print
          </Button>
        </>
      }
    >
      {renderForm()}
    </ContainerModal>
  );
};
