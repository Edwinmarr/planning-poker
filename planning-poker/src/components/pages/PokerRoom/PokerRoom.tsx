import { FC } from "react";
import styles from "./PokerRoom.module.scss";
import FormCreateUser from "../../molecules/FormCreateUser/FormCreateUser";

interface Props {}

const PokerRoom: FC<Props> = ({}) => {
  return (
    <article className={styles["root-container"]}>
      <FormCreateUser />
    </article>
  );
};

export default PokerRoom;
