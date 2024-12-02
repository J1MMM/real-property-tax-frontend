import React, { useRef } from "react";
import { Box, Button } from "@mui/material";
import { useReactToPrint } from "react-to-print";
import { Receipt56View } from "../../../../printable/cash-form/Receipt56View";
import { Receipt51Print } from "../../../../printable/cash-form/Receipt51Print";
import { ContainerReceipt56 } from "../../../../shared/ContainerReceipt56";

export const Receipt56reactToPrint = ({
  open,
  onClose,
  row,
  disable,
  formType,
}) => {
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <>
      <ContainerReceipt56
        title="RECEIPT FORM"
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
        <Receipt56View />
        <Box sx={{ display: "none" }}>
          <Receipt56View ref={contentRef} row={row} />
        </Box>
      </ContainerReceipt56>
    </>
  );
};
