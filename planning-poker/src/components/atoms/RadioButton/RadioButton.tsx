import { FC } from "react";
import styles from "./RadioButton.module.scss";
import Label from "../Label/Label";

interface Props {
  value: string;
  name: string;
  testId?: string;
  id?: string;
}

const RadioButton: FC<Props> = ({ value, name, testId, id }) => {
  return (
    <div className="radio-button-container">
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
      ></input>
      <i></i>
    </div>
  );
};

export default RadioButton;
