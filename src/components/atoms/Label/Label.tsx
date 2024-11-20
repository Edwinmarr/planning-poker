import { FC } from "react";
import styles from "./Label.module.scss";

interface Props {
  text: string;
  id?: string;
  className: string;
}

const Label: FC<Props> = ({ text, id, className }) => {
  return (
    <label id={id} className={styles[`${className}`]}>
      {text}
    </label>
  );
};

export default Label;
