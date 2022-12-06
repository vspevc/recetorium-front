import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import CreateRecipe from "./CreateRecipe";

describe("Given a CreateRecipe page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading level 2 with text 'Nueva Receta'", () => {
      const expectedHeadingText = /nueva receta/i;
      const expectedHeadingLevel = 1;

      renderWithProviders(<CreateRecipe />);
      const expectedHeading = screen.queryByRole("heading", {
        name: expectedHeadingText,
        level: expectedHeadingLevel,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
