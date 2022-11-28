import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContextWrapper from "../../mocks/ContextWrapper";
import MainNavigation from "./MainNavigation";

describe("Given a MainNavigation component", () => {
  const buttonAriaLabel = /abrir menú principal/i;

  describe("When it's rendered", () => {
    test("Then it should show a main navigation button", () => {
      render(<MainNavigation />, { wrapper: ContextWrapper });
      const expectedButton = screen.queryByRole("button", {
        name: buttonAriaLabel,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When it's rendered and user clicks on main menu button", () => {
    test("Then it should show a list of links", async () => {
      render(<MainNavigation />, { wrapper: ContextWrapper });
      const openMenuButton = screen.queryByRole("button", {
        name: buttonAriaLabel,
      }) as HTMLButtonElement;

      await userEvent.click(openMenuButton);
      const expectedLinkList = screen.queryByRole("list");

      expect(expectedLinkList).toBeInTheDocument();
    });
  });
});
