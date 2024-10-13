import { FC } from "react";
import styles from "./Label.module.scss";

interface Props {
  text: string;
}

const Label: FC<Props> = ({ text }) => {
  return <label className={styles.label}>{text}</label>;
};

export default Label;
