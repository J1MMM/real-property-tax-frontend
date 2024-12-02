import React, { useRef } from "react";
import { ContainerModal } from "../../../shared/ContainerModal";
import { Button } from "@mui/material";
import { useReactToPrint } from "react-to-print";
import { PaymentCertForm } from "../../../printable/landtax-form/PaymentCertForm";

export const PaymentCertPrintableFormModal = ({
  open,
  onClose,
  row,
  disable,
  formType,
}) => {
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <ContainerModal
      title="CERTIFICATE OF PAYMENT FORM"
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
      <PaymentCertForm ref={contentRef} row={row} />
    </ContainerModal>
  );
};
