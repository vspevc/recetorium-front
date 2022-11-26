import RegisterUserData from "./types";
import { AxiosError } from "axios";
import { useAppDispatch } from "../../redux/hooks";
import { showModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { ModalStructure } from "../../redux/features/uiSlice/types";
import recetoriumApi from "../../utils/api/recetoriumApi";
import apiMessageToSpanish from "../../utils/api/translations/apiMessageToSpanish";

const useUsers = () => {
  const dispatch = useAppDispatch();
  const apiConnection = recetoriumApi();

  const registerUser = async (registerUserData: RegisterUserData) => {
    try {
      await apiConnection.post("users/register", registerUserData);

      const modalData: ModalStructure = {
        isOpen: true,
        type: "success",
        title: "Tu usuario ha sido registrado",
        content:
          "Enhorabuena ahora puedes acceder a todo el contenido entrando con tu nuevo usuario.",
      };
      dispatch(showModalActionCreator(modalData));
    } catch (error: unknown) {
      let errorMessage = "Ha habido un error en el registro";

      if (error instanceof AxiosError) {
        errorMessage = error.message;

        if (errorMessage !== "Network Error" && error.response) {
          errorMessage = error.response.data.error;
        }

        errorMessage = apiMessageToSpanish(errorMessage);
      }

      const modalData: ModalStructure = {
        isOpen: true,
        type: "error",
        title: "Error al intentar regitrar nuevo usuario",
        content: errorMessage,
      };
      dispatch(showModalActionCreator(modalData));
    }
  };

  return { registerUser };
};

export default useUsers;
