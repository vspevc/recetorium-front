import { AxiosError } from "axios";
import { useCallback } from "react";
import { loadRecipesActionCreator } from "../../redux/features/recipesSlice/recipesSlice";
import { RecipeStructure } from "../../redux/features/recipesSlice/types";
import { PaginationStructure } from "../../redux/features/uiSlice/types";
import {
  hideLoadingActionCreator,
  loadPaginationActionCreator,
  showErrorModalActionCreator,
  showLoadingActionCreator,
  showSuccessModalActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import recetoriumApi from "../../utils/api/recetoriumApi";
import apiMessageToSpanish from "../../utils/api/translations/apiMessageToSpanish";
import { ApiErrorResponse } from "../useUsers/types";
import RecipeFormData from "./types";

const useRecipes = () => {
  const dispatch = useAppDispatch();

  const loadRecipes = useCallback(
    async (page?: string) => {
      dispatch(showLoadingActionCreator());

      let path = "recipes/search";
      let currentPage = 1;

      if (page) {
        path = `${page}`;
        currentPage = +new URL(page, "http://localhost").searchParams.get(
          "page"
        )!;
      }

      try {
        const response = await recetoriumApi().get(path);

        const {
          previousPage,
          nextPage,
          totalPages,
          recipes: recipesData,
        } = await response.data;
        const recipes: RecipeStructure[] = recipesData;
        const paginationData: PaginationStructure = {
          previousPage,
          nextPage,
          totalPages,
          currentPage,
        };

        dispatch(loadRecipesActionCreator(recipes));
        dispatch(loadPaginationActionCreator(paginationData));
        dispatch(hideLoadingActionCreator());
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
        dispatch(hideLoadingActionCreator());
      }
    },
    [dispatch]
  );

  const createRecipe = useCallback(
    async (recipeFormData: RecipeFormData) => {
      dispatch(showLoadingActionCreator());

      try {
        await recetoriumApi().post("recipes/create", recipeFormData);

        dispatch(
          showSuccessModalActionCreator({
            title: "Receta creada correctamente",
            content: "Tu receta ya está disponible.",
          })
        );
        dispatch(hideLoadingActionCreator());
      } catch (error: unknown) {
        const axiosError = error as AxiosError;

        let errorMessage = axiosError.message;

        if (errorMessage !== "Network Error" && axiosError.response) {
          errorMessage = (axiosError.response.data as ApiErrorResponse).error;
        }

        errorMessage = apiMessageToSpanish(errorMessage);

        dispatch(
          showErrorModalActionCreator({
            title: "Error al intentar crear la receta",
            content: errorMessage,
          })
        );
        dispatch(hideLoadingActionCreator());
      }
    },
    [dispatch]
  );

  return { loadRecipes, createRecipe };
};

export default useRecipes;
