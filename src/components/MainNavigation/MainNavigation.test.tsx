import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProvidersAndRouter } from "../../mocks/renderWithProvidersAndRouer";
import MainNavigation from "./MainNavigation";

describe("Given a MainNavigation component", () => {
  const buttonAriaLabel = /abrir menú principal/i;

  describe("When it's rendered", () => {
    test("Then it should show a main navigation button", () => {
      renderWithProvidersAndRouter(<MainNavigation />);
      const expectedButton = screen.queryByRole("button", {
        name: buttonAriaLabel,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When it's rendered and user clicks on main menu button", () => {
    test("Then it should show a list of links", async () => {
      renderWithProvidersAndRouter(<MainNavigation />);
      const openMenuButton = screen.queryByRole("button", {
        name: buttonAriaLabel,
      }) as HTMLButtonElement;

      await userEvent.click(openMenuButton);
      const expectedLinkList = screen.queryByRole("list");

      expect(expectedLinkList).toBeInTheDocument();
    });
  });

  describe("When it's rendered and user clicks on 'createRecipe' navigation link", () => {
    test("Then it should hide the list of links", async () => {
      const createRecipeLinkText = /crear receta/i;
      renderWithProvidersAndRouter(<MainNavigation />);
      const openMenuButton = screen.queryByRole("button", {
        name: buttonAriaLabel,
      }) as HTMLButtonElement;
      await userEvent.click(openMenuButton);

      const createRecipeLink = screen.queryByRole("link", {
        name: createRecipeLinkText,
      }) as HTMLAnchorElement;
      await userEvent.click(createRecipeLink);
      const expectedLinkList = screen.queryByRole("list");

      expect(expectedLinkList).not.toBeInTheDocument();
    });
  });
});
