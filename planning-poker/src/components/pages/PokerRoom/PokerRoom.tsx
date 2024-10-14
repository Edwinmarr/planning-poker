import { FC } from "react";
import styles from "./PokerRoom.module.scss";
import FormCreateUser from "../../molecules/FormCreateUser/FormCreateUser";
import Table from "../../atoms/Table/Table";
import UserProfile from "../../atoms/UserProfile/UserProfile";

interface Props {}

const PokerRoom: FC<Props> = ({}) => {
  return (
    <article className={styles["root-container"]}>
      <FormCreateUser />
      <Table />
      <UserProfile name="Edwin" />
    </article>
  );
};

export default PokerRoom;
