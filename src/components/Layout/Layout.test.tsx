import { screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import paths from "../../utils/paths/paths";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it's rendered with path '/usuario/registro'", () => {
    test("Then it should show the register user page", async () => {
      const registerUserPath = paths.registerUser;
      const expectedHeadingText = /registrarse es gratis/i;
      const expectedHeadingLevel = 1;

      renderWithProviders(
        <MemoryRouter initialEntries={[registerUserPath]}>
          <Layout />
        </MemoryRouter>
      );

      await waitFor(() => {
        const expectedHeading = screen.queryByRole("heading", {
          name: expectedHeadingText,
          level: expectedHeadingLevel,
        });

        expect(expectedHeading).toBeInTheDocument();
      });
    });
  });

  describe("When it's rendered with path '/recetas/crear'", () => {
    test("Then it should show the create recipe page", async () => {
      const createRecipePath = paths.createRecipe;
      const expectedHeadingText = /nueva receta/i;
      const expectedHeadingLevel = 1;

      renderWithProviders(
        <MemoryRouter initialEntries={[createRecipePath]}>
          <Layout />
        </MemoryRouter>
      );

      await waitFor(() => {
        const expectedHeading = screen.queryByRole("heading", {
          name: expectedHeadingText,
          level: expectedHeadingLevel,
        });

        expect(expectedHeading).toBeInTheDocument();
      });
    });
  });

  describe("When it's rendered with path '/not/konwn'", () => {
    test("Then it should show the not found page", async () => {
      const notFoundPath = "/not/konwn";
      const expectedHeadingText = /página no encontrada/i;
      const expectedHeadingLevel = 1;

      renderWithProviders(
        <MemoryRouter initialEntries={[notFoundPath]}>
          <Layout />
        </MemoryRouter>
      );

      await waitFor(() => {
        const expectedHeading = screen.queryByRole("heading", {
          name: expectedHeadingText,
          level: expectedHeadingLevel,
        });

        expect(expectedHeading).toBeInTheDocument();
      });
    });
  });
});
