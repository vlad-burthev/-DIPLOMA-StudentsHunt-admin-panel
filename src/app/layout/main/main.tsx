import type { FC } from "react";
import styles from "../styles.module.scss";

interface MainProps {
  children: React.ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
