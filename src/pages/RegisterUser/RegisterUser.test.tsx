import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import RegisterUser from "./RegisterUser";

describe("When it's rendered", () => {
  test("Then it should show a heading level 2 'Registrarse es gratis'", () => {
    const expectedHeadingText = "Registrarse es gratis";
    const expectedHeadingLevel = 2;

    renderWithProviders(<RegisterUser />);
    const expectedHeading = screen.queryByRole("heading", {
      name: expectedHeadingText,
      level: expectedHeadingLevel,
    });

    expect(expectedHeading).toBeInTheDocument();
  });
});
