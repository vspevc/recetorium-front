import { useState } from "react";
import RegisterUserData from "../../hooks/useUsers/types";
import useUsers from "../../hooks/useUsers/useUsers";
import Button from "../Button/Button";
import InputSet from "../InputSet/InputSet";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  const { registerUser } = useUsers();
  const [registerFormData, setRegisterFormData] = useState<RegisterUserData>({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleRegisterFormData = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.target;
    const { id: inputId, value: inputValue } = input;

    setRegisterFormData({ ...registerFormData, [inputId]: inputValue });
  };
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    registerUser(registerFormData);
  };

  return (
    <RegisterFormStyled>
      <h2>Registrarse es gratis</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <InputSet
          id="username"
          labelText="Nombre de usuario"
          captionText="Debe tener entre 3 y 30 caracteres alfanuméricos"
          inputValue={registerFormData.username}
          handleValue={handleRegisterFormData}
        />

        <InputSet
          id="email"
          inputType="email"
          labelText="Email"
          inputValue={registerFormData.email}
          handleValue={handleRegisterFormData}
        />

        <InputSet
          id="password"
          inputType="password"
          labelText="Contraseña"
          captionText="Debe tener entre 8 y 30 caracteres alfanuméricos y símbolos"
          inputValue={registerFormData.password}
          handleValue={handleRegisterFormData}
        />

        <InputSet
          id="passwordConfirm"
          inputType="password"
          labelText="Repite tu contraseña"
          inputValue={registerFormData.passwordConfirm}
          handleValue={handleRegisterFormData}
        />

        <Button options={{ type: "submit" }}>Registrarse</Button>
      </form>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
