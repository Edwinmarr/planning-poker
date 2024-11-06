import { FC } from "react";
import style from "./UserProfile.module.scss";

interface Props {
  name?: string;
  className: string;
  ready: boolean;
}

const UserProfile: FC<Props> = ({ name, className, ready }) => {
  // Obtener las primeras dos letras del nombre
  const getInitials = (name: string | undefined) => {
    return name ? name.substring(0, 2).toUpperCase() : "";
  };
  if (className === "profile-player" && ready) {
    return (
      <div className={style["user-profile"]}>
        <div className={style[className + "__ready"]}></div>
        <div className={style["name"]}>{name}</div>
      </div>
    );
  } else if (className === "profile-player") {
    return (
      <div className={style["user-profile"]}>
        <div className={style[className]}></div>
        <div className={style["name"]}>{name}</div>
      </div>
    );
  }
  return (
    <div className={style["user-profile"]}>
      <div className={style[className]}>{getInitials(name)}</div>
    </div>
  );
};

export default UserProfile;
