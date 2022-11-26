import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import { ModalStructure } from "../../redux/features/uiSlice/types";
import Modal from "./Modal";

describe("Given a Modal component", () => {
  const modalContentTitle = "Test";
  const modalContent: ModalStructure = {
    isOpen: false,
    title: "Test",
    content: "Test content",
    type: "success",
  };

  describe("When it's rendered with children <button>Close</button>", () => {
    test("Then it should show a modal with <button>Close</button>", () => {
      renderWithProviders(<Modal />, {
        preloadedState: { ui: { modal: modalContent } },
      });
      const expectedModalContent = screen.queryByRole("heading", {
        name: modalContentTitle,
      });

      expect(expectedModalContent).toBeInTheDocument();
    });
  });

  describe("When it's rendered and user click on the modal overlay", () => {
    test("Then it should call closeModal function", async () => {
      renderWithProviders(<Modal />, {
        preloadedState: { ui: { modal: modalContent } },
      });
      const expectedModalContent = screen.queryByRole("button", {
        name: modalContentTitle,
      });

      const modalOverlay = screen.queryByTestId("test")!;
      await userEvent.click(modalOverlay);

      expect(expectedModalContent).not.toBeInTheDocument();
    });
  });
});
