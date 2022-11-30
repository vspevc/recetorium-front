import { eightRecipes } from "../../../factories/recipeFactory/recipeFactory";
import { loadRecipesActionCreator, recipesReducer } from "./recipesSlice";
import { RecipesState } from "./types";

describe("Given a recipesReducer", () => {
  const currentState: RecipesState = {
    recipes: [],
  };

  describe("When it receives the current recipes state and an unknown action", () => {
    test("Then it should return a new recipes state with same value as current state", () => {
      const unknownAction = { type: "recipes/unknown" };

      const newState = recipesReducer(currentState, unknownAction);

      expect(newState).toStrictEqual(currentState);
    });
  });

  describe("When it receives the current recipes state and a loadRecipes action with a recipes list", () => {
    test("Then it should return a new state with the current state data with the new recipes list", () => {
      const newRecipes = eightRecipes;
      const expectedProperty = "recipes";

      const newState = recipesReducer(
        currentState,
        loadRecipesActionCreator(newRecipes)
      );

      expect(newState).toHaveProperty(expectedProperty, newRecipes);
    });
  });
});
