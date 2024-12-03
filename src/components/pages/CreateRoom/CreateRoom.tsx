import { FormCreateRoom } from "../../molecules";
import Header from "../../molecules/Header/Header";
import styles from "./CreateRoom.module.scss";

export const CreateRoom = () => {
  return (
    <>
      <Header logoLabel="Crear partida" />
      <article className={styles["root-container"]}>
        <FormCreateRoom />
      </article>
    </>
  );
};
