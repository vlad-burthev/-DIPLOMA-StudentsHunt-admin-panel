import type { FC } from "react";
import styles from "../styles.module.scss";
import { Link } from "react-router-dom";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-container"]}>
        <div className={styles["navbar-title"]}>
          <Link className={styles["navbar-title__link"]} to={"/"}>
            ST Dashboard
          </Link>
        </div>
        <ul className={styles["navbar-list"]}>
          <li className={styles["navbar-list__item"]}>
            <Link className={styles["navbar-list__link"]} to={"/customers"}>
              Customers
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
