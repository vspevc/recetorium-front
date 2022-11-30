import { renderHook } from "@testing-library/react";
import { eightRecipes } from "../../factories/recipeFactory/recipeFactory";
import ContextWrapper from "../../mocks/ContextWrapper";
import { loadRecipesActionCreator } from "../../redux/features/recipesSlice/recipesSlice";
import { FeedbackModalPayload } from "../../redux/features/uiSlice/types";
import { showErrorModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { store } from "../../redux/store";
import useRecipes from "./useRecipes";

describe("Given a useRecipes custom hook", () => {
  const dispatchSpy = jest.spyOn(store, "dispatch");
  const { result } = renderHook(() => useRecipes(), {
    wrapper: ContextWrapper,
  });

  describe("When it's loadRecipes is invoked", () => {
    test("Then it should call dispatch with loadRecipes action with a list of recipes", async () => {
      const loadRecipesAction = loadRecipesActionCreator(eightRecipes);

      await result.current.loadRecipes();

      expect(dispatchSpy).toHaveBeenCalledWith(loadRecipesAction);
    });
  });

  describe("When it's loadRecipes is invoked but have a network connection error", () => {
    test("Then it should call dispatch with show modal action with error cannot load data", async () => {
      const modalData: FeedbackModalPayload = {
        title: "No se ha podido cargar el contenido.",
        content: "Error de conexión, intentelo en unos minutos.",
      };
      const showModalAction = showErrorModalActionCreator(modalData);

      await result.current.loadRecipes();

      expect(dispatchSpy).toHaveBeenCalledWith(showModalAction);
    });
  });
});
