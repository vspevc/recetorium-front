import { screen } from "@testing-library/react";
import { renderWithProvidersAndRouter } from "../../mocks/renderWithProvidersAndRouer";
import RegisterUser from "./RegisterUser";

describe("Given a RegisterUser page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading level 1 'Registrarse es gratis'", () => {
      const expectedHeadingText = /registrarse es gratis/i;
      const expectedHeadingLevel = 1;

      renderWithProvidersAndRouter(<RegisterUser />);
      const expectedHeading = screen.queryByRole("heading", {
        name: expectedHeadingText,
        level: expectedHeadingLevel,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
