import { AxiosError } from "axios";
import { ApiErrorResponse } from "../../hooks/useUsers/types";
import apiMessageToSpanish from "./translations/apiMessageToSpanish";

const axiosErrorMessage = (error: AxiosError) => {
  let errorMessage = error.message;

  if (errorMessage !== "Network Error" && error.response) {
    errorMessage = (error.response.data as ApiErrorResponse).error;
  }

  return apiMessageToSpanish(errorMessage);
};

export default axiosErrorMessage;
