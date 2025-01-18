import type { FC } from "react";
import { Route, Routes } from "react-router-dom";

interface AppRouterProps {}

const AppRouter: FC<AppRouterProps> = () => {
  return (
    <Route>
      <Routes></Routes>
    </Route>
  );
};

export default AppRouter;
