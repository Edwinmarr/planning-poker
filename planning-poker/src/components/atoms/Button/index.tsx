import { FC } from "react";
import styles from "./Button.module.css";

interface Props {
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  label: string;
  disabled?: boolean;
}

const Button: FC<Props> = ({
  label,
  type = "button",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={styles.button}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
