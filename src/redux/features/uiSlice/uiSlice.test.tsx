import { ModalStructure, UIState } from "./types";
import {
  closeModalActionCreator,
  showErrorModalActionCreator,
  showSuccessModalActionCreator,
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

  describe("When it receives the current ui state and a showSuccessModal action with title 'Well done' and content 'Great job'", () => {
    test("Then it should return a new ui state with modal isOpen true, type 'success', title 'Well done' and content 'Great job'", () => {
      const modalContent: ModalStructure = {
        isOpen: true,
        type: "success",
        title: "Well done",
        content: "Great job",
      };
      const expectedProperty = "modal";

      const newState = uiReducer(
        currentState,
        showSuccessModalActionCreator({
          title: modalContent.title!,
          content: modalContent.content!,
        })
      );

      expect(newState).toHaveProperty(expectedProperty, modalContent);
    });
  });

  describe("When it receives the current ui state and a showErrorModal action with title 'Not good' and content 'Next time'", () => {
    test("Then it should return a new ui state with modal isOpen true, type 'error', title 'Not good' and content 'Next time'", () => {
      const modalContent: ModalStructure = {
        isOpen: true,
        type: "error",
        title: "Not good",
        content: "Next time",
      };
      const expectedProperty = "modal";

      const newState = uiReducer(
        currentState,
        showErrorModalActionCreator({
          title: modalContent.title!,
          content: modalContent.content!,
        })
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
