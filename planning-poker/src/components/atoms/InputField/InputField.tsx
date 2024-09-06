import { FC } from "react";
import styles from "./InputField.module.css";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value: string;
}

const InputField: FC<Props> = ({ placeholder, value, onChange }) => {
  return (
    <input
      className={styles.inputField}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
