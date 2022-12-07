import RegisterUserData, { ApiErrorResponse } from "./types";
import { AxiosError } from "axios";
import { useAppDispatch } from "../../redux/hooks";
import {
  hideLoadingActionCreator,
  showErrorModalActionCreator,
  showLoadingActionCreator,
  showSuccessModalActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import recetoriumApi from "../../utils/api/recetoriumApi";
import apiMessageToSpanish from "../../utils/api/translations/apiMessageToSpanish";
import { useNavigate } from "react-router-dom";
import paths from "../../utils/paths/paths";

const useUsers = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const registerUser = async (registerUserData: RegisterUserData) => {
    dispatch(showLoadingActionCreator());

    try {
      await recetoriumApi().post("users/register", registerUserData);

      dispatch(
        showSuccessModalActionCreator({
          title: "Tu usuario ha sido registrado",
          content:
            "Enhorabuena ahora puedes acceder a todo el contenido entrando con tu nuevo usuario.",
        })
      );

      navigate(paths.root);
      dispatch(hideLoadingActionCreator());
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
      dispatch(hideLoadingActionCreator());
    }
  };

  return { registerUser };
};

export default useUsers;
