import { AxiosError } from "axios";
import { useCallback } from "react";
import { loadRecipesActionCreator } from "../../redux/features/recipesSlice/recipesSlice";
import { RecipeStructure } from "../../redux/features/recipesSlice/types";
import { showErrorModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import recetoriumApi from "../../utils/api/recetoriumApi";
import apiMessageToSpanish from "../../utils/api/translations/apiMessageToSpanish";

const useRecipes = () => {
  const dispatch = useAppDispatch();
  const apiConnection = recetoriumApi();

  const loadRecipes = useCallback(async () => {
    try {
      const response = await apiConnection.get("recipes/search");

      const recipes: RecipeStructure[] = await response.data.recipes;

      dispatch(loadRecipesActionCreator(recipes));
    } catch (error: unknown) {
      const axiosError = error as AxiosError;

      let errorMessage = axiosError.message;

      errorMessage = apiMessageToSpanish(errorMessage);

      dispatch(
        showErrorModalActionCreator({
          title: "No se ha podido cargar el contenido.",
          content: errorMessage,
        })
      );
    }
  }, [apiConnection, dispatch]);

  return { loadRecipes };
};

export default useRecipes;
