import { FC, useEffect, useState } from "react";
import styles from "./PokerRoom.module.scss";
import FormCreateUser from "../../molecules/FormCreateUser/FormCreateUser";
import Table from "../../atoms/Table/Table";
import UserProfile from "../../atoms/UserProfile/UserProfile";

interface Props {}

const PokerRoom: FC<Props> = ({}) => {
  const [adminName, setAdminName] = useState<string | null>(null);

  useEffect(() => {
    // Recuperar el nombre del administrador desde sessionStorage
    const name = sessionStorage.getItem("adminName");
    setAdminName(name);
  }, []);
  
  return (
    <article className={styles["root-container"]}>
      {!adminName && <FormCreateUser />}
      <Table />
      {adminName && <UserProfile name={adminName} />}
    </article>
  );
};

export default PokerRoom;
