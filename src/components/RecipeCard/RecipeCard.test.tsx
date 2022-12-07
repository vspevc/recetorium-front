import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import { RecipeStructure } from "../../redux/features/recipesSlice/types";
import RecipeCard from "./RecipeCard";

const mockDeleteRecipe = jest.fn();
const mockLoadRecipes = jest.fn();
jest.mock("../../hooks/useRecipes/useRecipes", () => {
  return () => ({
    deleteRecipe: mockDeleteRecipe,
    loadRecipes: mockLoadRecipes,
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given a RecipeCard component", () => {
  const recipe: RecipeStructure = {
    id: "638fa48db57ddca2b40bb483",
    name: "Yummy salad",
    urlSlug: "/",
    author: "",
    types: [{ name: "desayuno" }, { name: "almuerzo" }, { name: "comida" }],
    ingredients: [],
    steps: [],
    elaborationTime: "10 min",
    image: "salad.jpg",
  };

  describe("When it's rendered with recipe name 'Yummy salad'", () => {
    test("Then it should show a heading level 3 with 'Yummy salad'", () => {
      const expectedHeadingLevel = 2;

      renderWithProviders(<RecipeCard recipe={recipe} />);
      const expectedHeading = screen.queryByRole("heading", {
        name: recipe.name,
        level: expectedHeadingLevel,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });

  describe("When it's rendered with recipe types 'cena' and 'postre'", () => {
    test("Then it should show two tags with names 'cena' and 'postre'", () => {
      const cena = "cena";
      const postre = "postre";
      recipe.types = [{ name: cena }, { name: postre }];

      renderWithProviders(<RecipeCard recipe={recipe} />);
      const expectedcena = screen.queryByText(cena);
      const expectedpostre = screen.queryByText(postre);

      expect(expectedcena).toBeInTheDocument();
      expect(expectedpostre).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a recipe and user clicks on delete button", () => {
    test("Then it should call delete recipe with recipe id and call load recipes", async () => {
      const deleteButtonLabel = /eliminar receta/i;
      renderWithProviders(<RecipeCard recipe={recipe} />);

      const deleteButton = screen.queryByLabelText(
        deleteButtonLabel
      ) as HTMLButtonElement;
      await userEvent.click(deleteButton);

      expect(mockDeleteRecipe).toHaveBeenCalledWith(recipe.id);
      expect(mockLoadRecipes).toHaveBeenCalled();
    });
  });
});
