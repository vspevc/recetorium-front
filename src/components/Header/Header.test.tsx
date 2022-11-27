import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import paths from "../../utils/paths/paths";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's rendered at path '/'", () => {
    test("Then it should show a heading level 1 with 'Recetorium'", () => {
      const expectedHeadingText = /recetorium/i;
      const expectedHeadingLevel = 1;
      const rootPath = paths.root;

      renderWithProviders(
        <MemoryRouter initialEntries={[rootPath]}>
          <Header />
        </MemoryRouter>
      );
      const expectedHeading = screen.queryByRole("heading", {
        name: expectedHeadingText,
        level: expectedHeadingLevel,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });

  describe("When it's rendered at path '/usuario/registro'", () => {
    test("Then it should show a span with 'Recetorium'", () => {
      const expectedSpanText = /recetorium/i;
      const rootPath = paths.registerUser;

      renderWithProviders(
        <MemoryRouter initialEntries={[rootPath]}>
          <Header />
        </MemoryRouter>
      );
      const expectedSpan = screen.queryByText(expectedSpanText);

      expect(expectedSpan).toBeInTheDocument();
      expect(expectedSpan).toBeInstanceOf(HTMLSpanElement);
    });
  });
});
