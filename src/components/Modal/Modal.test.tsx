import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import { RecipeStructure } from "../../redux/features/recipesSlice/types";
import { ModalStructure } from "../../redux/features/uiSlice/types";
import Modal from "./Modal";

describe("Given a Modal component", () => {
  describe("When it's rendered with modal ui state type 'success' and title 'Well done'", () => {
    const modalContentTitle = "Well done";
    const modalContent: ModalStructure = {
      title: modalContentTitle,
      content: "You make a great work.",
      type: "success",
    };

    test("Then it should show a modal with a heading level 2 'Well done'", () => {
      renderWithProviders(<Modal />, {
        preloadedState: {
          ui: { modal: modalContent },
          recipes: { recipes: {} as RecipeStructure[] },
        },
      });
      const expectedModalContent = screen.queryByRole("heading", {
        name: modalContentTitle,
        level: 2,
      });

      expect(expectedModalContent).toBeInTheDocument();
    });

    describe("And user clicks on button 'Salir'", () => {
      test("Then it should empty modal content", async () => {
        const closeButtonText = "Salir";
        renderWithProviders(<Modal />, {
          preloadedState: {
            ui: { modal: modalContent },
            recipes: { recipes: {} as RecipeStructure[] },
          },
        });
        const expectedModalContent = screen.queryByRole("heading", {
          name: modalContentTitle,
          level: 2,
        });

        const closeButton = screen.queryByRole("button", {
          name: closeButtonText,
        }) as HTMLButtonElement;
        await userEvent.click(closeButton);

        expect(expectedModalContent).not.toBeInTheDocument();
      });
    });
  });

  describe("When it's rendered with modal ui state type 'success' and title 'Something wrong'", () => {
    test("Then it should show a modal with a heading level 2 'Something wrong'", () => {
      const modalContentTitle = "Something wrong";
      const modalContent: ModalStructure = {
        title: modalContentTitle,
        content: "There's something wrong try again.",
        type: "error",
      };

      renderWithProviders(<Modal />, {
        preloadedState: {
          ui: { modal: modalContent },
          recipes: { recipes: {} as RecipeStructure[] },
        },
      });
      const expectedModalContent = screen.queryByRole("heading", {
        name: modalContentTitle,
        level: 2,
      });

      expect(expectedModalContent).toBeInTheDocument();
    });
  });
});
