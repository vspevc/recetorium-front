import { screen } from "@testing-library/react";
import { renderWithProvidersAndRouter } from "../../mocks/renderWithProvidersAndRouer";
import CreateRecipe from "./CreateRecipe";

describe("Given a CreateRecipe page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading level 2 with text 'Nueva Receta'", () => {
      const expectedHeadingText = /nueva receta/i;
      const expectedHeadingLevel = 1;

      renderWithProvidersAndRouter(<CreateRecipe />);
      const expectedHeading = screen.queryByRole("heading", {
        name: expectedHeadingText,
        level: expectedHeadingLevel,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
