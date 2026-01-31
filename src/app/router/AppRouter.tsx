import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import PermissionPage from "../../pages/PermissionPage";
import HomePage from "../../pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";

function AppRouter() {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route path={ROUTES.LOCK} element={<PermissionPage />} />
    </Routes>
  );
}

export default AppRouter;
