import { FC } from "react";
import InputField from "../../atoms/InputField/InputField";
import Button from "../../atoms/Button/Button";

interface Props {}

export const FormCreateRoom: FC<Props> = (props) => {
  const onClickButton = () => {};
  const onChangeInput = () => {};

  return (
    <>
      <InputField onChange={onChangeInput} value="" />
      <Button onClick={onClickButton} label="Crear sala" />
    </>
  );
};
