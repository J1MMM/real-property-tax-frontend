import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { AssessmentRoll, Pending, Cancels } from "./pages/Assessor";
import Layout from "./components/layout/Layout.jsx";
import theme from "./styles/theme.jsx";
import "./styles/global.scss";
import LoginPage from "./pages/LoginPage/";
import PersistLogin from "./components/auth/PersistLogin.jsx";
import RequireAuth from "./components/auth/RequireAuth.jsx";
import { LAssesssmentRoll, Computed, LPaidList } from "./pages/LandTax";
import { PendingList, PaidList } from "./pages/Cash";
import { AssessorLayout } from "./components/layout/AssessorLayout.jsx";
import { Missing } from "./pages/404.jsx";
import { LandTaxLayout } from "./components/layout/LandTaxLayout.jsx";
import { CashLayout } from "./components/layout/CashLayout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<PersistLogin />}> */}
        <Route path="/login" element={<LoginPage />} />

        {/* <Route element={<RequireAuth />}> */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="/assessor" />} />
          <Route>
            {/* <Route path="" element={<AssessmentRoll />} /> */}
            <Route path="assessor" element={<AssessorLayout />}>
              <Route index element={<AssessmentRoll />} />
              <Route path="pending" element={<Pending />} />
              <Route path="cancels" element={<Cancels />} />
            </Route>
          </Route>

          <Route path="landtax-division" element={<LandTaxLayout />}>
            <Route path="" element={<LAssesssmentRoll />} />
            <Route path="computed" element={<Computed />} />
            <Route path="paidlist" element={<LPaidList />} />
          </Route>

          <Route path="cash-division" element={<CashLayout />}>
            <Route path="" element={<PendingList />} />
            <Route path="paidlist" element={<PaidList />} />
          </Route>
        </Route>
        {/* </Route> */}
        {/* </Route> */}
        <Route path="*" element={<Missing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
