import { render, screen } from "@testing-library/react";
import ContextWrapper from "../../mocks/ContextWrapper";
import Modal from "./Modal";

describe("Given a Modal component", () => {
  describe("When it's rendered with children <button>Close</button>", () => {
    test("Then it should show a modal with <button>Close</button>", () => {
      const modalContentText = "Close";
      const modalContent: JSX.Element = <button>{modalContentText}</button>;

      render(<Modal children={modalContent} />, { wrapper: ContextWrapper });
      const expectedModalContent = screen.queryByRole("button", {
        name: modalContentText,
      });

      expect(expectedModalContent).toBeInTheDocument();
    });
  });
});
