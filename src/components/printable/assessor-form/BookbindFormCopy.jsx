import React, { forwardRef } from "react";
import "./style.scss";
import logo1 from "../../../assets/images/seal.png";
import logo2 from "../../../assets/images/trylogo.png";
import {
  Box,
  colors,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
// import { Height } from "@mui/icons-material";

// NUMBER TO WORDS
function numberToWords(num) {
  const a = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const b = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const g = ["", "thousand", "million", "billion", "trillion"];

  if (typeof num !== "number" || isNaN(num)) return "Not a number";
  if (num === 0) return "zero";

  const [integerPart, decimalPart] = num.toString().split(".");

  function convertIntegerToWords(n) {
    if (n === 0) return "";
    let result = "";
    let i = 0;
    while (n > 0) {
      let chunk = n % 1000;
      if (chunk) {
        let chunkInWords = "";
        if (chunk > 99) {
          chunkInWords += a[Math.floor(chunk / 100)] + " hundred ";
          chunk %= 100;
        }
        if (chunk > 19) {
          chunkInWords += b[Math.floor(chunk / 10)] + " " + a[chunk % 10] + " ";
        } else {
          chunkInWords += a[chunk] + " ";
        }
        result = chunkInWords + g[i] + " " + result;
      }
      n = Math.floor(n / 1000);
      i++;
    }
    return result.trim();
  }

  let words = convertIntegerToWords(parseInt(integerPart));

  if (decimalPart) {
    words += " point";
    for (const digit of decimalPart) {
      words += " " + a[parseInt(digit)];
    }
  }

  return words.trim();
}

function createData(
  classification,
  area,
  marketVal,
  actualUse,
  level,
  assessedVal
) {
  return { classification, area, marketVal, actualUse, level, assessedVal };
}

const style = {
  fontSize: "13px",
  border: "1px solid",
  padding: 0,
};

// SAMPLE DATA
const rows = [
  createData("RES.LAND", 5, 651, "RES", 15, 11232),
  createData("RES.LAND", 5, 595, "RES", 42, 1122),
  createData("RES.BLDG", 5, 651, "RES", 52, 11232),
  // createData("RES.BLDG", 5, 651, "RES", 85, 122),
  // createData("RES.LAND", 5, 521, "RES", 63, 1212),
];

export const BookbindFormCopy = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="BookbindPaper">
      <div className="header space-between">
        {/* display image  */}
        <img className="logo logo-1" src={logo1} alt="logo1" />
        <h3>BOOKBIND TAX DECLARATION OF REAL PROPERTY</h3>
        <img className="logo logo-2" src={logo2} alt="logo1" />
      </div>
      {/* how to access selected data */}
      {/* ARP */}
      <div className="stack space-between space">
        <body1>T.D. No. :</body1>
        <h5>{props?.row?.ArpNo}</h5>
        <body1>Property Identification No. :</body1>
        <h5>{props?.row?.PID}</h5>
      </div>

      {/* OWNER/S */}
      <div className="stack space-between">
        <div className="ownerAdmin name">
          <body1>Owner/s:</body1>
          <h5>
            {props?.row?.fname} {props?.row?.mname} {props?.row?.lname}
          </h5>
        </div>
        <div className="ownerAdmin num">
          <body1>TIN No. :</body1>
          <h5>{props?.row?.TIN}</h5>
        </div>
      </div>
      <div className="stack space-between space">
        <div className="ownerAdmin name">
          <body1>Address:</body1>
          <h5>{props?.row?.Address}</h5>
        </div>
        <div className="ownerAdmin num">
          <body1>Telephone No. :</body1>
          <h5>{props?.row?.Telephone}</h5>
        </div>
      </div>

      {/* Administrator/Beneficial */}
      <div className="stack space-between">
        <div className="ownerAdmin name">
          <body1>Administrator/Beneficial User:</body1>
          <h5>
            {props?.row?.AdminFname} {props?.row?.AdminMname}
            {props?.row?.AdminLname}
          </h5>
        </div>
        <div className="ownerAdmin num">
          <body1>TIN No. :</body1>
          <h5>{props?.row?.AdminTIN}</h5>
        </div>
      </div>
      <div className="stack space-between space">
        <div className="ownerAdmin name">
          <body1>Address:</body1>
          <h5>{props?.row?.AdminAddress}</h5>
        </div>
        <div className="ownerAdmin num">
          <body1>Telephone No. :</body1>
          <h5>{props?.row?.AdminTel}</h5>
        </div>
      </div>

      {/* LOC OF PROP */}
      <div className="stack space-between">
        <body1>Location of Property:</body1>
        <h5>{props?.row?.noAndSt}</h5>
        <h5>{props?.row?.Brgy}</h5>
        <h5>SAN PABLO CITY</h5>
      </div>
      <div className="stack space-between space locProp">
        <body1></body1>
        <body1>Number and Street</body1>
        <body1>Barangay/District</body1>
        <body1>Municipal & Province/City</body1>
      </div>

      {/* OCT/TCT/CLOA */}
      <div className="stack space-between">
        <div className="OCT1">
          <body1>OCT/TCT/CLOA No. :</body1>
          <h5>{props?.row?.oct}</h5>
        </div>
        <div className="OCT1">
          <body1>Survey No. :</body1>
          <h5>{props?.row?.Survey}</h5>
        </div>
      </div>
      <div className="stack space-between">
        <div className="OCT1">
          <body1>CCT:</body1>
          <h5>{props?.row?.cct}</h5>
        </div>
        <div className="OCT1">
          <body1>Lot No. :</body1>
          <h5>{props?.row?.LOT}</h5>
        </div>
      </div>
      <div className="stack space-between space">
        <div className="OCT1">
          <body1>Date:</body1>
          <h5>{props?.row?.DATE}</h5>
        </div>
        <div className="OCT1">
          <body1>Block No. :</body1>
          <h5>{props?.row?.BLOCK}</h5>
        </div>
      </div>

      {/* BOUNDARIES */}
      <div className="stack space-between">
        <body1>Boundaries:</body1>
      </div>
      <div className="stack space-between space locProp">
        <div className="bound1">
          <body1>North: NE:</body1>
          <h5>ALN 045 (LOT 15516-F-3)</h5>
        </div>
        <div className="bound1">
          <body1>South: SW:</body1>
          <h5>ALN 045 (LOT 15516-F-3)</h5>
        </div>
      </div>
      <div className="stack space-between space locProp">
        <div className="bound1">
          <body1>East: SE:</body1>
          <h5>ALN 045 (LOT 15516-F-3)</h5>
        </div>
        <div className="bound1">
          <body1>West: NW:</body1>
          <h5>ALN 045 (LOT 15516-F-3)</h5>
        </div>
      </div>

      {/* KIND OF PROPERTY ASSESSED */}
      <div className="stack space-between">
        <h5 className="kind">KIND OF PROPERTY ASSESSED:</h5>
      </div>
      <div className="stack space-between">
        <div className="kind1">
          <input type="checkbox" id="land" name="land" value="land"></input>
          <label htmlFor="land" style={{ fontSize: "11px" }}>
            LAND
          </label>
          <br />
        </div>
        <div className="kind1">
          <input
            type="checkbox"
            id="machinery"
            name="machinery"
            value="machinery"
          ></input>
          <label for="machinery" style={{ fontSize: "11px" }}>
            MACHINERY
          </label>
          <br />
        </div>
      </div>
      <div className="stack space-between space">
        <div className="kind1">
          <input
            type="checkbox"
            id="building"
            name="building"
            value="building"
          ></input>
          <label for="building" style={{ fontSize: "11px" }}>
            BUILDING
          </label>
          <br />
        </div>
        <div className="kind1">
          <input
            type="checkbox"
            id="others"
            name="others"
            value="others"
          ></input>
          <label for="others" style={{ fontSize: "11px" }}>
            OTHERS
          </label>
          <br />
        </div>
      </div>

      {/* ASSESSMENT TABLE */}
      <TableContainer component={Paper} sx={{ marginBottom: "15px" }}>
        <Table
          sx={{ maxWidth: "100%" }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={style}>
                Classification
              </TableCell>
              <TableCell align="center" sx={style}>
                Area
              </TableCell>
              <TableCell align="center" sx={style}>
                Market Value
              </TableCell>
              <TableCell align="center" sx={style}>
                Actual Use
              </TableCell>
              <TableCell align="center" sx={style}>
                Level
              </TableCell>
              <TableCell align="center" sx={style}>
                Assessed Value
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow>
                <TableCell component="th" scope="row" align="center" sx={style}>
                  {row.classification}
                </TableCell>
                <TableCell align="center" sx={style}>
                  {row.area}&nbsp;m²
                </TableCell>
                <TableCell align="center" sx={style}>
                  {new Intl.NumberFormat("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(row.marketVal)}
                </TableCell>
                <TableCell align="center" sx={style}>
                  {row.actualUse}
                </TableCell>
                <TableCell align="center" sx={style}>
                  {row.level}&nbsp;%
                </TableCell>
                <TableCell align="center" sx={style}>
                  {new Intl.NumberFormat("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(row.assessedVal)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell
                align="center"
                sx={{ ...style, fontWeight: "bold", color: "black" }}
              >
                Total:
              </TableCell>
              <TableCell
                align="center"
                sx={{ ...style, fontWeight: "bold", color: "black" }}
              >
                {rows.reduce((total, row) => total + row.area, 0)}&nbsp;m²
              </TableCell>
              <TableCell
                align="center"
                sx={{ ...style, fontWeight: "bold", color: "black" }}
              >
                {new Intl.NumberFormat("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(
                  rows.reduce((total, row) => total + row.marketVal, 0)
                )}
              </TableCell>
              <TableCell
                align="center"
                sx={{ ...style, fontWeight: "bold", color: "black" }}
              ></TableCell>
              <TableCell
                align="center"
                sx={{ ...style, fontWeight: "bold", color: "black" }}
              ></TableCell>
              <TableCell
                align="center"
                sx={{ ...style, fontWeight: "bold", color: "black" }}
              >
                {new Intl.NumberFormat("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(
                  rows.reduce((total, row) => total + row.assessedVal, 0)
                )}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

      {/* AMOUNT IN WORDS */}
      <div className="stack space-between">
        <body1>Total Assessed Value</body1>
        <h5>
          {numberToWords(
            rows.reduce((total, row) => total + row.assessedVal, 0)
          ).toUpperCase()}
        </h5>
      </div>
      <div className="space-between">
        <body1>Amount in words</body1>
      </div>

      {/* TAXABLE / EFFECTIVITY */}
      <div className="stack space-between space">
        <div className="stack">
          <div className="kind1">
            <input
              type="checkbox"
              id="taxable"
              name="taxable"
              value="taxable"
            ></input>
            <label for="taxable"> Taxable</label>
            <br></br>
          </div>
          <div className="kind1">
            <input
              type="checkbox"
              id="exampt"
              name="exampt"
              value="exampt"
            ></input>
            <label for="exampt"> Exempt</label>
            <br></br>
          </div>
        </div>
        <div className="stack">
          <body1>Effectively of Assessment/Reassessment:</body1>
        </div>
        <div className="stack ">
          <div className="stack flexgrow">
            <div className="stack">
              <h5>{props?.row?.qtr}</h5>
            </div>
            <body1>QTR.</body1>
          </div>
          <div className="stack flexgrow">
            <div className="stack">
              <h5>{new Date(props?.row?.year).getFullYear()}</h5>
            </div>
            <body1>Yr.</body1>
          </div>
        </div>
      </div>

      {/* APPROVED BY */}
      <div className="stack space-between space">
        <div className="stack">
          <h4>APPROVED BY:</h4>
        </div>
        <div className="stack flexgrow">
          <h4>EVA FLORES PUNTO</h4>
          <body1>O.I.C. -City Assessor</body1>
        </div>
        <div className="stack flexgrow">
          <h4>BLESILDA A. ALINEA</h4>
          <body1>LAOO IV</body1>
        </div>
        <div className="stack">
          <body1>Date:</body1>
          <h5>{new Date(props?.row?.dateOfEffectivity).getFullYear()}</h5>
        </div>
      </div>

      {/* CANCELS */}
      <div className="stack space-between space align">
        <div className="cancels">
          <div className="stack flexgrow align">
            <div className="cancels">
              <body1>This declaration cancels T.D. No.:</body1>
              <h5>{props?.row?.oldArp}</h5>
            </div>
            <div className="cancels">
              <body1>Property index Number:</body1>
              <h5>{props?.row?.previousPid}</h5>
            </div>
          </div>
        </div>
        <div className="cancels">
          <body1>Owner:</body1>
          <h5>{props?.row?.previousOwner}</h5>
        </div>
        <div className="cancels">
          <body1>Previous A. V. Php:</body1>
          <h5>{props?.row?.previousAV}</h5>
        </div>
      </div>

      <div className="stack space-between space align">
        <div className="memoranda detail">
          <div className="align">
            <body1>/mal</body1>
            <h5 className="kind">MEMORANDA:</h5>
            <h5 className="memo">{props?.row?.memoranda}</h5>
          </div>
        </div>
        <div className="memoranda ctc">
          <div className="flexgrow">
            <div className="stack flexgrow">
              <h4>CERTIFIED TRUE COPY</h4>
              <h4>FROM THE ORIGINAL PRF</h4>
            </div>
            <div className="spacer"></div>
            <div className="stack flexgrow">
              <h4>BLESILDA A. ALINEA</h4>
              <body1>LAOO IV</body1>
            </div>
          </div>
        </div>
      </div>

      <div className="stack space-between space align">
        <h5 className="kind">Notes:</h5>
        <body2>
          This declaration is for real property taxation purposes only and the
          valuation indicates herein are based on the schedule of unit market
          values prepared for the purpose and duly enacted into an Ordinance by
          the Sangguniang Panlungsod ng San Pablo under Ordinance No. 2013-60
          dated June 25, 2013. it does not and cannot by itself alone confer any
          ownership or legal to the property.
        </body2>
      </div>

      {/* SIGNs */}
      <div className="stack space-between ">
        <div className="initials">
          <div className="stack flexgrow">
            <h5>Yman Mangaring</h5>
            <body1>Printed By:</body1>
          </div>
          <div className="stack flexgrow">
            <h5>Yman Mangaring</h5>
            <body1>Encoded By:</body1>
          </div>
        </div>
        <div className="Stamp"></div>
      </div>
    </div>
  );
});
