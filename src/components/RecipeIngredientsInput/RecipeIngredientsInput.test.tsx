import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import { Ingredient } from "../../redux/features/recipesSlice/types";
import RecipeIngredientsInput from "./RecipeIngredientsInput";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given a RecipeIngredientsInput component", () => {
  const ingredientName = "Tomato";
  const ingredientQuantity = "1 kg";
  const initialIngredients: Ingredient[] = [
    { name: ingredientName, quantity: ingredientQuantity },
  ];
  const callback = jest.fn();
  const addButtonText = /añadir/i;
  const ingredientNameInputLabel = /nombre del ingrediente/i;
  const ingredientQuantityInputLabel = /cantidad/i;

  describe("When it's rendered", () => {
    test("Then it should show a heading level 3 with 'Ingredients'", async () => {
      const expectedHeadingText = /ingredientes/i;
      const expectedHeadingLevel = 3;

      renderWithProviders(
        <RecipeIngredientsInput
          ingredients={initialIngredients}
          callback={callback}
        />
      );
      const expectedHeading = screen.queryByRole("heading", {
        name: expectedHeadingText,
        level: expectedHeadingLevel,
      });
      const addButton = screen.queryByRole("button", {
        name: addButtonText,
      }) as HTMLButtonElement;
      await userEvent.click(addButton);

      expect(expectedHeading).toBeInTheDocument();
    });
  });

  describe("When it's rendered with callback function and user inserts ingredient name 'Tomato' and quantity '1 kg'", () => {
    test("Then it should call callback with ingredient name 'Tomato' and quantity '1 kg'", async () => {
      const expectedIngredients: Ingredient[] = [
        { name: ingredientName, quantity: ingredientQuantity },
      ];
      renderWithProviders(
        <RecipeIngredientsInput ingredients={[]} callback={callback} />
      );

      const ingredientNameInput = screen.queryByLabelText(
        ingredientNameInputLabel
      ) as HTMLInputElement;
      const ingredientQuantityInput = screen.queryByLabelText(
        ingredientQuantityInputLabel
      ) as HTMLInputElement;
      const addButton = screen.queryByRole("button", {
        name: addButtonText,
      }) as HTMLButtonElement;
      await userEvent.type(ingredientNameInput, ingredientName);
      await userEvent.type(ingredientQuantityInput, ingredientQuantity);
      await userEvent.click(addButton);

      expect(callback).toHaveBeenCalledWith(expectedIngredients);
    });
  });

  describe("When it's rendered with ingredient name 'Tomato', quantity '1 kg' and user clicks on it's delete button", () => {
    test("Then it should call callback with no ingredients", async () => {
      const deleteButtonLabel = /eliminar/i;
      renderWithProviders(
        <RecipeIngredientsInput
          ingredients={initialIngredients}
          callback={callback}
        />
      );

      const deleteButton = screen.queryByLabelText(
        deleteButtonLabel
      ) as HTMLButtonElement;
      await userEvent.click(deleteButton);

      expect(callback).toHaveBeenCalledWith([]);
    });
  });

  describe("When it's rendered with tomato ingredient, user clicks on it's edit button, change name and add it", () => {
    test("Then it should call callback with ingredient name 'Tomato sauce' and quantity '1 kg'", async () => {
      const editButtonLabel = /^editar/i;
      const updateButtonLabel = /editar ingrediente/i;
      const nameAdition = " sauce";
      const expectedIngredients: Ingredient[] = [
        {
          name: `${ingredientName}${nameAdition}`,
          quantity: ingredientQuantity,
        },
      ];
      renderWithProviders(
        <RecipeIngredientsInput
          ingredients={initialIngredients}
          callback={callback}
        />
      );

      const editButton = screen.queryByLabelText(
        editButtonLabel
      ) as HTMLButtonElement;
      await userEvent.click(editButton);
      const ingredientNameInput = screen.queryByLabelText(
        ingredientNameInputLabel
      ) as HTMLInputElement;
      const updateButton = screen.queryByRole("button", {
        name: updateButtonLabel,
      }) as HTMLButtonElement;
      await userEvent.type(ingredientNameInput, nameAdition);
      await userEvent.click(updateButton);

      expect(callback).toHaveBeenCalledWith(expectedIngredients);
    });
  });
});
