import { renderHook } from "@testing-library/react";
import {
  eightRecipes,
  recipeTomatoSoup,
} from "../../factories/recipeFactory/recipeFactory";
import ContextWrapper from "../../mocks/ContextWrapper";
import { loadRecipesActionCreator } from "../../redux/features/recipesSlice/recipesSlice";
import { FeedbackModalPayload } from "../../redux/features/uiSlice/types";
import {
  showErrorModalActionCreator,
  showSuccessModalActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { store } from "../../redux/store";
import RecipeFormData from "./types";
import useRecipes from "./useRecipes";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given a useRecipes custom hook", () => {
  const dispatchSpy = jest.spyOn(store, "dispatch");
  const {
    result: {
      current: { loadRecipes, createRecipe, deleteRecipe },
    },
  } = renderHook(() => useRecipes(), {
    wrapper: ContextWrapper,
  });

  describe("When it's loadRecipes is invoked", () => {
    test("Then it should call dispatch with loadRecipes action with a list of recipes", async () => {
      const loadRecipesAction = loadRecipesActionCreator(eightRecipes);

      await loadRecipes();

      expect(dispatchSpy).toHaveBeenCalledWith(loadRecipesAction);
    });
  });

  describe("When it's loadRecipes is invoked but the page does not exists", () => {
    test("Then it should call dispatch with show modal action with error cannot load data", async () => {
      const modalData: FeedbackModalPayload = {
        title: "No se ha podido cargar el contenido.",
        content: "Error de conexión, intentelo en unos minutos.",
      };
      const showModalAction = showErrorModalActionCreator(modalData);
      const unknownPage = "recipes/search?page=900";

      await loadRecipes(unknownPage);

      expect(dispatchSpy).toHaveBeenCalledWith(showModalAction);
    });
  });

  const { name, author, types, ingredients, steps, elaborationTime } =
    recipeTomatoSoup;
  const recipeFormData: RecipeFormData = {
    name,
    author,
    types,
    ingredients,
    steps,
    elaborationTime,
  };

  describe("When it's createRecipe is invoked with valid recipe with name 'Tomato soup' and with image 'tomato-soup.jpg'", () => {
    test("Then it should call dispatch with show modal action with recipe create success", async () => {
      const image = new File(["(0^0¬)"], "tomato-soup.jpg", {
        type: "image/jpeg",
      });
      const recipeFormData: RecipeFormData = {
        name,
        author,
        types,
        ingredients,
        steps,
        elaborationTime,
        image,
      };
      const modalData: FeedbackModalPayload = {
        title: "Receta creada correctamente",
        content: "Tu receta ya está disponible.",
      };
      const showModalAction = showSuccessModalActionCreator(modalData);

      await createRecipe(recipeFormData);

      expect(dispatchSpy).toHaveBeenCalledWith(showModalAction);
    });
  });

  describe("When it's createRecipe is invoked with valid recipe with name 'Tomato soup'", () => {
    test("Then it should call dispatch with show modal action with recipe create success", async () => {
      const modalData: FeedbackModalPayload = {
        title: "Receta creada correctamente",
        content: "Tu receta ya está disponible.",
      };
      const showModalAction = showSuccessModalActionCreator(modalData);

      await createRecipe(recipeFormData);

      expect(dispatchSpy).toHaveBeenCalledWith(showModalAction);
    });
  });

  describe("When it's createRecipe is invoked with invalid recipe with empty name and without image", () => {
    test("Then it should call dispatch with show modal action with recipe create success", async () => {
      recipeFormData.name = "";
      const modalData: FeedbackModalPayload = {
        title: "Error al intentar crear la receta",
        content: "El nombre de la receta no cumple las condiciones",
      };
      const showModalAction = showErrorModalActionCreator(modalData);

      await createRecipe(recipeFormData);

      expect(dispatchSpy).toHaveBeenCalledWith(showModalAction);
    });
  });

  describe("When it's createRecipe is invoked with valid recipe but have a network connection error", () => {
    test("Then it should call dispatch with show modal action with error register data", async () => {
      const modalData: FeedbackModalPayload = {
        title: "Error al intentar crear la receta",
        content: "Error de conexión, intentelo en unos minutos.",
      };
      const showModalAction = showErrorModalActionCreator(modalData);

      await createRecipe(recipeFormData);

      expect(dispatchSpy).toHaveBeenCalledWith(showModalAction);
    });
  });

  describe("When it's deleteRecipe is invoked with valid id '638fa48db57ddca2b40bb483'", () => {
    test("Then it should call dispatch with show modal action delete recipe success", async () => {
      const recipeId = "638fa48db57ddca2b40bb483";
      const modalData: FeedbackModalPayload = {
        title: "Se ha eliminado la receta",
        content: "La receta ha sido eliminada de forma permanente.",
      };
      const showModalAction = showSuccessModalActionCreator(modalData);

      await deleteRecipe(recipeId);

      expect(dispatchSpy).toHaveBeenCalledWith(showModalAction);
    });
  });

  describe("When it's deleteRecipe is invoked with invalid id '638fa48db57ddca2b40bb482'", () => {
    test("Then it should call dispatch with show modal action delete error", async () => {
      const recipeId = "638fa48db57ddca2b40bb482";
      const modalData: FeedbackModalPayload = {
        title: "Error al intentar eliminar la receta",
        content: "Ha habido un problema vuelva a intentarlo en unos minutos.",
      };
      const showModalAction = showErrorModalActionCreator(modalData);

      await deleteRecipe(recipeId);

      expect(dispatchSpy).toHaveBeenCalledWith(showModalAction);
    });
  });

  describe("When it's deleteRecipe is invoked with valid id but have a network error", () => {
    test("Then it should call dispatch with show modal action delete network error", async () => {
      const recipeId = "638fa48db57ddca2b40bb483";
      const modalData: FeedbackModalPayload = {
        title: "Error al intentar eliminar la receta",
        content: "Error de conexión, intentelo en unos minutos.",
      };
      const showModalAction = showErrorModalActionCreator(modalData);

      await deleteRecipe(recipeId);

      expect(dispatchSpy).toHaveBeenCalledWith(showModalAction);
    });
  });
});
