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

export const Receipt56View = forwardRef((props, ref) => {
  const cellStyle = { border: "1px solid black", p: "8px" };

  return (
    <Box ref={ref} className="Receipt56Paper" sx={{ m: "10px" }}>
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
              sx={{ width: "90px", borderBottom: "1px solid" }}
            ></Typography>
            <Typography variant="body2">dated</Typography>
            <Typography
              sx={{ width: "90px", borderBottom: "1px solid" }}
            ></Typography>
            <Typography variant="body2">for the year 20</Typography>
            <Typography
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
          <Typography>5501331</Typography>
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
                sx={{ fontWeight: "bold", borderBottom: "1px solid", px: 1 }}
              >
                YMAN MANGARING
              </Typography>{" "}
              the sum of{" "}
              <Typography
                component="span"
                variant="body1"
                sx={{ fontWeight: "bold", borderBottom: "1px solid", px: 1 }}
              >
                TWO THOUSANDS THREE HUNDRED
              </Typography>{" "}
              pesos (₱{" "}
              <Typography
                component="span"
                variant="body1"
                sx={{ fontWeight: "bold", borderBottom: "1px solid", px: 1 }}
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
      <Box></Box>
    </Box>
  );
});
