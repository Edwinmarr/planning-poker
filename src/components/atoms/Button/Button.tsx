import { FC } from "react";
import styles from "./Button.module.scss";

interface Props {
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  label: string;
  disabled?: boolean;
  testId?: string;
  id?: string;
}

const Button: FC<Props> = ({
  label,
  type = "button",
  onClick,
  disabled = false,
  testId,
  id,
}) => {
  return (
    <button
      id={id}
      className={styles.button}
      type={type}
      onClick={onClick}
      disabled={disabled}
      data-testid={testId}
    >
      {label}
    </button>
  );
};

export default Button;
