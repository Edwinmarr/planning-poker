import { useState } from "react";
import InputField from "../../atoms/InputField/InputField";
import Button from "../../atoms/Button/Button";
import styles from "./FormCreateRoom.module.scss";
import Label from "../../atoms/Label/Label";

export const FormCreateRoom = () => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validateInput = (value: string) => {
    const specialCharsRegex = /[_.*#/-]/;
    const onlyNumbersRegex = /^\d+$/;
    const numbersCount = value.replace(/[^0-9]/g, "").length;

    // Validar longitud (de 5 a 20 caracteres)
    if (value.length < 5 || value.length > 20) {
      setErrorMessage("Debe tener entre 5 y 20 caracteres.");
      setIsValid(false);
    }
    // Validar que no tenga caracteres especiales
    else if (specialCharsRegex.test(value)) {
      setErrorMessage("No se permiten caracteres especiales como _,.*#/-");
      setIsValid(false);
    }
    // Validar que no sea solo números
    else if (onlyNumbersRegex.test(value)) {
      setErrorMessage("No puede contener solo números.");
      setIsValid(false);
    }
    // Validar que no haya más de 3 números
    else if (numbersCount > 3) {
      setErrorMessage("No puede tener más de 3 números.");
      setIsValid(false);
    } else {
      setErrorMessage("");
      setIsValid(true);
    }
  };

  const handleCreateRoom = () => {
    if (isValid) {
      alert(`Sala creada con nombre ${inputValue}`);
    } else {
      alert(errorMessage);
    }
  };

  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    // Validar el valor del input
    validateInput(value);
  };

  return (
    <div className={styles["form-container"]}>
      <InputField
        label="Nombra la partida"
        onChange={handleOnChangeInput}
        value={inputValue}
      />
      <Label text={errorMessage}></Label>
      <Button
        onClick={handleCreateRoom}
        label="Crear partida"
        disabled={!isValid}
      />
    </div>
  );
};
