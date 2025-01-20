import { type FC } from "react";
import styles from "./styles.module.scss";
import { useLocation } from "react-router-dom";
import SignIn from "../../modules/auth/sign-in";

interface AuthProps {}

const Auth: FC<AuthProps> = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className={styles.auth}>
      <div className={styles.container}>
        <h2>SH Dashboard</h2>
        <SignIn />
      </div>
    </div>
  );
};

export default Auth;
