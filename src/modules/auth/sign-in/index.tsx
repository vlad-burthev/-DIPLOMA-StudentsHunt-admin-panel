import type { FC } from "react";
import styles from "./styles.module.scss";

interface SignInProps {}

const SignIn: FC<SignInProps> = () => {
  return (
    <div className={styles.form}>
      <a
        href={import.meta.env.VITE_GOOGLE_LOGIN}
        className={styles["submit-btn"]}
      >
        Sign In
      </a>
    </div>
  );
};

export default SignIn;
