import { RecipeMainData } from "../../redux/features/recipesSlice/types";

interface RecipeFormData extends RecipeMainData {
  imageUrl?: string;
  image?: File;
}

export default RecipeFormData;
