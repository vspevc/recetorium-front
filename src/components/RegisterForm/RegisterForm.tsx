import { useState } from "react";
import { ValidationError } from "joi";
import RegisterUserData from "../../hooks/useUsers/types";
import useUsers from "../../hooks/useUsers/useUsers";
import Button from "../Button/Button";
import InputSet from "../InputSet/InputSet";
import RegisterFormStyled from "./RegisterFormStyled";
import registerFormValidator from "./registerFormValidator";
import processJoiError from "../../utils/joi/processJoiError";
import { useAppDispatch } from "../../redux/hooks";
import { showErrorModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import apiMessageToSpanish from "../../utils/api/translations/apiMessageToSpanish";

const RegisterForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { registerUser } = useUsers();
  const [registerFormData, setRegisterFormData] = useState<RegisterUserData>({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [formErrors, setFormErrors] = useState({
    username: false,
    email: false,
    password: false,
    passwordConfirm: false,
  });
  const {
    username: usernameError,
    email: emailError,
    password: passwordError,
    passwordConfirm: passwordConfirmError,
  } = formErrors;

  const handleRegisterFormData = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.target;
    const { id: inputId, value: inputValue } = input;
    setFormErrors({ ...formErrors, [inputId]: false });

    setRegisterFormData({ ...registerFormData, [inputId]: inputValue });
  };
  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await registerFormValidator(registerFormData);

      registerUser(registerFormData);
    } catch (error: unknown) {
      const errorMessages = (error as ValidationError).message;
      const errors = processJoiError(errorMessages).reduce(
        (currentValue, inputError) => ({ ...currentValue, [inputError]: true }),
        {}
      );

      setFormErrors({ ...formErrors, ...errors });

      const translatedErrors = apiMessageToSpanish(
        errorMessages.replaceAll(". ", ", ")
      );
      dispatch(
        showErrorModalActionCreator({
          title: "Error al intentar regitrar nuevo usuario",
          content: translatedErrors,
        })
      );
    }
  };

  return (
    <RegisterFormStyled>
      <form className="register-form" onSubmit={handleSubmit}>
        <InputSet
          id="username"
          labelText="Nombre de usuario"
          captionText="Debe tener entre 3 y 30 caracteres alfanuméricos"
          inputValue={registerFormData.username}
          required={true}
          handleValue={handleRegisterFormData}
          options={{ isError: usernameError }}
        />

        <InputSet
          id="email"
          inputType="email"
          labelText="Email"
          inputValue={registerFormData.email}
          required={true}
          handleValue={handleRegisterFormData}
          options={{ isError: emailError }}
        />

        <InputSet
          id="password"
          inputType="password"
          labelText="Contraseña"
          captionText="Debe tener entre 8 y 30 caracteres alfanuméricos y símbolos"
          inputValue={registerFormData.password}
          required={true}
          handleValue={handleRegisterFormData}
          options={{ isError: passwordError }}
        />

        <InputSet
          id="passwordConfirm"
          inputType="password"
          labelText="Repite tu contraseña"
          inputValue={registerFormData.passwordConfirm}
          required={true}
          handleValue={handleRegisterFormData}
          options={{ isError: passwordConfirmError }}
        />

        <Button className="register-form__button" options={{ type: "submit" }}>
          Registrarse
        </Button>
      </form>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
