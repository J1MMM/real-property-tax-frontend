import React, { forwardRef } from "react";
import { Box, FormControlLabel, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import receiptLogo from "../../../assets/images/receipt-logo.png";
import { CheckBox } from "@mui/icons-material";

export const Receipt56View = forwardRef((props, ref) => {
  const cellStyle = { border: "1px solid black", p: "0px", px: 1.5 };
  const installmentcellStyle = { p: 0, border: 0, fontSize: "12px" };
  const bodycellStyle = {
    border: "1px solid black",
    p: 1,
    textAlign: "center",
  };

  return (
    <Box
      ref={ref}
      className="Receipt56Paper"
      sx={{ m: "10px", border: "2px solid", p: 2 }}
    >
      {/* TITLE HEADER */}
      <Box sx={{ display: "flex", width: "100%", mb: 1 }}>
        <Box sx={{ width: "20%" }}></Box>

        <Box sx={{ width: "60%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Typography variant="body2">Previouss Tax Receipt No.</Typography>
            <Typography
              variant="body2"
              align="center"
              sx={{ width: "90px", borderBottom: "1px solid" }}
            >
              9882695
            </Typography>
            <Typography variant="body2">dated</Typography>
            <Typography
              variant="body2"
              align="center"
              sx={{ width: "90px", borderBottom: "1px solid" }}
            >
              5/18/2022
            </Typography>
            <Typography variant="body2">for the year 20</Typography>
            <Typography
              variant="body2"
              sx={{ width: "40px", borderBottom: "1px solid" }}
            ></Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              OFFICIAL RECEIPT OF THE REPUBLIC OF THE PHILIPPINES
            </Typography>
            <Typography variant="body2">
              Provincial or City Treasurer's Real Property Tax Receipt
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "20%",
            alignItems: "end",
            pb: 1,
            gap: 1,
          }}
        >
          <Typography>NO.</Typography>
          <Typography variant="h5">5501331</Typography>
        </Box>
      </Box>

      {/* TABLE HEADER */}
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            border: "1px solid",
            width: "10%",
          }}
        >
          <img
            className="LOGO"
            src={receiptLogo}
            alt="logo"
            style={{ width: "65px" }}
          />
        </Box>
        <Box sx={{ width: "90%" }}>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                border: "1px solid",
                p: 1.5,
                gap: 1,
              }}
            >
              <Typography variant="body2">Municipality/Province:</Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                LAGUNA
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                border: "1px solid",
                p: 1.5,
                gap: 1,
              }}
            >
              <Typography variant="body2">City:</Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                SAN PABLO CITY
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                border: "1px solid",
                p: 1.5,
                gap: 1,
              }}
            >
              {" "}
              <Typography variant="body2">Date:</Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                February 19, 2024
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              border: "1px solid",
              p: 1,
              boxSizing: "border-box",
            }}
          >
            <Typography variant="body2">
              Received from{" "}
              <Typography
                component="span"
                variant="body1"
                align="center"
                sx={{
                  display: "inline-block",
                  minWidth: "150px",
                  fontWeight: "bold",
                  borderBottom: "1px solid",
                  px: 1,
                }}
              >
                AUSTRIA SARAH JANE M/TO ULYSSES
              </Typography>{" "}
              the sum of{" "}
              <Typography
                component="span"
                variant="body1"
                align="center"
                sx={{
                  display: "inline-block",
                  minWidth: "150px",
                  fontWeight: "bold",
                  borderBottom: "1px solid",
                  px: 1,
                }}
              >
                TWO THOUSANDS THREE HUNDRED
              </Typography>{" "}
              pesos (₱{" "}
              <Typography
                component="span"
                variant="body1"
                align="center"
                sx={{
                  display: "inline-block",
                  minWidth: "50px",
                  fontWeight: "bold",
                  borderBottom: "1px solid",
                  px: 1,
                }}
              >
                2300
              </Typography>{" "}
              ) Philippine Currency. in full oe as installment payment of REAL
              PROPERTY TAX for the calendar Year 20_______ ipon property
              described in the Assessment Rolls as follows:
            </Typography>{" "}
          </Box>
        </Box>
      </Box>

      {/* TABLE BODY */}
      <Box>
        {/* 1ST Table */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                variant="body2"
                rowSpan={2}
                align="center"
                sx={cellStyle}
              >
                Name of Declared Owner
              </TableCell>
              <TableCell
                variant="body2"
                rowSpan={2}
                align="center"
                sx={cellStyle}
              >
                Location Number and Street or Barangay
              </TableCell>
              <TableCell
                variant="body2"
                rowSpan={2}
                align="center"
                sx={cellStyle}
              >
                Lot and Block Number
              </TableCell>
              <TableCell
                variant="body2"
                rowSpan={2}
                align="center"
                sx={cellStyle}
              >
                Tax Declaration Number
              </TableCell>
              <TableCell
                variant="body2"
                align="center"
                sx={cellStyle}
                colSpan={3}
              >
                ASSESSED VALUE
              </TableCell>
              <TableCell
                variant="body2"
                rowSpan={2}
                align="center"
                sx={cellStyle}
              >
                Tax Due
              </TableCell>
              <TableCell
                variant="body2"
                align="center"
                sx={cellStyle}
                colSpan={2}
              >
                INSTALLMENT*
              </TableCell>
              <TableCell
                variant="body2"
                rowSpan={2}
                align="center"
                sx={cellStyle}
              >
                Full Payment
              </TableCell>
              <TableCell
                variant="body2"
                rowSpan={2}
                align="center"
                sx={cellStyle}
              >
                Penalty Per Cent
              </TableCell>
              <TableCell
                variant="body2"
                rowSpan={2}
                align="center"
                sx={cellStyle}
              >
                TOTAL
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell variant="body2" sx={cellStyle}>
                Land
              </TableCell>
              <TableCell variant="body2" sx={cellStyle}>
                Improv'nt
              </TableCell>
              <TableCell variant="body2" sx={cellStyle}>
                Total
              </TableCell>
              <TableCell variant="body2" sx={cellStyle}>
                No.
              </TableCell>
              <TableCell variant="body2" sx={cellStyle}>
                Payment
              </TableCell>
            </TableRow>
          </TableHead>
          {/* VALUES */}
          <TableBody>
            <TableRow>
              <TableCell variant="body2" sx={bodycellStyle}></TableCell>
              <TableCell variant="body2" sx={bodycellStyle}></TableCell>
              <TableCell variant="body2" sx={bodycellStyle}></TableCell>
              <TableCell variant="body2" sx={bodycellStyle}></TableCell>
              <TableCell variant="body2" sx={bodycellStyle}></TableCell>
              <TableCell variant="body2" sx={bodycellStyle}></TableCell>
              <TableCell variant="body2" sx={bodycellStyle}></TableCell>
              <TableCell variant="body2" sx={bodycellStyle}></TableCell>
              <TableCell variant="body2" sx={bodycellStyle}></TableCell>
              <TableCell variant="body2" sx={bodycellStyle}></TableCell>
              <TableCell variant="body2" sx={bodycellStyle}></TableCell>
              <TableCell variant="body2" sx={bodycellStyle}></TableCell>
              <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="body2" sx={bodycellStyle}></TableCell>
              <TableCell variant="body2" sx={bodycellStyle}></TableCell>
              <TableCell variant="body2" sx={bodycellStyle}></TableCell>
              <TableCell variant="body2" sx={bodycellStyle}></TableCell>
              <TableCell variant="body2" sx={bodycellStyle}></TableCell>
              <TableCell variant="body2" sx={bodycellStyle}></TableCell>
              <TableCell variant="body2" sx={bodycellStyle}></TableCell>
              <TableCell variant="body2" sx={bodycellStyle}></TableCell>
              <TableCell variant="body2" sx={bodycellStyle}></TableCell>
              <TableCell variant="body2" sx={bodycellStyle}></TableCell>
              <TableCell variant="body2" sx={bodycellStyle}></TableCell>
              <TableCell variant="body2" sx={bodycellStyle}></TableCell>
              <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            </TableRow>
          </TableBody>
          <TableRow>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              colSpan={13}
              sx={{ border: "1px solid", p: "1px" }}
            ></TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={9} sx={{ ...bodycellStyle, px: 2, py: 0 }}>
              <Typography variant="body2">
                Total taxes by Money Order, Treasury Warrant or Check No.
                <Typography
                  variant="body2"
                  component="span"
                  align="center"
                  sx={{
                    display: "inline-block",
                    minWidth: "100px",
                    borderBottom: "1px solid",
                    marginLeft: 1,
                  }}
                ></Typography>{" "}
                dated
                <Typography
                  variant="body2"
                  component="span"
                  align="center"
                  sx={{
                    display: "inline-block",
                    minWidth: "50px",
                    borderBottom: "1px solid",
                    marginLeft: 1,
                  }}
                ></Typography>{" "}
                , 20
                <Typography
                  variant="body2"
                  component="span"
                  align="center"
                  sx={{
                    display: "inline-block",
                    minWidth: "10px",
                    borderBottom: "1px solid",
                    marginLeft: 1,
                  }}
                ></Typography>
              </Typography>
            </TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
            <TableCell variant="body2" sx={bodycellStyle}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              colSpan={13}
              sx={{ border: "1px solid", p: "1px" }}
            ></TableCell>
          </TableRow>
        </Table>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            width: "13%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          HERSLEY
        </Box>
        <Box
          sx={{
            width: "70%",
            p: 0,
          }}
        >
          <Typography variant="body2" sx={installmentcellStyle}>
            *Payment without penalty may be made within the period stated below
            if by installment:
          </Typography>
          <Box sx={{ width: "30vw", ml: 10 }}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell sx={installmentcellStyle}>1st</TableCell>
                  <TableCell sx={installmentcellStyle}>Installment</TableCell>
                  <TableCell sx={installmentcellStyle}>-</TableCell>
                  <TableCell sx={installmentcellStyle}>
                    January 1 to March 31, of the year
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={installmentcellStyle}>2nd</TableCell>
                  <TableCell sx={installmentcellStyle}>Installment</TableCell>
                  <TableCell sx={installmentcellStyle}>-</TableCell>
                  <TableCell sx={installmentcellStyle}>
                    April 1 to June 31, of the year
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={installmentcellStyle}>3rd</TableCell>
                  <TableCell sx={installmentcellStyle}>Installment</TableCell>
                  <TableCell sx={installmentcellStyle}>-</TableCell>
                  <TableCell sx={installmentcellStyle}>
                    July 1 to Sept. 31, of the year
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={installmentcellStyle}>4th</TableCell>
                  <TableCell sx={installmentcellStyle}>Installment</TableCell>
                  <TableCell sx={installmentcellStyle}>-</TableCell>
                  <TableCell sx={installmentcellStyle}>
                    October 1 to Dec. 31, of the year
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "30%",
            p: 1,
          }}
        >
          <Box>
            <Typography
              variant="body1"
              align="center"
              sx={{ borderBottom: "1px solid" }}
            >
              ARJAN V. BABANI
            </Typography>
            <Typography variant="body2" align="center">
              Provincial or City Treasurer
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body1"
              align="center"
              sx={{ borderBottom: "1px solid" }}
            >
              RICA / JOYCE
            </Typography>
            <Typography variant="body2" align="center">
              Deputy
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
});
