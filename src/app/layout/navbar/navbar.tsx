import type { FC } from "react";
import styles from "../styles.module.scss";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return <nav className={styles.navbar}>navbar</nav>;
};

export default Navbar;
