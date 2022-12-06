import RecipeFormData from "../../hooks/useRecipes/types";

interface RecipeFormProps {
  type: "create" | "update";
  recipeData: RecipeFormData;
  sendFormData: (recipeFormData: RecipeFormData) => void;
}

export default RecipeFormProps;
