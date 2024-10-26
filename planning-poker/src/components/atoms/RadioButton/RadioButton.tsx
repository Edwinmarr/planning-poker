import { FC } from "react";
import styles from "./RadioButton.module.scss";
import Label from "../Label/Label";

interface Props {
  value: string;
  name: string;
  testId?: string;
  id?: string;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Agregar onChange
}

const RadioButton: FC<Props> = ({
  value,
  name,
  testId,
  id,
  checked,
  onChange,
}) => {
  return (
    <div className={styles["radio-button-container"]}>
      <Label
        className="normal_label"
        id={styles["radio-button-container__label"]}
        text={value}
      ></Label>
      <input
        id={id}
        className={styles["radio-button"]}
        type="radio"
        value={value}
        name={name}
        data-testid={testId}
        checked={checked}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default RadioButton;
