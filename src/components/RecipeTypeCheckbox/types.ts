import { Type } from "../../redux/features/recipesSlice/types";

interface RecipeTypesCheckboxProps {
  types: Type[];
  callback: (recipeTypes: Type[]) => void;
}

export default RecipeTypesCheckboxProps;
