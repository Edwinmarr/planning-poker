import { FormCreateRoom } from "../../molecules";
import styles from "./CreateRoom.module.scss";

export const CreateRoom = () => {
  return (
    <article className={styles["root-container"]}>
      <FormCreateRoom />
    </article>
  );
};
