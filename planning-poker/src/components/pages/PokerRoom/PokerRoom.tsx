import { useEffect, useState } from "react";
import styles from "./PokerRoom.module.scss";
import FormCreateUser from "../../molecules/FormCreateUser/FormCreateUser";
import Table from "../../atoms/Table/Table";
import UserProfile from "../../atoms/UserProfile/UserProfile";
import { UserRoles } from "../../../config/types";

const PokerRoom = () => {
  const [adminName, setAdminName] = useState<string | null>(null);
  const handleCreateUser = (name: string, type: UserRoles) => {
    sessionStorage.setItem("adminName", name);
    sessionStorage.setItem("adminRole", type);
    setAdminName(name);
  };
  useEffect(() => {
    // Recuperar el nombre del administrador desde sessionStorage
    const name = sessionStorage.getItem("adminName");
    setAdminName(name);
  }, []);

  return (
    <article className={styles["root-container"]}>
      {!adminName && <FormCreateUser onCreateUser={handleCreateUser} />}
      <Table />
      {adminName && <UserProfile name={adminName} />}
    </article>
  );
};

export default PokerRoom;
