import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { AssessmentRoll, Cancels } from "./pages/Assessor";
import Layout from "./components/Layout.jsx";
import theme from "./styles/theme.jsx";
import "./styles/global.scss";
import LoginPage from "./pages/LoginPage/";
import PersistLogin from "./components/PersistLogin.jsx";
import RequireAuth from "./components/RequireAuth.jsx";
import { LAssesssmentRoll, Computed, LPaidList } from "./pages/LandTax";
import { PendingList, PaidList } from "./pages/Cash";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PersistLogin />}>
          <Route path="/login" element={<LoginPage />} />

          {/* <Route element={<RequireAuth />}> */}
          <Route path="/" element={<Layout />}>
            <Route>
              <Route path="" element={<AssessmentRoll />} />
              <Route path="cancels" element={<Cancels />} />
            </Route>

            <Route>
              <Route path="landtax-division" element={<LAssesssmentRoll />} />
              <Route path="computed" element={<Computed />} />
              <Route path="lpaidlist" element={<LPaidList />} />
            </Route>

            <Route>
              <Route path="cash-division" element={<PendingList />} />
              <Route path="paidlist" element={<PaidList />} />
            </Route>
          </Route>
          {/* </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
