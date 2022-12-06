import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import paths from "../../utils/paths/paths";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it's rendered with path '/usuario/registro'", () => {
    test("Then it should show the register user page", () => {
      const registerUserPath = paths.registerUser;
      const loadingLabel = /cargando, por favor espere./i;

      renderWithProviders(
        <MemoryRouter initialEntries={[registerUserPath]}>
          <Layout />
        </MemoryRouter>
      );
      const expectedLoading = screen.queryByLabelText(loadingLabel);

      expect(expectedLoading).toBeInTheDocument();
    });
  });
});
