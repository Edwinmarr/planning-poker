import { useEffect, useState } from "react";
import styles from "./PokerRoom.module.scss";
import FormCreateUser from "../../molecules/FormCreateUser/FormCreateUser";
import Table from "../../atoms/Table/Table";
import UserProfile from "../../atoms/UserProfile/UserProfile";
import { UserRoles } from "../../../config/types";
import Deck from "../../molecules/Deck/Deck";

const PokerRoom = () => {
  const [adminName, setAdminName] = useState<string | null>(null);
  const [adminRole, setAdminRole] = useState<string | null>(null);
  const [selectedCard, setSelectedCard] = useState<number | string | null>(
    null
  );

  const handleCreateUser = (name: string, type: UserRoles) => {
    sessionStorage.setItem("adminName", name);
    sessionStorage.setItem("adminRole", type);
    setAdminName(name);
    setAdminRole(type);
  };

  const handleSelectCard = (value: number | string) => {
    setSelectedCard(value);
  };

  useEffect(() => {
    // Recuperar el nombre del administrador desde sessionStorage
    const name = sessionStorage.getItem("adminName");
    const adminRole = sessionStorage.getItem("adminRole");
    setAdminName(name);
    setAdminRole(adminRole);
  }, []);

  return (
    <>
      {!adminName && <FormCreateUser onCreateUser={handleCreateUser} />}
      <article className={styles["root-container"]}>
        <div className={styles["table-area"]}>
          <div className={styles["row"]}>
            <UserProfile
              ready={false}
              className="profile-player"
              name={"Andrés"}
            />
            <UserProfile
              ready={false}
              className="profile-player"
              name={"Caro"}
            />
            <UserProfile
              ready={false}
              className="profile-player"
              name={"Valeria"}
            />
          </div>
          <div className={styles["row--middle"]}>
            <UserProfile
              ready={false}
              className="profile-player"
              name={"Pedro"}
            />
            {<Table />}
            <UserProfile
              ready={false}
              className="profile-player"
              name={"David"}
            />
          </div>
          <div className={styles["row"]}>
            <UserProfile
              ready={false}
              className="profile-player"
              name={"Aris"}
            />
            {adminName && (
              <UserProfile
                ready={selectedCard !== null}
                className={`profile-${adminRole}`}
                name={adminName}
              />
            )}
            <UserProfile
              ready={false}
              className="profile-player"
              name={"Juan"}
            />
          </div>
        </div>
        {adminRole === UserRoles.PLAYER && (
          <div className={styles["deck-area"]}>
            <Deck onSelectCard={handleSelectCard} />
          </div>
        )}
      </article>
    </>
  );
};

export default PokerRoom;
