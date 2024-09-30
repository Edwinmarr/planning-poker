import { FC } from "react";
import styles from "./InputField.module.scss";
interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value: string;
  label?: string;
}

const InputField: FC<Props> = ({ label, placeholder, value, onChange }) => {
  return (
    <div className={styles["input-field"]}>
      {label && <label className={styles["input-field__label"]}>{label}</label>}
      <input
        className={styles["input-field__input"]}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
