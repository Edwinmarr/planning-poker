import { FC } from "react";
import Label from "../Label/Label";
import styles from "./Logo.module.scss";
import logo from "../../../assets/images/logo.svg";

interface Props {
  label?: string;
}

const Logo: FC<Props> = ({ label }) => {
  return (
    <div className={styles["logo-container"]}>
      <img
        className={styles["logo-container__logo"]}
        src={logo}
        alt="Pragma S.A."
      />
      {label && <Label className="bold_label" text={label}></Label>}
    </div>
  );
};

export default Logo;
