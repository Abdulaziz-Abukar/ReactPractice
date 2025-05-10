import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  NotFound,
  UserProfile,
  DashboardLayout,
  Overview,
  Settings,
  Redirector,
} from "../components/Exercise-One/Routing-Tutorial/Routing-Setup";
import DashboardRoutes from "./DashboardRoutes";
import { ProtectedRoute } from "./ProtectedRoute";
import { Login } from "../components/Exercise-One/Routing-Tutorial/Routing-Setup";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/users/:username" element={<UserProfile />} />
      <Route path="/go-to-dashboard" element={<Redirector />} />
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>{DashboardRoutes()}</Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default AppRoutes;
