import { Ingredient } from "../../redux/features/recipesSlice/types";

interface RecipeIngredientsInputProps {
  ingredients: Ingredient[];
  callback: (recipeIngredients: Ingredient[]) => void;
}

export default RecipeIngredientsInputProps;
