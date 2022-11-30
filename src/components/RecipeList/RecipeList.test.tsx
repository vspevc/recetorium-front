import { screen } from "@testing-library/react";
import { eightRecipes } from "../../factories/recipeFactory/recipeFactory";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import { ModalStructure } from "../../redux/features/uiSlice/types";
import RecipeList from "./RecipeList";

describe("Given a RecipeList conponent", () => {
  describe("When it's rendered and recipes state recipes have 8 recipes", () => {
    test("Then it it should show a list of 8 recipes cards", () => {
      renderWithProviders(<RecipeList />, {
        preloadedState: {
          ui: { modal: {} as ModalStructure },
          recipes: { recipes: eightRecipes },
        },
      });

      const cardHeaders = screen.queryAllByRole("heading", { level: 2 });

      expect(cardHeaders).toHaveLength(8);
    });
  });
});
