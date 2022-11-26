import apiMessageToSpanish from "./apiMessageToSpanish";

describe("Given an apiMessageToSpanish function", () => {
  describe("When it's invoked with 'Network Error'", () => {
    test("Then it should return 'Error de conexión, intentelo en unos minutos.'", () => {
      const apiMessage = "Network Error";
      const expectedSpanishMessage =
        "Error de conexión, intentelo en unos minutos.";

      const spanishMessage = apiMessageToSpanish(apiMessage);

      expect(spanishMessage).toBe(expectedSpanishMessage);
    });
  });

  describe("When it's invoked with a message starting with 'email'", () => {
    test("Then it should return 'El Email no es un Email válido.'", () => {
      const apiMessage = '"email" something wrong';
      const expectedSpanishMessage = "El Email no es un Email válido.";

      const spanishMessage = apiMessageToSpanish(apiMessage);

      expect(spanishMessage).toBe(expectedSpanishMessage);
    });
  });
});
