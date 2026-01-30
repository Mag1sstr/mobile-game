import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import PermissionPage from "../../pages/PermissionPage";
import HomePage from "../../pages/HomePage";

function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.LOCK} element={<PermissionPage />} />
    </Routes>
  );
}

export default AppRouter;
