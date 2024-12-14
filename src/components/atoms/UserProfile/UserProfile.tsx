import { FC } from "react";
import style from "./UserProfile.module.scss";

interface Props {
  name?: string;
  className: string;
  ready: boolean;
  cardValue?: number | string | null;
  shouldCalculate: boolean;
  id?: string;
}

const UserProfile: FC<Props> = ({
  name,
  className,
  ready,
  cardValue,
  shouldCalculate,
  id,
}) => {
  // Obtener las primeras dos letras del nombre
  const getInitials = (name: string | undefined) => {
    return name ? name.substring(0, 2).toUpperCase() : "";
  };

  const renderUserProfile = () => {
    if (className != "profile-player") {
      return (
        <>
          <div className={style[className]} id={id}>
            {getInitials(name)}
          </div>
        </>
      );
    } else {
      return (
        <>
          <div
            className={
              style[
                className +
                  `${ready ? "__ready" : ""}` +
                  `${shouldCalculate ? "__revealed" : ""}`
              ]
            }
            id={id}
          >
            {shouldCalculate ? cardValue : ""}
          </div>
          <div className={style["name"]}>{name}</div>
        </>
      );
    }
  };

  return <div className={style["user-profile"]}>{renderUserProfile()}</div>;
};

export default UserProfile;
