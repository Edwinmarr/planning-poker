import { FC } from "react";
import styles from "./InputField.module.scss";
import Label from "../Label/Label";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value: string;
  label?: string;
  testId?: string;
  id?: string;
  errorMessage?: string;
}

const InputField: FC<Props> = ({
  label,
  placeholder,
  value,
  onChange,
  testId,
  id,
  errorMessage,
}) => {
  return (
    <div id={id} className={styles["input-field"]}>
      {label && <label className={styles["input-field__label"]}>{label}</label>}
      <div className={styles["input-field__container"]}>
        <input
          className={styles["input-field__input"]}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          data-testid={testId}
        />
        {errorMessage && (
          <Label className={"danger_label"} text={errorMessage}></Label>
        )}
      </div>
    </div>
  );
};

export default InputField;
