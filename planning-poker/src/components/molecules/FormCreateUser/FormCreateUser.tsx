import { FC, useState } from "react";
import InputField from "../../atoms/InputField/InputField";
import RadioButton from "../../atoms/RadioButton/RadioButton";
import { Button } from "../../atoms";
import styles from "./FormCreateUser.module.scss";

interface Props {}

const FormCreateUser: FC<Props> = ({}) => {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    value != "" ? setIsButtonDisabled(false) : setIsButtonDisabled(true);
  };
  const handleCreateUser = () => {
    //navigate(`/partida/${inputValue}`);
    alert(`Usuario creado con nombre ${inputValue}`);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className={styles["modal-overlay"]}>
          <div className={styles["form-create-user-container"]}>
            <InputField
              id={styles["form-create-user-container__input-field"]}
              value={inputValue}
              onChange={handleOnChangeInput}
              label="Tu nombre"
            ></InputField>
            <div
              className={styles["form-create-user-container__radio-buttons"]}
            >
              <RadioButton name="user" value="Jugador"></RadioButton>
              <RadioButton name="user" value="Espectador"></RadioButton>
            </div>
            <Button
              id={styles["form-create-user-container__Button"]}
              label="Continuar"
              onClick={handleCreateUser}
              disabled={isButtonDisabled}
            ></Button>
          </div>
        </div>
      )}
    </>
  );
};

export default FormCreateUser;
