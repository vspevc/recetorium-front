import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import NotFound from "./NotFound";

describe("Given a NotFound page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading level 1 with 'Página no encontrada'", () => {
      const expectedHeadingText = /página no encontrada/i;
      const expectedHeadingLevel = 1;

      renderWithProviders(<NotFound />);
      const expectedHeading = screen.queryByRole("heading", {
        name: expectedHeadingText,
        level: expectedHeadingLevel,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
