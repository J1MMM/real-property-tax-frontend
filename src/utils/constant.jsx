export const HEADER_HEIGHT = "80px";
export const DRAWER_WIDTH_OPEN = 200;
export const DRAWER_WIDTH_CLOSED = 60;
export const BASE_URL = "http://192.168.68.113:4000";

// Role IDs following a pattern for different categories
const ROLES_LIST = {
  SuperAdmin: 1000, // Super Administrator
  Admin: 1100, // Administrator
  Office1: 2100, // Custom Office 1 (Management)
  Office2: 2200, // Custom Office 2 (Management)
  Office3: 2300, // Custom Office 3 (Management)
  Cashier: 3100, // Cashier role (Operations)
};

export default ROLES_LIST;

export const ASSESSMENT_ROLL_COLUMN = [
  {
    field: "fname",
    headerName: "PROPERTY OWNER",
    width: 300,
    editable: false,
    headerClassName: "data-grid-header",
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
    field: "Address",
    headerName: "OWNED ADDRESS",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "Kind",
    headerName: "KIND",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
  },
  {
    field: "Class",
    headerName: "CLASS",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      const classification = params.row.classification;
      return <span>{classification[0].actualUse}</span>;
    },
  },
  {
    field: "LocationOfProperty",
    headerName: "LOCATION OF PROPERTY",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "AssessedValue",
    headerName: "ASSESSED VALUE",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      const classification = params.row.classification;
      return <span>{classification[0].assessedVal}</span>;
    },
  },
  {
    field: "Taxability",
    headerName: "TAXABILITY",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
  },
  {
    field: "Effectivity",
    headerName: "EFFECTIVITY",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
  },
];

export const ASSESSMENT_ROLL_TAB_LINKS = [
  {
    to: "/",
    label: "Assessment Roll",
  },
  {
    to: "/archive",
    label: "Archive",
  },
];
