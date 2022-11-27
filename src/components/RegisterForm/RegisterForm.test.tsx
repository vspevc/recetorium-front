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

describe("Given a RegisterForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading level 2 'Registrarse es gratis'", () => {
      const expectedHeadingText = "Registrarse es gratis";
      const expectedHeadingLevel = 2;

      renderWithProviders(<RegisterForm />);
      const expectedHeading = screen.queryByRole("heading", {
        name: expectedHeadingText,
        level: expectedHeadingLevel,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });

  describe("When it's rendered and user submit with username 'Bob', email 'bob@this.com', password 'qwedsazxc' and passwordConfirm 'qwedsazxc'", () => {
    test("Then it should call registerUser with username 'Bob', email 'bob@this.com', password 'qwedsazxc' and passwordConfirm 'qwedsazxc'", async () => {
      const bobUser: RegisterUserData = {
        username: "Bob",
        email: "bob@this.com",
        password: "qwedsazxc",
        passwordConfirm: "qwedsazxc",
      };
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
      await userEvent.type(usernameInput, bobUser.username);
      await userEvent.type(emailInput, bobUser.email);
      await userEvent.type(passwordInput, bobUser.password);
      await userEvent.type(passwordConfirmInput, bobUser.passwordConfirm);
      await userEvent.click(submitButton);

      expect(mockRegisterUser).toHaveBeenCalledWith(bobUser);
    });
  });
});
