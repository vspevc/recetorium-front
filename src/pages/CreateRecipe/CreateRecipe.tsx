import RecipeForm from "../../components/RecipeForm/RecipeForm";
import RecipeFormData from "../../hooks/useRecipes/types";
import useRecipes from "../../hooks/useRecipes/useRecipes";

const CreateRecipe = (): JSX.Element => {
  const { createRecipe } = useRecipes();
  const recipeData: RecipeFormData = {
    name: "",
    author: "",
    types: [],
    ingredients: [],
    steps: [],
    elaborationTime: "",
  };

  return (
    <>
      <h1>Nueva Receta</h1>

      <RecipeForm
        type="create"
        recipeData={recipeData}
        sendFormData={createRecipe}
      />
    </>
  );
};

export default CreateRecipe;
