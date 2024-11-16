import { FC } from "react";
import style from "./UserProfile.module.scss";

interface Props {
  name?: string;
}

const UserProfile: FC<Props> = ({ name }) => {
  // Obtener las primeras dos letras del nombre
  const getInitials = (name: string | undefined) => {
    return name ? name.substring(0, 2).toUpperCase() : "";
  };

  return (
    <div className={style["user-profile"]}>
      <div className={style["profile-circle"]}>{getInitials(name)}</div>
    </div>
  );
};

export default UserProfile;
