import { screen } from "@testing-library/react";
import { renderWithProvidersAndRouter } from "../../mocks/renderWithProvidersAndRouer";
import { ModalStructure } from "../../redux/features/uiSlice/types";
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
          ui: { modal: modalIsOpen },
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
});
