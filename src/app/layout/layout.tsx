import type { FC } from "react";
import { Outlet } from "react-router-dom";

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  return (
    <div>
      <div>header</div>
      <div>nav-menu</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
