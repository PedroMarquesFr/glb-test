import CookieService from "@/services/CookieService";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const token = CookieService.getToken();
  const auth = { token };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
