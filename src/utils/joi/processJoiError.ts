const processJoiError = (error: string): string[] => {
  return error
    .split(". ")
    .map((errorMessage) =>
      errorMessage.substring(0, errorMessage.indexOf(" ")).replaceAll('"', "")
    );
};

export default processJoiError;
