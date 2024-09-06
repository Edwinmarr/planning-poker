import { FC } from "react";
import InputField from "../../atoms/InputField";
import Button from "../../atoms/Button";

interface Props {}

const FormCreateRoom: FC<Props> = (props) => {
  const onClickButton = () => {};
  const onChangeInput = () => {};

  return (
    <>
      <InputField onChange={onChangeInput} value="" />
      <Button onClick={onClickButton} label="Crear sala" />
    </>
  );
};

export default FormCreateRoom;
