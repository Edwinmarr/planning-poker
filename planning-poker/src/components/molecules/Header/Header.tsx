import { FC } from "react";
import Logo from "../../atoms/Logo/Logo";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

interface Props {
  logoLabel?: string;
}

const Header: FC<Props> = ({ logoLabel }) => {
  return (
    <>
      <nav className={styles["header-nav-container"]}>
        <ul className={styles["header-nav-container__ul"]}>
          <li className={styles["header-nav-container__ul__li_logo"]}>
            <Link to="/">{<Logo label={logoLabel || ""} />}</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
