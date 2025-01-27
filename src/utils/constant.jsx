import { Chip, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import { io } from "socket.io-client";

export const HEADER_HEIGHT = "80px";
export const DRAWER_WIDTH_OPEN = 250;
export const DRAWER_WIDTH_CLOSED = 60;
// export const BASE_URL = "http://10.10.10.86:4000";
export const BASE_URL = "http://localhost:4000";
export const SOCKET = io(BASE_URL);

export const ALERT_SEV = {
  error: "error",
  info: "info",
  success: "success",
  warning: "warning",
};

export const ASSESSMENT_ROLL_COLUMN = [
  {
    field: "fname",
    headerName: "PROPERTY OWNER",
    editable: false,
    headerClassName: "data-grid-header",
    width: 200,
    renderCell: (params, i) => {
      const fname = params.row?.fname;
      const mname = params.row?.mname;
      const lname = params.row?.lname;
      return (
        <span>
          {fname} {mname} {lname}
        </span>
      );
    },
  },
  {
    field: "PID",
    headerName: "PROPERTY INDEX NO.",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "ArpNo",
    headerName: "ARP NO.",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "oldArp",
    headerName: "OLD ARP",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "Address",
    headerName: "OWNED ADDRESS",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "kind",
    headerName: "KIND",
    width: 250,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      return (
        <Stack flexDirection="row" gap={1}>
          <span>
            {" "}
            {params?.row?.Boundaries?.land == true && (
              <Chip size="small" label="LAND" />
            )}
          </span>
          <span>
            {params?.row?.Boundaries?.building == true && (
              <Chip size="small" label="BUILDING" />
            )}
          </span>
          <span>
            {params?.row?.Boundaries?.machinery == true && (
              <Chip size="small" label="MACHINERY" />
            )}
          </span>
          <span>
            {params?.row?.Boundaries?.others == true && (
              <Chip size="small" label="OTHERS" />
            )}
          </span>
        </Stack>
      );
    },
  },
  {
    field: "classification",
    headerName: "CLASS",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      const classification = Array.isArray(params.row?.classification)
        ? params.row?.classification
        : [];

      return (
        <Stack flexDirection="row" gap={1} alignItems="center" height="100%">
          {classification?.map((obj, i) => (
            <Chip key={i} label={obj?.classification} size="small" />
          ))}
        </Stack>
      );
    },
  },
  {
    field: "LocationOfProperty",
    headerName: "LOCATION OF PROPERTY",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",

    renderCell: (params, i) => {
      const block = params.row?.BLOCK;
      const brgy = params.row?.Brgy;
      return (
        <span>
          {block} {brgy}
        </span>
      );
    },
  },
  {
    field: "AssessedValue",
    headerName: "ASSESSED VALUE",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      const classification = params.row?.classification || [];
      return <span>{classification[0]?.assessedValue}</span>;
    },
  },
  {
    field: "TAXABILITY",
    headerName: "TAXABILITY",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",

    renderCell: (params, i) => {
      const TAXABILITY = params.row?.TAXABILITY;
      return <span>{TAXABILITY?.toUpperCase()}</span>;
    },
  },
  {
    field: "dateOfEffectivity",
    headerName: "EFFECTIVITY",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      const dateOfEffectivity = dayjs(params.row?.dateOfEffectivity);
      return <span>{dateOfEffectivity.format("MM/DD/YYYY")}</span>;
    },
  },
];

export const CENCELS_TABLE_COLUMN = [
  {
    field: "status",
    headerName: "STATUS",
    editable: false,
    headerClassName: "data-grid-header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "fname",
    headerName: "PROPERTY OWNER",
    editable: false,
    headerClassName: "data-grid-header",
    width: 200,
    renderCell: (params, i) => {
      const fname = params.row?.fname;
      const mname = params.row?.mname;
      const lname = params.row?.lname;
      return (
        <span>
          {fname} {mname} {lname}
        </span>
      );
    },
  },
  {
    field: "PID",
    headerName: "PROPERTY INDEX NO.",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },

  {
    field: "ArpNo",
    headerName: "ARP NO.",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "oldArp",
    headerName: "OLD ARP",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "Address",
    headerName: "OWNED ADDRESS",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },

  {
    field: "",
    headerName: "KIND",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      return (
        <Stack flexDirection="row" gap={1}>
          <span>
            {" "}
            {params?.row?.Boundaries?.land == true && (
              <Chip size="small" label="LAND" />
            )}
          </span>
          <span>
            {params?.row?.Boundaries?.building == true && (
              <Chip size="small" label="BUILDING" />
            )}
          </span>
          <span>
            {params?.row?.Boundaries?.machinery == true && (
              <Chip size="small" label="MACHINERY" />
            )}
          </span>
          <span>
            {params?.row?.Boundaries?.others == true && (
              <Chip size="small" label="OTHERS" />
            )}
          </span>
        </Stack>
      );
    },
  },
  {
    field: "classification",
    headerName: "CLASS",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      const classification = Array.isArray(params.row?.classification)
        ? params.row?.classification
        : [];

      return (
        <Stack flexDirection="row" gap={1} alignItems="center" height="100%">
          {classification?.map((obj, i) => (
            <Chip key={i} label={obj?.classification} size="small" />
          ))}
        </Stack>
      );
    },
  },
  {
    field: "LocationOfProperty",
    headerName: "LOCATION OF PROPERTY",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",

    renderCell: (params, i) => {
      const block = params.row?.BLOCK;
      const brgy = params.row?.Brgy;
      return (
        <span>
          {block} {brgy}
        </span>
      );
    },
  },
  {
    field: "AssessedValue",
    headerName: "ASSESSED VALUE",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      const classification = params.row?.classification || [];
      return <span>{classification[0]?.assessedValue}</span>;
    },
  },
  {
    field: "TAXABILITY",
    headerName: "TAXABILITY",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",

    renderCell: (params, i) => {
      const TAXABILITY = params.row?.TAXABILITY;
      return <span>{TAXABILITY?.toUpperCase()}</span>;
    },
  },
  {
    field: "dateOfEffectivity",
    headerName: "EFFECTIVITY",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      const dateOfEffectivity = dayjs(params.row?.dateOfEffectivity);
      return <span>{dateOfEffectivity.format("MM/DD/YYYY")}</span>;
    },
  },
];

const quarter_labels = {
  first: "1st Quarter",
  second: "2nd Quarter",
  third: "3rd Quarter",
  fourth: "4th Quarter",
};

export const PAYMENT_ORDER_TABLE_COLUMN = [
  {
    field: "arpNo",
    headerName: "ARP NO.",
    flex: 1,
    headerClassName: "data-grid-header",
  },
  {
    field: "pin",
    headerName: "PIN",
    flex: 1,
    headerClassName: "data-grid-header",
  },
  {
    field: "formattedAssessedValue",
    headerName: "Assessed Value",
    flex: 1,
    headerClassName: "data-grid-header",
  },
  {
    field: "taxDue",
    headerName: "Tax Due",
    flex: 1,
    headerClassName: "data-grid-header",
    renderCell: (params) => {
      const taxDue = params.row?.taxDue;
      return taxDue?.year();
    },
  },
  {
    field: "basicTax",
    headerName: "basic Tax",
    flex: 1,
    headerClassName: "data-grid-header",
  },
  {
    field: "quarter",
    headerName: "Quarter",
    flex: 1,
    headerClassName: "data-grid-header",
    renderCell: (params) => {
      const obj = params.row?.selectedQuarters;

      if (!obj) return "No quarters selected";

      const labels = {
        first: "1st",
        second: "2nd",
        third: "3rd",
        fourth: "4th",
      };

      const selectedQuarters = Object.keys(obj)
        .filter((key) => obj[key])
        .map((key) => labels[key])
        .join(", ");

      return selectedQuarters || "No quarters selected";
    },
  },
  {
    field: "penalty",
    headerName: "Penalty Percentage",
    headerClassName: "data-grid-header",
    flex: 1,
  },
  {
    field: "formattedTotal",
    headerName: "Total",
    headerClassName: "data-grid-header",
    flex: 1,
  },
];

export const CLASSIFICATION_COLUMN = [
  {
    field: "classification",
    headerName: "Classification",
    flex: 1,
    editable: true,
    headerClassName: "data-grid-header",
  },
  {
    field: "area",
    headerName: "Area",
    flex: 1,
    editable: true,
    headerClassName: "data-grid-header",
  },
  {
    field: "marketValue",
    headerName: "Market Value",
    flex: 1,
    editable: true,
    headerClassName: "data-grid-header",
  },
  {
    field: "actualUse",
    headerName: "Actual Use",
    flex: 1,
    editable: true,
    headerClassName: "data-grid-header",
  },
  {
    field: "level",
    headerName: "Level",
    flex: 1,
    editable: true,
    headerClassName: "data-grid-header",
  },
  {
    field: "assessedValue",
    headerName: "Assessed Value",
    editable: true,
    headerClassName: "data-grid-header",
    flex: 1,
  },
];

export const CLASSIFICATION_DEFAULT = {
  classification: "",
  area: "",
  marketValue: "",
  actualUse: "",
  level: "",
  assessedValue: "",
};

export const ASSESSOR_TAB_LINKS = [
  {
    to: "",
    label: "Assessment Roll",
  },
  {
    to: "pending",
    label: "Pending",
  },
  {
    to: "cancels",
    label: "Canscels",
  },
];

export const COMPUTED_COLUMN = [
  {
    field: "DATE",
    headerName: "DATE",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    editable: false,
    headerClassName: "data-grid-header",

    renderCell: (params, i) => {
      const date = dayjs(params.row?.DATE);
      return <span>{date?.format("MMMM, DD YYYY")}</span>;
    },
  },
  {
    field: "PropertyOwner",
    headerName: "PROPERTY OWNER NAME",
    width: 320,
    editable: false,
    headerClassName: "data-grid-header",

    renderCell: (params, i) => {
      const fname = params.row?.fname;
      const mname = params.row?.mname;
      const lname = params.row?.lname;
      return (
        <span>
          {fname} {mname} {lname}
        </span>
      );
    },
  },
  {
    field: "address",
    headerName: "LOCATION",
    width: 320,
    editable: false,
    headerClassName: "data-grid-header",

    renderCell: (params, i) => {
      const block = params.row?.BLOCK;
      const brgy = params.row?.Brgy;
      return (
        <span>
          {block} {brgy}
        </span>
      );
    },
  },
  {
    field: "PID",
    headerName: "PIN NUMBER",
    width: 220,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "ArpNo",
    headerName: "ARP No.",
    width: 270,
    editable: false,
    headerClassName: "data-grid-header",
  },

  {
    field: "oldArp",
    headerName: "OLD ARP",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "AssessedValue",
    headerName: "ASSESSED VALUE",
    width: 220,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
  },
  {
    field: "Amount",
    headerName: "AMOUNT",
    width: 220,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "ComputedBy",
    headerName: "COMPUTED BY:",
    width: 220,
    editable: false,
    headerClassName: "data-grid-header",
  },
];

export const LANDTAX_TAB_LINKS = [
  {
    to: "",
    label: "Assessment Roll",
  },
  {
    to: "computed",
    label: "Computed",
  },
  {
    to: "paidlist",
    label: "Paid List",
  },
];

export const CASH_TAB_LINKS = [
  {
    to: "",
    label: "Pending",
  },
  {
    to: "paidlist",
    label: "Paid List",
  },
];

export const BRGY_LIST = [
  "I-A",
  "I-B",
  "I-C",
  "II-A",
  "II-B",
  "II-C",
  "II-D",
  "II-E",
  "II-F",
  "III-A",
  "III-B",
  "III-C",
  "III-D",
  "III-E",
  "III-F",
  "IV-A",
  "IV-B",
  "IV-C",
  "V-A",
  "V-B",
  "V-C",
  "V-D",
  "VI-A",
  "VI-B",
  "VI-C",
  "VI-D",
  "VI-E",
  "VII-A",
  "VII-B",
  "VII-C",
  "VII-D",
  "VII-E",
  "STA. ANA",
  "STO. ANGEL (Ilog)",
  "SAN ANTONIO I (Balanga)",
  "SAN ANTONIO II (Sapa)",
  "SAN BARTOLOME",
  "BAUTISTA",
  "SAN BUENAVENTURA (Palakpakin)",
  "STA. CATALINA (Sandig)",
  "CONCEPCION",
  "SAN CRISPIN",
  "STO. CRISTO",
  "SAN CRISTOBAL",
  "STA. CRUZ (Putol)",
  "DEL REMEDIO (Wawa)",
  "SAN DIEGO",
  "DOLORES",
  "STA. ELENA",
  "STA. FILOMENA (Banlagin)",
  "SAN FRANCISCO (Calihan)",
  "SAN GABRIEL",
  "SAN GREGORIO",
  "STA. ISABEL",
  "SAN IGNACIO",
  "SAN ISIDRO (Balagbag)",
  "SAN JOAQUIN",
  "SAN JOSE (Malamig)",
  "SAN JUAN",
  "SAN LORENZO (Saluyan)",
  "SAN LUCAS I (Malinaw)",
  "SAN LUCAS II (Malinaw)",
  "SAN MARCOS (Tikew)",
  "STA. MARIA",
  "STA. MA. MAGDALENA",
  "SAN MATEO",
  "SAN MIGUEL",
  "STA. MONICA",
  "SAN NICOLAS",
  "STO. NIÑO",
  "SAN PEDRO",
  "SAN RAFAEL",
  "SAN ROQUE",
  "STMO. ROSARIO",
  "SANTIAGO I (Bulaho)",
  "SANTIAGO II (Bulaho)",
  "SOLEDAD",
  "STA. VERONICA (Bae)",
  "SAN VICENTE",
];

export const INITIAL_FORM_DATA = {
  ArpNo: "",
  PID: "",
  fname: "",
  mname: "",
  lname: "",
  Address: "",
  TIN: "",
  Telephone: "",
  AdminFname: "",
  AdminMname: "",
  AdminLname: "",
  AdminAddress: "",
  AdminTIN: "",
  AdminTel: "",
  noAndSt: "",
  Brgy: "",
  oct: "",
  Survey: "",
  cct: "",
  LOT: "",
  DATE: null,
  BLOCK: "",
  TAXABILITY: "",
  qtr: 9,
  year: null,
  dateOfEffectivity: null,
  Boundaries: [],
  classification: [],
  oldArp: "",
  memoranda: "",
  previousOwner: "",
  previousOwner: "",
  previousAV: "",
  previousPid: "",
  memoranda: "",
};

export const BOUNDARIES_DETAILS_INITIAL = {
  boundaryType: "",
  active: "",
  description: "",
  NEboundary: "",
  northBoundary: "",
  EastBoundary: "",
  SEBoundary: "",
  southBoundary: "",
  SWBoundary: "",
  westBoundary: "",
  NWBoundary: "",
};

export const BOUNDARIES_INITIAL_STATE = {
  land: false,
  landDetails: BOUNDARIES_DETAILS_INITIAL,
  building: false,
  buildingDetails: BOUNDARIES_DETAILS_INITIAL,
  machinery: false,
  machineryDetails: BOUNDARIES_DETAILS_INITIAL,
  others: false,
  othersDetails: BOUNDARIES_DETAILS_INITIAL,
};

export const SUBDIVIDE_INITIAL_DATA = {
  ArpNo: "",
  latestArp: "",
  count: 0,
  startArpNo: "",
};

export const DATA_GRID_STYLE = {
  "& .MuiDataGrid-row": {
    "&:last-child .MuiDataGrid-cell": {
      borderBottom: "none", // Remove bottom border from last row
    },
  },
  ".MuiDataGrid-columnHeaderTitleContainer": {
    bgcolor: "primary.main",
  },

  ".data-grid-header": {
    bgcolor: "#1A237E",
    color: "#FFF",
    ".MuiDataGrid-columnHeaderTitle": {
      fontWeight: "bold",
    },
    "&.MuiDataGrid-root": {
      border: "none",
      color: "#FFF",
    },
    ".MuiIconButton-sizeSmall": {
      color: "#FFF",
    },
  },
  border: "none",
};

export const PAGE_SIZE_OPTION = [10, 50, 100];
export const DATA_GRID_INITIAL_STATE = {
  pagination: {
    paginationModel: {
      pageSize: 100,
      page: 0,
    },
  },
};
