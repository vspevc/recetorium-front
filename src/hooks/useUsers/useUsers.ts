import RegisterUserData from "./types";
import { AxiosError } from "axios";
import { useAppDispatch } from "../../redux/hooks";
import { showModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import recetoriumApi from "../../utils/api/recetoriumApi";
import apiMessageToSpanish from "../../utils/api/translations/apiMessageToSpanish";
import loadModal from "../../utils/modals/loadModal";

const useUsers = () => {
  const dispatch = useAppDispatch();
  const apiConnection = recetoriumApi();

  const registerUser = async (registerUserData: RegisterUserData) => {
    try {
      await apiConnection.post("users/register", registerUserData);

      const modal = loadModal.successFeedback(
        "Tu usuario ha sido registrado",
        "Enhorabuena ahora puedes acceder a todo el contenido entrando con tu nuevo usuario."
      );
      dispatch(showModalActionCreator(modal));
    } catch (error: unknown) {
      let errorMessage = "Ha habido un error en el registro";

      if (error instanceof AxiosError) {
        errorMessage = error.message;

        if (errorMessage !== "Network Error" && error.response) {
          errorMessage = error.response.data.error;
        }

        errorMessage = apiMessageToSpanish(errorMessage);
      }

      const modal = loadModal.errorFeedback(
        "Error al intentar regitrar nuevo usuario",
        errorMessage
      );
      dispatch(showModalActionCreator(modal));
    }
  };

  return { registerUser };
};

export default useUsers;
