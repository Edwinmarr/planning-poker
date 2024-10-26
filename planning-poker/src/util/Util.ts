import { UserRoles } from "../config/types";

// util/Util.ts
export const validateInput = (
  value: string,
  setErrorMessage: (message: string) => void,
  setIsValid: (isValid: boolean) => void
) => {
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
//create a function that validates if a field is a UserRole present or not
export const validateUserRole = (
  value: UserRoles | undefined,
  setErrorMessage: (message: string) => void,
  setIsValid: (isValid: boolean) => void
) => {
  if (value === undefined) {
    setErrorMessage("Debe seleccionar un rol.");
    setIsValid(false);
  } else {
    setErrorMessage("");
    setIsValid(true);
  }
};