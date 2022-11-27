import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import RegisterUser from "./RegisterUser";

describe("Given a RegisterUser page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading level 2 'Registrarse es gratis'", () => {
      const expectedHeadingText = /registrarse es gratis/i;
      const expectedHeadingLevel = 1;

      renderWithProviders(<RegisterUser />);
      const expectedHeading = screen.queryByRole("heading", {
        name: expectedHeadingText,
        level: expectedHeadingLevel,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
