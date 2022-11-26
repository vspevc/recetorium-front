import toSpanish from "./englishToSpanish.json";

const apiMessageToSpanish = (message: string): string => {
  type translations = typeof toSpanish;

  if (/^"username"|^"password"|^"paswordConfirm"|^"email"/.test(message)) {
    const validationMessages = message
      .split(", ")
      .map(
        (validationMessage) =>
          toSpanish[
            validationMessage
              .substring(0, validationMessage.indexOf(" "))
              .replaceAll('"', "") as keyof translations
          ]
      )
      .join(" ");

    return validationMessages;
  }

  return toSpanish[message as keyof translations];
};

export default apiMessageToSpanish;
