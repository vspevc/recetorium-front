import { RecipeMainData } from "../../redux/features/recipesSlice/types";

interface RecipeFormData extends RecipeMainData {
  image?: File;
}

export default RecipeFormData;
