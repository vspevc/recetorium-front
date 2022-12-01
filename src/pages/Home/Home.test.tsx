import { screen } from "@testing-library/react";
import { eightRecipes } from "../../factories/recipeFactory/recipeFactory";
import { renderWithProvidersAndRouter } from "../../mocks/renderWithProvidersAndRouer";
import { uiInitialState } from "../../redux/features/uiSlice/uiSlice";
import Home from "./Home";

describe("Given a Home page", () => {
  describe("When it's rendered and recipes state recipes have 8 recipes", () => {
    test("Then it should show a lsit of recipes with 8 recipes cards", () => {
      const expectedHedingsLevel = 2;

      renderWithProvidersAndRouter(<Home />, {
        preloadedState: {
          ui: uiInitialState,
          recipes: { recipes: eightRecipes },
        },
      });

      const cardHeaders = screen.queryAllByRole("heading", {
        level: expectedHedingsLevel,
      });

      expect(cardHeaders).toHaveLength(eightRecipes.length);
    });
  });
});
