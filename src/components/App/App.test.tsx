import { screen } from "@testing-library/react";
import { renderWithProvidersAndRouter } from "../../mocks/renderWithProvidersAndRouer";
import { RecipeStructure } from "../../redux/features/recipesSlice/types";
import { ModalStructure } from "../../redux/features/uiSlice/types";
import App from "./App";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show", () => {
      const expectedHeadingTitle = "Well done";
      const expectedHeadingLevel = 2;
      const modalIsOpen: ModalStructure = {
        isOpen: true,
        type: "success",
        title: "Well done",
      };

      renderWithProvidersAndRouter(<App />, {
        preloadedState: {
          ui: { modal: modalIsOpen },
          recipes: { recipes: {} as RecipeStructure[] },
        },
      });
      const expectedModalHeading = screen.queryByRole("heading", {
        name: expectedHeadingTitle,
        level: expectedHeadingLevel,
      });

      expect(expectedModalHeading).toBeInTheDocument();
    });
  });
});
