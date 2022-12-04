import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import { Type } from "../../redux/features/recipesSlice/types";
import RecipeTypesCheckbox from "./RecipeTypesCheckbox";

describe("Given a RecipeTypesCheckbox component", () => {
  const callback = jest.fn();
  const expectedCheckedProperty = "checked";

  describe("When it's rendered with recipe type 'desayuno'", () => {
    test("Then it should show the 'desayuno' checkbox checked", () => {
      const recipeType = "desayuno";
      const initialRecipeTypes: Type[] = [{ name: recipeType }];
      const expectedCheckedValue = true;

      renderWithProviders(
        <RecipeTypesCheckbox types={initialRecipeTypes} callback={callback} />
      );
      const expectedCheckbox = screen.queryByRole("checkbox", {
        name: recipeType,
      });

      expect(expectedCheckbox).toHaveProperty(
        expectedCheckedProperty,
        expectedCheckedValue
      );
    });
  });

  describe("When it's rendered with recipe type 'cena' and user clicks on 'almuerzo' then on 'cena'", () => {
    test("Then it should show 'cena' checkbox unchecked and 'almuerzo' checkbox checked", async () => {
      const receivedRecipeType = "cena";
      const clickedRecipeType = "almuerzo";
      const initialRecipeTypes: Type[] = [{ name: receivedRecipeType }];
      const expectedCenaCheckedValue = false;
      const expectedAlmuerzoCheckedValue = true;
      renderWithProviders(
        <RecipeTypesCheckbox types={initialRecipeTypes} callback={callback} />
      );

      const expectedCenaCheckbox = screen.queryByRole("checkbox", {
        name: receivedRecipeType,
      }) as HTMLInputElement;
      const expectedAlmuerzoCheckbox = screen.queryByRole("checkbox", {
        name: clickedRecipeType,
      }) as HTMLInputElement;
      await userEvent.click(expectedAlmuerzoCheckbox);
      await userEvent.click(expectedCenaCheckbox);

      expect(expectedCenaCheckbox).toHaveProperty(
        expectedCheckedProperty,
        expectedCenaCheckedValue
      );
      expect(expectedAlmuerzoCheckbox).toHaveProperty(
        expectedCheckedProperty,
        expectedAlmuerzoCheckedValue
      );
    });
  });

  describe("When it's rendered with recipe type 'postre' and user clicks on 'comida'", () => {
    test("Then it should call callback with types 'postre' and 'comida'", async () => {
      const receivedRecipeType = "postre";
      const clickedRecipeType = "comida";
      const initialRecipeTypes: Type[] = [{ name: receivedRecipeType }];
      const expectedRecipeTypes: Type[] = [
        { name: receivedRecipeType },
        { name: clickedRecipeType },
      ];
      renderWithProviders(
        <RecipeTypesCheckbox types={initialRecipeTypes} callback={callback} />
      );

      const expectedComidaCheckbox = screen.queryByRole("checkbox", {
        name: clickedRecipeType,
      }) as HTMLInputElement;
      await userEvent.click(expectedComidaCheckbox);

      expect(callback).toHaveBeenLastCalledWith(expectedRecipeTypes);
    });
  });
});
