import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ComputationModal from "../../components/form/modal/ComputationModal";
import { PageContainer } from "../../components/layout/PageContainer";
import useData from "../../hooks/useData";
import {
  ASSESSMENT_ROLL_COLUMN,
  DATA_GRID_INITIAL_STATE,
  DATA_GRID_STYLE,
  PAGE_SIZE_OPTION,
} from "../../utils/constant";
import { TableToolbar } from "../../components/form/table/TableToolbar";
import AddPaymentModal from "../../components/form/modal/AddPaymentModal";
import axios from "../../api/axios";
import { Button } from "@mui/material";
import PaymentModalPreview from "../../components/form/modal/PaymentModalPreview";
import AddPaymentItemModal from "../../components/form/modal/AddPaymentItemModal";
import ConfirmationDialog from "../../components/shared/ConfirmationDialog";

const formDataDefault = {
  id: "",
  arpNo: "",
  assessedValue: "",
  formattedAssessedValue: "",
  taxDue: null,
  basicTax: "",
  penalty: "",
  formattedTotal: "",
  total: 0,
  selectedQuarters: {
    first: false,
    second: false,
    third: false,
    fourth: false,
  },
};

const penaltyTable2024 = {
  1986: [9.14, 9.16, 9.18, 9.2, 9.22, 9.24, 9.26, 9.28, 9.3, 9.32, 9.34, 9.36],
  1987: [8.9, 8.92, 8.94, 8.96, 8.98, 9.0, 9.02, 9.04, 9.06, 9.08, 9.1, 9.12],
  1988: [8.66, 8.68, 8.7, 8.72, 8.74, 8.76, 8.78, 8.8, 8.82, 8.84, 8.86, 8.88],
  1989: [8.42, 8.44, 8.46, 8.48, 8.5, 8.52, 8.54, 8.56, 8.58, 8.6, 8.62, 8.64],
  1990: [8.18, 8.2, 8.22, 8.24, 8.26, 8.28, 8.3, 8.32, 8.34, 8.36, 8.38, 8.4],
  1991: [7.94, 7.96, 7.98, 8.0, 8.02, 8.04, 8.06, 8.08, 8.1, 8.12, 8.14, 8.16],
};

const _3YearsPentaltyConstant = [
  [0.5, 0.52, 0.54, 0.56, 0.58, 0.6, 0.62, 0.64, 0.66, 0.68, 0.7, 0.72],
  [0.26, 0.28, 0.3, 0.32, 0.34, 0.36, 0.38, 0.4, 0.42, 0.44, 0.46, 0.48],
  [0, 0, 0, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24],
];

const computeTotal = (assessedValue, taxDue, selectedQuarters) => {
  if (!assessedValue || !taxDue || !selectedQuarters)
    return { total: 0, penalty: 0 };

  let penalty = 0;
  let basicTax = assessedValue * 0.02;
  const dateNow = new Date();
  const yearNow = dateNow.getFullYear();
  const passedThreeYears = yearNow - 2;
  const monthNow = dateNow.getMonth();
  let totalPenalty = 0;
  let total = 0;

  const numberOfQuarter = Object.values(selectedQuarters).filter(
    (value) => value
  ).length;

  if (numberOfQuarter == 1) {
    basicTax *= 0.25;
  } else if (numberOfQuarter == 2) {
    basicTax *= 0.5;
  } else if (numberOfQuarter == 3) {
    basicTax *= 0.75;
  } else {
    basicTax *= 1;
  }

  if (taxDue <= 1985) {
    penalty = 0.24;
  } else if (taxDue >= 1992 && taxDue <= yearNow - 3) {
    penalty = 0.72;
  } else if (taxDue >= 1986 && taxDue <= 1991) {
    penalty = penaltyTable2024[taxDue][monthNow];
    const yearDiff = yearNow - 2024;
    const increase = yearDiff * 0.24;
    penalty += increase;
  } else if (taxDue <= yearNow && taxDue >= passedThreeYears) {
    let currentPassed3YearsPenalty = {};
    for (let i = 0; i < 3; i++) {
      const yearTodecrease = 2 - i;

      currentPassed3YearsPenalty = {
        ...currentPassed3YearsPenalty,
        [yearNow - yearTodecrease]: _3YearsPentaltyConstant[i],
      };
    }
    penalty = currentPassed3YearsPenalty[taxDue][monthNow];
  }

  totalPenalty = basicTax * penalty;
  total = basicTax + totalPenalty;

  return { total, penalty };
};

function LandTaxAR() {
  const { assessorData, isAssessorLoading } = useData();

  const [openComputation, setOpenComputation] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [paymentModalActive, setPaymentModalActive] = useState(false);
  const [addPaymentActive, setAddPaymentActive] = useState(false);
  const [addPaymentItemActive, setAddPaymentItemActive] = useState(false);

  const [formData, setFormData] = useState(formDataDefault);
  const [paymentList, setPaymentList] = useState([]);

  const [confirmationOpen, setConfirmationOpen] = useState(false);

  const handleCheckboxChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      selectedQuarters: {
        ...prev.selectedQuarters,
        [event.target.name]: event.target.checked,
      },
    }));
  };

  const handleCellDoubleClick = (params) => {
    setSelectedRow({ ...params.row, paymentList: [] });
    setOpenComputation(true);
  };

  const handleClickSubmit = () => {
    if (paymentList.length === 0) return;

    setConfirmationOpen(true);
  };

  const handleSubmitPayment = async () => {
    try {
      const response = await axios.post("/api/cashier/addOrder", {
        arpNo: "6511-5611-2131",
        dayOfPayment: "2024",
        amountPaid: 5000,
        payor: "MrPayor",
        paymentOrder: [
          {
            assessedValue: 20000,
            taxDue: "2024",
            baseTax: 2000,
            penalty: -200,
            total: 1800,
          },
          {
            assessedValue: 50000,
            taxDue: "2023",
            baseTax: 500,
            penalty: 300,
            total: 800,
          },
        ],
        total: 2600,
        cityTreasurer: "MrTreasurer",
        deputy: "MrDeputy",
        balance: 0,
        status: "pending",
        yearAdded: "2024",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <PageContainer>
        <DataGrid
          loading={isAssessorLoading}
          rows={[]}
          columns={ASSESSMENT_ROLL_COLUMN}
          onCellDoubleClick={handleCellDoubleClick}
          initialState={DATA_GRID_INITIAL_STATE}
          pageSizeOptions={PAGE_SIZE_OPTION}
          sx={DATA_GRID_STYLE}
          disableRowSelectionOnClick
          slots={{
            toolbar: () => (
              <TableToolbar
                titleText="LANDTAX OFFICE"
                subText="Office of the Revenue Commissioner"
                actionBtn={
                  <Button
                    variant="contained"
                    onClick={() => setAddPaymentActive(true)}
                  >
                    Add Payment Order
                  </Button>
                }
              />
            ),
          }}
          slotProps={{
            panel: {
              placement: "bottom-end",
            },
          }}
        />
      </PageContainer>

      <AddPaymentModal
        open={addPaymentActive}
        handleClose={() => setAddPaymentActive(false)}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        setFormData={setFormData}
        formData={formData}
        setAddPaymentItemActive={setAddPaymentItemActive}
        computeTotal={computeTotal}
        paymentList={paymentList}
        handleClickSubmit={handleClickSubmit}
        setPaymentList={setPaymentList}
      />

      <AddPaymentItemModal
        open={addPaymentItemActive}
        handleClose={() => {
          setAddPaymentItemActive(false);
          setFormData(formDataDefault);
        }}
        setSelectedRow={setSelectedRow}
        selectedRow={selectedRow}
        setFormData={setFormData}
        formData={formData}
        computeTotal={computeTotal}
        handleCheckboxChange={handleCheckboxChange}
        paymentList={paymentList}
        setPaymentList={setPaymentList}
      />

      <PaymentModalPreview
        open={openComputation}
        handleClose={() => setOpenComputation(false)}
        row={selectedRow}
        setSelectedRow={setSelectedRow}
        setPaymentModalActive={setPaymentModalActive}
      />

      <ConfirmationDialog
        confirm={handleSubmitPayment}
        open={confirmationOpen}
        setOpen={setConfirmationOpen}
        title="Submit Payment Order"
        content="Are you sure you want to submit the payment order?"
        label="Submit"
      />
    </>
  );
}

export default LandTaxAR;
