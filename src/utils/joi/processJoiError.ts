import { ValidationError } from "joi";

const processJoiError = (error: ValidationError): string[] => {
  return error.message
    .split(". ")
    .map((errorMessage) =>
      errorMessage.substring(0, errorMessage.indexOf(" ")).replaceAll('"', "")
    );
};

export default processJoiError;
