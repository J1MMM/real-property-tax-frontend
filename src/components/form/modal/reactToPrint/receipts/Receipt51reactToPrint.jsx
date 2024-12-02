import React, { useRef } from "react";
import { Box, Button } from "@mui/material";
import { useReactToPrint } from "react-to-print";
import { Receipt51View } from "../../../../printable/cash-form/Receipt51View";
import { Receipt51Print } from "../../../../printable/cash-form/Receipt51Print";
import { ContainerReceipt51 } from "../../../../shared/ContainerReceipt51";

export const Receipt51reactToPrint = ({
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
      <ContainerReceipt51
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
        <Receipt51View />
        <Box sx={{ display: "none" }}>
          <Receipt51Print ref={contentRef} row={row} />
        </Box>
      </ContainerReceipt51>
    </>
  );
};
