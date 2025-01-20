import clsx from "clsx";
import type { FC, InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: FC<InputProps> = ({ id, label, className, ...props }) => {
  return (
    <label className={styles.wrapper} htmlFor={id}>
      <span className={styles.label}>{label}</span>
      <input className={clsx(styles.input, className)} id={id} {...props} />
    </label>
  );
};

export default Input;
