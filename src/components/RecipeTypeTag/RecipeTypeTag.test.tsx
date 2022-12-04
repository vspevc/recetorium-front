import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import RecipeTypeTag from "./RecipeTypeTag";

describe("Given a RecipeTypeTag component", () => {
  describe("When it's rendered with name 'desayuno'", () => {
    test("Then it should show a tag with text 'desayuno' on it", () => {
      const tagName = "desayuno";

      renderWithProviders(<RecipeTypeTag name={tagName} />);
      const expectedTag = screen.queryByText(tagName);

      expect(expectedTag).toBeInTheDocument();
    });
  });
});
