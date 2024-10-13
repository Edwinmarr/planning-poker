import { FC, useState } from "react";
import InputField from "../../atoms/InputField/InputField";
import RadioButton from "../../atoms/RadioButton/RadioButton";
import { Button } from "../../atoms";
import styles from "./FormCreateUser.module.scss";

interface Props {}

const FormCreateUser: FC<Props> = ({}) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };
  const handleCreateUser = () => {
    //navigate(`/partida/${inputValue}`);
    alert(`Usuario creado con nombre ${inputValue}`);
  };

  return (
    <div className={styles["form-create-user-container"]}>
      <InputField
        id={styles["form-create-user-container__input-field"]}
        value={inputValue}
        onChange={handleOnChangeInput}
        label="Tu nombre"
      ></InputField>
      <div className={styles["form-create-user-container__radio-buttons"]}>
        <RadioButton name="Jugador" value="Jugador"></RadioButton>
        <RadioButton name="Espectador" value="Espectador"></RadioButton>
      </div>
      <Button
        id={styles["form-create-user-container__Button"]}
        label="Continuar"
        onClick={handleCreateUser}
      ></Button>
    </div>
  );
};

export default FormCreateUser;
