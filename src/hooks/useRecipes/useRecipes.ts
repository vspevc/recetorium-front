import { AxiosError } from "axios";
import { useCallback } from "react";
import { loadRecipesActionCreator } from "../../redux/features/recipesSlice/recipesSlice";
import { RecipeStructure } from "../../redux/features/recipesSlice/types";
import { PaginationStructure } from "../../redux/features/uiSlice/types";
import {
  loadPaginationActionCreator,
  showErrorModalActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import recetoriumApi from "../../utils/api/recetoriumApi";
import apiMessageToSpanish from "../../utils/api/translations/apiMessageToSpanish";

const useRecipes = () => {
  const dispatch = useAppDispatch();
  const apiConnection = recetoriumApi();

  const loadRecipes = useCallback(
    async (page?: string) => {
      let path = "recipes/search";
      let currentPage = 1;

      if (page) {
        path = `${page}`;
        currentPage = +new URL(page, "http://localhost").searchParams.get(
          "page"
        )!;
      }

      try {
        const response = await apiConnection.get(path);

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
    },
    [dispatch]
  );

  return { loadRecipes };
};

export default useRecipes;
