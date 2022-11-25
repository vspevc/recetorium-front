import UIState from "./types";
import { showModalActionCreator, uiReducer } from "./uiSlice";

describe("Given a uiReducer", () => {
  const currentState: UIState = {
    modal: null,
  };

  describe("When it receives the current state and an unknown action", () => {
    test("Then it should return a new ui state with same values than current state", () => {
      const unknownAction = { type: "ui/unknown" };

      const newState = uiReducer(currentState, unknownAction);

      expect(newState).toStrictEqual(currentState);
    });
  });

  describe("When it receivesthe current state and a showModal action with <p>Hola</p>", () => {
    test("Then it should return a new ui state with modal <p>Hola</p>", () => {
      const modalContent: JSX.Element = <p>Hola</p>;

      const newState = uiReducer(
        currentState,
        showModalActionCreator(modalContent)
      );

      expect(newState).toHaveProperty("modal", modalContent);
    });
  });
});
