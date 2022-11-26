import { ModalStructure, UIState } from "./types";
import {
  closeModalActionCreator,
  showModalActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a uiReducer", () => {
  const currentState: UIState = {
    modal: {
      isOpen: false,
      title: "",
      content: "",
      type: "default",
    },
  };

  describe("When it receives the current ui state and an unknown action", () => {
    test("Then it should return a new ui state with same values than current state", () => {
      const unknownAction = { type: "ui/unknown" };

      const newState = uiReducer(currentState, unknownAction);

      expect(newState).toStrictEqual(currentState);
    });
  });

  describe("When it receives the current ui state and a showModal action with <p>Hola</p>", () => {
    test("Then it should return a new ui state with modal <p>Hola</p>", () => {
      const modalContent: ModalStructure = {
        isOpen: true,
        title: "Modal title",
        content: "Modal content",
        type: "success",
      };
      const expectedProperty = "modal";

      const newState = uiReducer(
        currentState,
        showModalActionCreator(modalContent)
      );

      expect(newState).toHaveProperty(expectedProperty, modalContent);
    });
  });

  describe("When it receives the current ui state and a closeModal action", () => {
    test("Then it should return a new ui state with modal null", () => {
      const expectedProperty = "modal";
      const expectedPropertyValue: ModalStructure = {
        isOpen: false,
        title: "",
        content: "",
        type: "default",
      };

      const newState = uiReducer(currentState, closeModalActionCreator());

      expect(newState).toHaveProperty(expectedProperty, expectedPropertyValue);
    });
  });
});
