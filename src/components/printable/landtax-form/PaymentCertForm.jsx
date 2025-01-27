import React, { forwardRef } from "react";
import logo1 from "../../../assets/images/seal.png";
import "./style.scss";
import { Box, Typography } from "@mui/material";
// import { Height } from "@mui/icons-material";

const today = new Date();
const formattedDate = today.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long", // e.g., "November"
  day: "numeric",
});

export const PaymentCertForm = forwardRef((props, ref) => {
  return (
    <Box
      ref={ref}
      className="PaymentCertPaper"
      sx={{ p: "30px", pt: "45px", border: "1px solid", borderBottom: "0" }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Box
          sx={{ display: "flex", alignItems: "center", pb: "10px", pl: "10px" }}
        >
          <img className="logo logo-1" src={logo1} alt="logo1" />
        </Box>
        <Box sx={{ pt: "20px" }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: "40px" }}>
            <Box
              sx={{
                display: "flex",
                width: "50%",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                minWidth: 380,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Republic of the Philippines
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                OFFICE OF THE CITY TREASURER
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                City of San Pablo
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              mb: "30px",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              CERTIFICATE OF PAYMENT
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Typography sx={{ fontWeight: "bold", borderBottom: "1px solid" }}>
              {formattedDate}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "start",
          mb: "10px",
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          TO WHOM IT MAY CONCERN:
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          mb: "15px",
        }}
      >
        <Typography variant="body1">
          This is to certify that according to the records of this Office, the
          property described hereunder which appears in the list of taxable real
          estate as declared in the name of{" "}
          <Typography
            component="span"
            variant="body1"
            sx={{ fontWeight: "bold", borderBottom: "1px solid" }}
          >
            CO OWN: GRACE LYNN & RONALD BRIAN
          </Typography>{" "}
          has No Real Estate Tax Delinquency.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Box sx={{ width: "90%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              flexGrow: 1,
              gap: 5,
            }}
          >
            <Box sx={{ display: "flex", width: "100%" }}>
              <Typography sx={{ width: "100px" }}>PIN No. :</Typography>
              <Typography
                sx={{
                  display: "flex",
                  width: "100%",
                  borderBottom: "1px solid",
                  justifyContent: "center",
                }}
              >
                09-505
              </Typography>
            </Box>
            <Box sx={{ display: "flex", width: "100%" }}>
              <Typography sx={{ width: "100px" }}>ARP No. :</Typography>
              <Typography
                sx={{
                  display: "flex",
                  width: "100%",
                  borderBottom: "1px solid",
                  justifyContent: "center",
                }}
              >
                07-0055 (COMM'S 2025) RL
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              flexGrow: 1,
              gap: 5,
            }}
          >
            <Box sx={{ display: "flex", width: "100%" }}>
              <Typography sx={{ width: "100px" }}>Location :</Typography>
              <Typography
                sx={{
                  display: "flex",
                  width: "100%",
                  borderBottom: "1px solid",
                  justifyContent: "center",
                }}
              >
                SAN IGNACIO
              </Typography>
            </Box>
            <Box sx={{ display: "flex", width: "100%" }}>
              <Typography sx={{ width: "100px" }}>ARP No. :</Typography>
              <Typography
                sx={{
                  display: "flex",
                  width: "100%",
                  borderBottom: "1px solid",
                  justifyContent: "center",
                }}
              >
                *07-0055-01436
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              flexGrow: 1,
              gap: 5,
            }}
          >
            <Box sx={{ display: "flex", width: "100%" }}>
              <Typography sx={{ width: "100px" }}></Typography>
              <Typography
                sx={{
                  width: "100%",
                }}
              ></Typography>
            </Box>
            <Box sx={{ display: "flex", width: "100%" }}>
              <Typography sx={{ width: "100px" }}>ARP No. :</Typography>
              <Typography
                sx={{
                  display: "flex",
                  width: "100%",
                  borderBottom: "1px solid",
                  justifyContent: "center",
                }}
              ></Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ASSESSED VALUE */}
      <Box>
        <Typography>ASSESSED VALUE :</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          gap: 4,
          mb: 1,
        }}
      >
        <Typography
          sx={{ display: "flex", justifyContent: "end", width: "100%" }}
        ></Typography>
        <Typography
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          RESIDENTIAL/COCAL
        </Typography>
        <Typography
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          RESIDENTIAL/COCAL
        </Typography>
      </Box>

      {/* Residential */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          gap: 4,
        }}
      >
        <Typography
          sx={{ display: "flex", justifyContent: "end", width: "100%" }}
        >
          Residential land :
        </Typography>
        <Typography
          sx={{
            display: "flex",
            width: "100%",
            borderBottom: "1px solid",
            justifyContent: "center",
          }}
        ></Typography>
        <Typography
          sx={{
            display: "flex",
            width: "100%",
            borderBottom: "1px solid",
            justifyContent: "center",
          }}
        ></Typography>
      </Box>

      {/* Improvement */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          gap: 4,
        }}
      >
        <Typography
          sx={{ display: "flex", justifyContent: "end", width: "100%" }}
        >
          Improvement :
        </Typography>
        <Typography
          sx={{
            display: "flex",
            width: "100%",
            borderBottom: "1px solid",
            justifyContent: "center",
          }}
        ></Typography>
        <Typography
          sx={{
            display: "flex",
            width: "100%",
            borderBottom: "1px solid",
            justifyContent: "center",
          }}
        ></Typography>
      </Box>
      {/* Machinery */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          gap: 4,
          mb: "20px",
        }}
      >
        <Typography
          sx={{ display: "flex", justifyContent: "end", width: "100%" }}
        >
          Machinery :
        </Typography>
        <Typography
          sx={{
            display: "flex",
            width: "100%",
            borderBottom: "1px solid",
            justifyContent: "center",
          }}
        ></Typography>
        <Typography
          sx={{
            display: "flex",
            width: "100%",
            borderBottom: "1px solid",
            justifyContent: "center",
          }}
        ></Typography>
      </Box>
      <Box sx={{ mb: "20px" }}>
        <Typography variant="body1">
          The latest payment of the tax on the above-described property is for
          the{" "}
          <Typography
            component="span"
            variant="body1"
            sx={{ fontWeight: "bold", borderBottom: "1px solid" }}
          >
            FULL YEAR OF 2024
          </Typography>{" "}
          in the total amount of{" "}
          <Typography
            component="span"
            variant="body1"
            sx={{ fontWeight: "bold", borderBottom: "1px solid" }}
          >
            951.48
          </Typography>{" "}
          acknowledged under Real Estate Tax Receipt No.{" "}
          <Typography
            component="span"
            variant="body1"
            sx={{ fontWeight: "bold", borderBottom: "1px solid" }}
          >
            5523013
          </Typography>{" "}
          dated{" "}
          <Typography
            component="span"
            variant="body1"
            sx={{ fontWeight: "bold", borderBottom: "1px solid" }}
          >
            27/03/2024
          </Typography>
          .
        </Typography>
      </Box>
      <Box sx={{ mb: "10px" }}>
        <Typography variant="body1">
          This certification has been issued upon the request of{" "}
          <Typography
            component="span"
            variant="body1"
            sx={{ fontWeight: "bold", borderBottom: "1px solid" }}
          >
            RUBI DIAZ
          </Typography>{" "}
          for the purpose of;
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Typography>Purpose: </Typography>
        <Typography></Typography>
        <Typography></Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mb: "20px" }}>
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            height: "7vh",
            borderBottom: "1px solid",
          }}
        >
          Transfer of Ownership
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Box
          sx={{
            width: "50%",
            p: "20px",
          }}
        >
          <Box sx={{ display: "flex", mb: "20px" }}>
            <Typography variant="body2">Verified by :</Typography>
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                borderBottom: "1px solid",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              SETTE/KENTH
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="body2">Certification Fee :</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="body2">OR No. :</Typography>
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                borderBottom: "1px solid",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              5745621
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="body2">Date :</Typography>
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                borderBottom: "1px solid",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              09/09/2024
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="body2">Amount :</Typography>
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                borderBottom: "1px solid",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              850.00
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
            p: "20px",
            pt: "20px",
            gap: 5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              LUCIO GERALDO CIOLO
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              Asst. City Treasurer
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              NANCY C. TUBIGAN
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>LTOO IV</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
});
