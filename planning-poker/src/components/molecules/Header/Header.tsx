import { FC } from "react";
import Logo from "../../atoms/Logo/Logo";
import { Link } from "react-router-dom";

interface Props {
  logoLabel?: string;
}

const Header: FC<Props> = ({ logoLabel }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">{<Logo label={logoLabel || ""} />}</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
