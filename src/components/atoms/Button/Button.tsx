import { FC } from "react";
import styles from "./Button.module.scss";

interface Props {
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  label: string;
  disabled?: boolean;
  testId?: string;
  id?: string;
  className: "button--primary" | "button--secondary";
}

const Button: FC<Props> = ({
  label,
  type = "button",
  onClick,
  disabled = false,
  testId,
  id,
  className,
}) => {
  return (
    <button
      id={id}
      className={styles[className]}
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
