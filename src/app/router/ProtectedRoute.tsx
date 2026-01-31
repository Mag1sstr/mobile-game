import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "./routes";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const hasPermission = localStorage.getItem("permissionAccepted");

  if (!hasPermission) {
    return <Navigate to={ROUTES.LOCK} replace />;
  }

  return children;
}

export default ProtectedRoute;
