import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DashboardLayout from "./dashboard/Layout/DashboardLayout";
import Overview from "./dashboard/Pages/overview/Overview";
import Agents from "./dashboard/Pages/agent/Agents";
import Integrations from "./dashboard/Pages/integration/Integrations";
import Templates from "./dashboard/Pages/Templates/Templates";
import Reports from "./dashboard/Pages/reports/Reports";
import Settings from "./dashboard/Pages/Settings";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          {/* this is second */}

          <Route path="agents" element={<Agents />} />
          <Route path="integrations" element={<Integrations />} />
          <Route path="templates" element={<Templates />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
