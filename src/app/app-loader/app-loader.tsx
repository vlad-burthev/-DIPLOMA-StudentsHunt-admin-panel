import type { FC } from "react";
import styles from "./styles.module.scss";

interface AppLoaderProps {}

const AppLoader: FC<AppLoaderProps> = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <span className={styles.loader}></span>
        <span className={styles.rotated}></span>
      </div>
    </div>
  );
};

export default AppLoader;
