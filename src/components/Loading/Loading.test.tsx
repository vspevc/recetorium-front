import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a loading screen with label 'Cargando, por favor espere.'", () => {
      const expectedLabel = /cargando, por favor espere./i;

      renderWithProviders(<Loading />);
      const expectedLoading = screen.queryByLabelText(expectedLabel);

      expect(expectedLoading).toBeInTheDocument();
    });
  });
});
