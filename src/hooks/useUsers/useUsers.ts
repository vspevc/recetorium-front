import RegisterUserData, { ApiErrorResponse } from "./types";
import { AxiosError } from "axios";
import { useAppDispatch } from "../../redux/hooks";
import {
  showErrorModalActionCreator,
  showSuccessModalActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import recetoriumApi from "../../utils/api/recetoriumApi";
import apiMessageToSpanish from "../../utils/api/translations/apiMessageToSpanish";

const useUsers = () => {
  const dispatch = useAppDispatch();
  const apiConnection = recetoriumApi();

  const registerUser = async (registerUserData: RegisterUserData) => {
    try {
      await apiConnection.post("users/register", registerUserData);

      dispatch(
        showSuccessModalActionCreator({
          title: "Tu usuario ha sido registrado",
          content:
            "Enhorabuena ahora puedes acceder a todo el contenido entrando con tu nuevo usuario.",
        })
      );
    } catch (error: unknown) {
      const axiosError = error as AxiosError;

      let errorMessage = axiosError.message;

      if (errorMessage !== "Network Error" && axiosError.response) {
        errorMessage = (axiosError.response.data as ApiErrorResponse).error;
      }

      errorMessage = apiMessageToSpanish(errorMessage);

      dispatch(
        showErrorModalActionCreator({
          title: "Error al intentar regitrar nuevo usuario",
          content: errorMessage,
        })
      );
    }
  };

  return { registerUser };
};

export default useUsers;
