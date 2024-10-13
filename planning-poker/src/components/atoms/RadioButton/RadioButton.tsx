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
      <input
        id={id}
        className={styles["radio-button"]}
        type="radio"
        value={value}
        name={name}
        data-testid={testId}
      ></input>
      <Label text={name}></Label>
    </div>
  );
};

export default RadioButton;
