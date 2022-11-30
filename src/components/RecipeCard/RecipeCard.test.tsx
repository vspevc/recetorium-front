import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import { RecipeStructure } from "../../redux/features/recipesSlice/types";
import RecipeCard from "./RecipeCard";

describe("Given a RecipeCard component", () => {
  const recipe: RecipeStructure = {
    id: "",
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
});
