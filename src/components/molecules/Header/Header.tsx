import { FC } from "react";
import Logo from "../../atoms/Logo/Logo";
import { Link, useParams } from "react-router-dom";
import styles from "./Header.module.scss";
import Label from "../../atoms/Label/Label";
import UserProfile from "../../atoms/UserProfile/UserProfile";

interface Props {
  logoLabel?: string;
}

const Header: FC<Props> = ({ logoLabel }) => {
  // Obtener parámetros desde la URL
  const { gameName } = useParams<{ gameName: string }>();

  // Obtener el nombre del administrador desde localStorage
  const adminName = sessionStorage.getItem("adminName");

  // Función para manejar la invitación de jugadores
  const handleInvitePlayers = () => {
    alert("Invitación enviada (funcionalidad pendiente).");
  };

  return (
    <>
      <nav className={styles["header-nav-container"]}>
        <ul className={styles["header-nav-container__ul"]}>
          <li className={styles["header-nav-container__ul__li_logo"]}>
            <Link to="/">{<Logo label={logoLabel || ""} />}</Link>
          </li>
          {/* Mostrar contenido adicional si hay gameName y adminName */}
          {gameName && (
            <Label
              text={decodeURIComponent(gameName)}
              className="bold_label"
            ></Label>
          )}
          {adminName && (
            <li className={styles["header-nav-container__ul__li_game-info"]}>
              <UserProfile
                shouldCalculate={true}
                className="profile-spectator"
                ready={true}
                name={adminName}
              />
              <button
                className={styles["header-nav-container__invite-btn"]}
                onClick={handleInvitePlayers}
              >
                Invitar jugadores
              </button>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Header;
