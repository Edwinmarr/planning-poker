import { useState } from "react";
import InputField from "../../atoms/InputField/InputField";
import Button from "../../atoms/Button/Button";
import styles from "./FormCreateRoom.module.scss";
import Label from "../../atoms/Label/Label";
import { useNavigate } from "react-router-dom";
import { validateInput } from "../../../util/Util";

export const FormCreateRoom = () => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  const handleCreateRoom = () => {
    navigate(`/partida/${inputValue}`);
  };

  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    validateInput(value, setErrorMessage, setIsValid);
  };

  return (
    <div className={styles["form-container"]}>
      <InputField
        label="Nombra la partida"
        onChange={handleOnChangeInput}
        value={inputValue}
        testId="inputFieldTestId"
      />
      <Label className="danger_label" text={errorMessage}></Label>
      <Button
        onClick={handleCreateRoom}
        label="Crear partida"
        disabled={!isValid}
        testId="ButtonTestId"
      />
    </div>
  );
};
