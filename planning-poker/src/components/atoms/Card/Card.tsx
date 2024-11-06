import { FC } from "react";
import styles from "./Card.module.scss";

interface Props {
  label: string;
  value: number | string;
  onClick: (value: number | string) => void;
  isSelected?: boolean;
}

const Card: FC<Props> = ({ label, value, onClick, isSelected }) => {
  return (
    <div
      className={`${styles["card"]} ${isSelected ? styles["selected"] : ""}`}
      onClick={() => onClick(value)}
    >
      {label}
    </div>
  );
};

export default Card;
