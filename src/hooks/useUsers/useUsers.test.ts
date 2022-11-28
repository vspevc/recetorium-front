import { renderHook } from "@testing-library/react";
import ContextWrapper from "../../mocks/ContextWrapper";
import { FeedbackModalPayload } from "../../redux/features/uiSlice/types";
import {
  showErrorModalActionCreator,
  showSuccessModalActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { store } from "../../redux/store";
import RegisterUserData from "./types";
import useUsers from "./useUsers";

describe("Given a useUsers custom hook", () => {
  const dispatchSpy = jest.spyOn(store, "dispatch");
  const { result } = renderHook(() => useUsers(), {
    wrapper: ContextWrapper,
  });
  const userBob: RegisterUserData = {
    username: "Bob",
    password: "qwedsazxc",
    passwordConfirm: "qwedsazxc",
    email: "bob@this.com",
  };

  describe("When it's registerUser is invoked with valid data: name 'Bob', password 'qwedsazxc' and email 'bob@this.com'", () => {
    test("Then it should call dispatch with show modal action with success register data", async () => {
      const modalData: FeedbackModalPayload = {
        title: "Tu usuario ha sido registrado",
        content:
          "Enhorabuena ahora puedes acceder a todo el contenido entrando con tu nuevo usuario.",
      };
      const showModalAction = showSuccessModalActionCreator(modalData);

      await result.current.registerUser(userBob);

      expect(dispatchSpy).toHaveBeenCalledWith(showModalAction);
    });
  });

  describe("When it's registerUser is invoked with invalid password '1234'", () => {
    test("Then it should call dispatch with show modal action with error register data", async () => {
      userBob.password = "1234";
      userBob.passwordConfirm = "1234";
      const modalData: FeedbackModalPayload = {
        title: "Error al intentar regitrar nuevo usuario",
        content: "La contraseña no cumple las condiciones.",
      };
      const showModalAction = showErrorModalActionCreator(modalData);

      await result.current.registerUser(userBob);

      expect(dispatchSpy).toHaveBeenCalledWith(showModalAction);
    });
  });

  describe("When it's registerUser is invoked with valid user but have a network connection error", () => {
    test("Then it should call dispatch with show modal action with error register data", async () => {
      const modalData: FeedbackModalPayload = {
        title: "Error al intentar regitrar nuevo usuario",
        content: "Error de conexión, intentelo en unos minutos.",
      };
      const showModalAction = showErrorModalActionCreator(modalData);

      await result.current.registerUser(userBob);

      expect(dispatchSpy).toHaveBeenCalledWith(showModalAction);
    });
  });
});
