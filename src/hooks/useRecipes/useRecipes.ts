import { AxiosError } from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
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
import axiosErrorMessage from "../../utils/api/axiosErrorMessage";
import recetoriumApi from "../../utils/api/recetoriumApi";
import paths from "../../utils/paths/paths";
import RecipeFormData from "./types";

const useRecipes = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
        // eslint-disable-next-line no-restricted-globals
        scrollTo(0, 0);
        dispatch(hideLoadingActionCreator());
      } catch (error: unknown) {
        dispatch(
          showErrorModalActionCreator({
            title: "No se ha podido cargar el contenido.",
            content: axiosErrorMessage(error as AxiosError),
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

      const { name, types, elaborationTime, image, ingredients, steps } =
        recipeFormData;
      const recipeRequestData = new FormData();
      recipeRequestData.append("author", "63851ce5edfc297f0b0060c8");
      recipeRequestData.append("name", name);
      recipeRequestData.append("elaborationTime", elaborationTime);
      if (image) {
        recipeRequestData.append("image", image);
      }
      types.forEach((type, index) => {
        recipeRequestData.append(`types[${index}][name]`, type.name);
      });
      ingredients.forEach((ingredient, index) => {
        recipeRequestData.append(
          `ingredients[${index}][name]`,
          ingredient.name
        );
        recipeRequestData.append(
          `ingredients[${index}][quantity]`,
          ingredient.quantity
        );
      });
      steps.forEach((step, index) => {
        recipeRequestData.append(`steps[${index}][step]`, step.step);
        recipeRequestData.append(
          `steps[${index}][order]`,
          step.order.toString()
        );
      });

      try {
        await recetoriumApi().post("recipes/create", recipeRequestData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        dispatch(
          showSuccessModalActionCreator({
            title: "Receta creada correctamente",
            content: "Tu receta ya está disponible.",
          })
        );

        dispatch(hideLoadingActionCreator());

        navigate(paths.root);
        window.scrollTo(0, 0);
      } catch (error: unknown) {
        dispatch(
          showErrorModalActionCreator({
            title: "Error al intentar crear la receta",
            content: axiosErrorMessage(error as AxiosError),
          })
        );
        dispatch(hideLoadingActionCreator());
      }
    },
    [dispatch, navigate]
  );

  const deleteRecipe = async (recipeId: string) => {
    dispatch(showLoadingActionCreator());

    try {
      await recetoriumApi().delete(`recipes/delete/${recipeId}`);

      dispatch(
        showSuccessModalActionCreator({
          title: "Se ha eliminado la receta",
          content: "La receta ha sido eliminada de forma permanente.",
        })
      );
      dispatch(hideLoadingActionCreator());
    } catch (error: unknown) {
      dispatch(
        showErrorModalActionCreator({
          title: "Error al intentar eliminar la receta",
          content: axiosErrorMessage(error as AxiosError),
        })
      );
      dispatch(hideLoadingActionCreator());
    }
  };

  return { loadRecipes, createRecipe, deleteRecipe };
};

export default useRecipes;
