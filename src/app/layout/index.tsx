import type { FC } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Main from "./main/main";
import styles from "./styles.module.scss";

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};

export default Layout;
