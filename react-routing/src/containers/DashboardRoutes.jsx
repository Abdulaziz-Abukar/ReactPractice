import { Route, Navigate } from "react-router-dom";
import {
  DashboardLayout,
  Overview,
  Settings,
} from "../components/Exercise-One/Routing-Tutorial/Routing-Setup";

function DashboardRoutes() {
  return (
    <Route path="/dashboard" element={<DashboardLayout />}>
      <Route index element={<Navigate to="overview" />} />
      <Route path="overview" element={<Overview />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  );
}

export default DashboardRoutes;
