import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import PermissionPage from "../../pages/PermissionPage";
import HomePage from "../../pages/HomePage";
import { useState } from "react";

function AppRouter() {
  const [hasPermission, setHasPermission] = useState(
    localStorage.getItem("permissionAccepted") === "true",
  );

  if (!hasPermission) {
    return (
      <Routes>
        <Route
          index
          element={<PermissionPage onAccept={() => setHasPermission(true)} />}
        />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
    </Routes>
  );
}

export default AppRouter;
