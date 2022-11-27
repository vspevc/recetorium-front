import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import paths from "../../utils/paths/paths";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it's rendered with path '/usuario/registro'", () => {
    test("Then it should show the register user page", () => {
      const registerUserPath = paths.registerUser;
      const expectedHeadingText = /registrarse es gratis/i;
      const expectedHeadingLevel = 2;

      renderWithProviders(
        <MemoryRouter initialEntries={[registerUserPath]}>
          <Layout />
        </MemoryRouter>
      );

      const expectedHeading = screen.queryByRole("heading", {
        name: expectedHeadingText,
        level: expectedHeadingLevel,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
