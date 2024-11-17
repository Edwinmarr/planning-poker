import { FC, useState } from "react";
import InputField from "../../atoms/InputField/InputField";
import RadioButton from "../../atoms/RadioButton/RadioButton";
import { Button } from "../../atoms";
import styles from "./FormCreateUser.module.scss";
import { validateInput } from "../../../util/Util";
import { UserRoles } from "../../../config/types";

interface Props {
  onCreateUser: (name: string, type: UserRoles) => void;
}

const FormCreateUser: FC<Props> = ({ onCreateUser }) => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [userRole, setUserRole] = useState<UserRoles>();
  const [isValid, setIsValid] = useState(false);

  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    validateInput(value, setErrorMessage, setIsValid);
    console.log(errorMessage);
  };
  const handleOnChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUserRole(value as UserRoles);
  };

  return (
    <>
      (
      <div className={styles["modal-overlay"]}>
        <div className={styles["form-create-user-container"]}>
          <InputField
            id={styles["form-create-user-container__input-field"]}
            value={inputValue}
            onChange={handleOnChangeInput}
            errorMessage={errorMessage}
            label="Tu nombre"
          ></InputField>
          <div className={styles["form-create-user-container__radio-buttons"]}>
            <RadioButton
              label="Jugador"
              name="user"
              value="player"
              onChange={handleOnChangeRadio}
            ></RadioButton>
            <RadioButton
              label="Espectador"
              name="user"
              value="spectator"
              onChange={handleOnChangeRadio}
            ></RadioButton>
          </div>
          <Button
            id={styles["form-create-user-container__Button"]}
            label="Continuar"
            onClick={() => {
              if (userRole) onCreateUser(inputValue, userRole);
            }}
            disabled={!isValid || !userRole}
          ></Button>
        </div>
      </div>
      )
    </>
  );
};

export default FormCreateUser;
