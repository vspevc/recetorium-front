import { Step } from "../../redux/features/recipesSlice/types";

interface RecipeStepsInputProps {
  steps: Step[];
  callback: (recipeIngredients: Step[]) => void;
}

export default RecipeStepsInputProps;
