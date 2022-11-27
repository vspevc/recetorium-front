import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterUserData from "../../hooks/useUsers/types";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import RegisterForm from "./RegisterForm";

const mockRegisterUser = jest.fn();
jest.mock("../../hooks/useUsers/useUsers", () => {
  return () => ({
    registerUser: mockRegisterUser,
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Given a RegisterForm component", () => {
  const bobUser: RegisterUserData = {
    username: "Bob",
    email: "bob@this.com",
    password: "qwedsazxc",
    passwordConfirm: "qwedsazxc",
  };

  describe("When it's rendered and user submit with valid username 'Bob', email 'bob@this.com', password 'qwedsazxc'", () => {
    test("Then it should call registerUser with username 'Bob', email 'bob@this.com', password 'qwedsazxc'", async () => {
      const { username, email, password, passwordConfirm } = bobUser;
      const usernameInputLabel = /nombre de usuario/i;
      const emailInputLabel = /email/i;
      const passwordInputLabel = /^contraseña/i;
      const passwordConfirmInputLabel = /repite tu contraseña/i;
      const submitButtonText = /registrarse/i;

      renderWithProviders(<RegisterForm />);
      const usernameInput = screen.queryByLabelText(
        usernameInputLabel
      ) as HTMLInputElement;
      const emailInput = screen.queryByLabelText(
        emailInputLabel
      ) as HTMLInputElement;
      const passwordInput = screen.queryByLabelText(
        passwordInputLabel
      ) as HTMLInputElement;
      const passwordConfirmInput = screen.queryByLabelText(
        passwordConfirmInputLabel
      ) as HTMLInputElement;
      const submitButton = screen.queryByRole("button", {
        name: submitButtonText,
      }) as HTMLButtonElement;
      await userEvent.type(usernameInput, username);
      await userEvent.type(emailInput, email);
      await userEvent.type(passwordInput, password);
      await userEvent.type(passwordConfirmInput, passwordConfirm);
      await userEvent.click(submitButton);

      expect(mockRegisterUser).toHaveBeenCalledWith(bobUser);
    });
  });

  describe("When it's rendered and user submit with invalid passwordConfirm 'qweasdasd' for password 'qwedaszxc'", () => {
    test("Then it should return", async () => {
      const { username, email, password } = bobUser;
      const passwordConfirm = "qweas";
      const usernameInputLabel = /nombre de usuario/i;
      const emailInputLabel = /email/i;
      const passwordInputLabel = /^contraseña/i;
      const passwordConfirmInputLabel = /repite tu contraseña/i;
      const submitButtonText = /registrarse/i;

      renderWithProviders(<RegisterForm />);
      const usernameInput = screen.queryByLabelText(
        usernameInputLabel
      ) as HTMLInputElement;
      const emailInput = screen.queryByLabelText(
        emailInputLabel
      ) as HTMLInputElement;
      const passwordInput = screen.queryByLabelText(
        passwordInputLabel
      ) as HTMLInputElement;
      const passwordConfirmInput = screen.queryByLabelText(
        passwordConfirmInputLabel
      ) as HTMLInputElement;
      const submitButton = screen.queryByRole("button", {
        name: submitButtonText,
      }) as HTMLButtonElement;
      await userEvent.type(usernameInput, username);
      await userEvent.type(emailInput, email);
      await userEvent.type(passwordInput, password);
      await userEvent.type(passwordConfirmInput, passwordConfirm);
      await userEvent.click(submitButton);

      expect(mockRegisterUser).not.toHaveBeenCalled();
    });
  });
});
