import type { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "../../pages/auth/auth";
import Layout from "../layout";

interface AppRouterProps {}

const AppRouter: FC<AppRouterProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={"Home page"} />
      </Route>
      <Route path="/auth" element={<Navigate to="/auth/sign-in" replace />} />
      <Route path="/auth" element={<Auth />}>
        <Route path="sign-in" />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
