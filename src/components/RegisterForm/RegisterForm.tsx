import { useState } from "react";
import { ValidationError } from "joi";
import RegisterUserData from "../../hooks/useUsers/types";
import useUsers from "../../hooks/useUsers/useUsers";
import Button from "../Button/Button";
import InputSet from "../InputSet/InputSet";
import RegisterFormStyled from "./RegisterFormStyled";
import registerFormValidator from "./registerFormValidator";
import processJoiError from "../../utils/joi/processJoiError";

const RegisterForm = (): JSX.Element => {
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
      const errors = processJoiError((error as ValidationError).message).reduce(
        (currentValue, inputError) => ({ ...currentValue, [inputError]: true }),
        {}
      );
      setFormErrors({ ...formErrors, ...errors });
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
          handleValue={handleRegisterFormData}
          options={{ isError: usernameError, required: true }}
        />

        <InputSet
          id="email"
          inputType="email"
          labelText="Email"
          inputValue={registerFormData.email}
          handleValue={handleRegisterFormData}
          options={{ isError: emailError, required: true }}
        />

        <InputSet
          id="password"
          inputType="password"
          labelText="Contraseña"
          captionText="Debe tener entre 8 y 30 caracteres alfanuméricos y símbolos"
          inputValue={registerFormData.password}
          handleValue={handleRegisterFormData}
          options={{ isError: passwordError, required: true }}
        />

        <InputSet
          id="passwordConfirm"
          inputType="password"
          labelText="Repite tu contraseña"
          inputValue={registerFormData.passwordConfirm}
          handleValue={handleRegisterFormData}
          options={{ isError: passwordConfirmError, required: true }}
        />

        <Button className="register-form__button" options={{ type: "submit" }}>
          Registrarse
        </Button>
      </form>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
