import { screen } from "@testing-library/react";
import { renderWithProvidersAndRouter } from "../../mocks/renderWithProvidersAndRouer";
import { ModalStructure } from "../../redux/features/uiSlice/types";
import { uiInitialState } from "../../redux/features/uiSlice/uiSlice";
import App from "./App";

describe("Given an App component", () => {
  describe("When it's rendered and ui state modal isOpen with title 'Well done'", () => {
    test("Then it should show a modal with title 'Well done'", () => {
      const expectedHeadingTitle = "Well done";
      const expectedHeadingLevel = 2;
      const modalIsOpen: ModalStructure = {
        isOpen: true,
        type: "success",
        title: "Well done",
      };

      renderWithProvidersAndRouter(<App />, {
        preloadedState: {
          ui: { ...uiInitialState, modal: modalIsOpen },
          recipes: { recipes: [] },
        },
      });
      const expectedModalHeading = screen.queryByRole("heading", {
        name: expectedHeadingTitle,
        level: expectedHeadingLevel,
      });

      expect(expectedModalHeading).toBeInTheDocument();
    });
  });

  describe("When it's rendered and ui state loading true", () => {
    test("Then it should show a loading screen with label 'Cargando, por favor espere.'", () => {
      const expectedLabel = /cargando, por favor espere./i;
      const isLoading = true;

      renderWithProvidersAndRouter(<App />, {
        preloadedState: {
          ui: { ...uiInitialState, isLoading },
          recipes: { recipes: [] },
        },
      });
      const expectedLoading = screen.queryByLabelText(expectedLabel);

      expect(expectedLoading).toBeInTheDocument();
    });
  });
});
