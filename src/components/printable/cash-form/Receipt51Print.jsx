import React, { forwardRef } from "react";
import logo1 from "../../../assets/images/seal.png";
import { Box, FormControlLabel, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import receiptLogo from "../../../assets/images/receipt-logo.png";
import { CheckBox } from "@mui/icons-material";

export const Receipt51Print = forwardRef((props, ref) => {
  const cellStyle = { border: "1px solid black", p: "8px" };

  return (
    <Box
      ref={ref}
      className="Receipt51Paper"
      sx={{ width: "50%", border: "1px solid", m: "10px" }}
    >
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            border: "2px solid",
            width: "30%",
          }}
        >
          <img
            className="LOGO"
            src={receiptLogo}
            alt="logo"
            style={{ width: "65px" }}
          />
        </Box>
        <Box sx={{ width: "70%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "2px solid",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              Official Receipt of the
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              Republic of the Philipines
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", border: "2px solid", gap: 1, p: 1, pl: 1 }}
          >
            <Typography sx={{ fontWeight: "bold" }}>No.</Typography>
            <Typography>1234567</Typography>
          </Box>
          <Box
            sx={{ display: "flex", border: "2px solid", gap: 1, p: 1, pl: 1 }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Date:</Typography>
            <Typography>November 27, 2024</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Table sx={{ minWidth: "100%" }} size="small">
          <TableBody>
            <TableRow>
              <TableCell sx={cellStyle}>
                <b>Agency:</b> San Pablo City, Laguna
              </TableCell>
              <TableCell sx={cellStyle}>
                <b>Fund:</b>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell sx={cellStyle} colSpan={2}>
                <b>Payor:</b> ARIEL MENDOZA DIANGKINAY
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        {/* table2 */}
        <Table sx={{ minWidth: "100%" }} size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={cellStyle}>
                <p style={{ margin: "0", textAlign: "center" }}>
                  <b>Nature of</b>
                </p>
                <p style={{ margin: "0", textAlign: "center" }}>
                  <b>Collection</b>
                </p>
              </TableCell>
              <TableCell sx={cellStyle}>
                <p style={{ margin: "0", textAlign: "center" }}>
                  <b>Account</b>
                </p>
                <p style={{ margin: "0", textAlign: "center" }}>
                  <b>Code</b>
                </p>
              </TableCell>
              <TableCell sx={cellStyle}>
                <p style={{ margin: "0", textAlign: "center" }}>
                  <b>Amount</b>
                </p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={cellStyle}></TableCell>
              <TableCell sx={cellStyle}></TableCell>
              <TableCell sx={cellStyle}>385.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={cellStyle}></TableCell>
              <TableCell sx={cellStyle}></TableCell>
              <TableCell sx={cellStyle}>385.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={cellStyle}></TableCell>
              <TableCell sx={cellStyle}></TableCell>
              <TableCell sx={cellStyle}> 385.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={cellStyle}></TableCell>
              <TableCell sx={cellStyle}></TableCell>
              <TableCell sx={cellStyle}> 385.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={cellStyle}></TableCell>
              <TableCell sx={cellStyle}></TableCell>
              <TableCell sx={cellStyle}> 27.50/27.50</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={cellStyle}></TableCell>
              <TableCell sx={cellStyle}></TableCell>
              <TableCell sx={cellStyle}> 27.50/27.50</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={cellStyle}>Sticker for Garbage</TableCell>
              <TableCell sx={cellStyle}></TableCell>
              <TableCell sx={cellStyle}>50.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={cellStyle}>Garbage/Notarial Fee</TableCell>
              <TableCell sx={cellStyle}></TableCell>
              <TableCell sx={cellStyle}> 27.50/27.50</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={cellStyle} colSpan={2}>
                <b>Total</b>
              </TableCell>
              <TableCell sx={cellStyle}>
                <b>₱1,113.80</b>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{ border: "1px solid", p: "1px" }}
                colSpan={3}
              ></TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={cellStyle} colSpan={3}>
                Amount in words:
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={cellStyle} colSpan={3}>
                <b>ONE THOUSAND ONE HUNDRED THIRTEEN AND EIGHTY CENTAVOS</b>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        {/* 3rd table */}
        <Table sx={{ minWidth: "100%" }} size="small">
          <TableBody>
            <TableRow>
              <TableCell sx={cellStyle}>
                <input type="checkbox" id="cash" name="Cash" />
                <label for="cash">Cash</label>
              </TableCell>
              <TableCell sx={cellStyle}>Drawee Bank</TableCell>
              <TableCell sx={cellStyle}>Number</TableCell>
              <TableCell sx={cellStyle}>Date</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={cellStyle}>
                <input type="checkbox" id="cash" name="Cash" />
                <label for="cash">Check</label>
              </TableCell>
              <TableCell sx={cellStyle}></TableCell>
              <TableCell sx={cellStyle}></TableCell>
              <TableCell sx={cellStyle}></TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={cellStyle} colSpan={2}>
                <input type="checkbox" id="cash" name="Cash" />
                <label for="cash">Money Order</label>
              </TableCell>
              <TableCell sx={cellStyle}></TableCell>
              <TableCell sx={cellStyle}></TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{ border: "1px solid", borderBottom: "0" }}
                colSpan={4}
              >
                Received the amount stated above.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{ border: "1px solid", borderTop: "0" }}
                colSpan={4}
              >
                <Box
                  sx={{ display: "flex", justifyContent: "end", pt: "20px" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ margin: 0, borderBottom: "2px dashed black" }}>
                      LUCIO GERARDO G. CIOLO
                    </p>
                    <p style={{ margin: 0 }}>Collecting Officer</p>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell
                sx={{ display: "flex", gap: 0.5, border: "1px solid", py: "0" }}
                colSpan={4}
              >
                <p style={{ margin: "0" }}>NOTE:</p>
                <p style={{ margin: "0" }}>
                  Write the number and date of the receipt on the back of the
                  check or money order received.
                </p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
});
