import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import AssessmentRoll from "./pages/AssessmentRoll/";
import Layout from "./components/Layout.jsx";
import theme from "./styles/theme.jsx";
import "./styles/global.scss";
import LoginPage from "./pages/LoginPage/";
import PersistLogin from "./components/PersistLogin.jsx";
import RequireAuth from "./components/RequireAuth.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PersistLogin />}>
          <Route path="/login" element={<LoginPage />} />

          <Route element={<RequireAuth />}>
            <Route path="/" element={<Layout />}>
              <Route>
                <Route path="" element={<AssessmentRoll />} />
                <Route path="archive" element={<AssessmentRoll />} />
              </Route>

              <Route path="landtax-division" element={<AssessmentRoll />} />

              <Route path="cash-division" element={<AssessmentRoll />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
