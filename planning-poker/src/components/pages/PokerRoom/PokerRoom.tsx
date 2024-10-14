import { FC } from "react";
import styles from "./PokerRoom.module.scss";
import FormCreateUser from "../../molecules/FormCreateUser/FormCreateUser";
import Table from "../../atoms/Table/Table";

interface Props {}

const PokerRoom: FC<Props> = ({}) => {
  return (
    <article className={styles["root-container"]}>
      <FormCreateUser />
      <Table />
    </article>
  );
};

export default PokerRoom;
