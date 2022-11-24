import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContextWrapper from "../../mocks/ContextWrapper";
import Button from "./Button";
import { ButtonStyledProps } from "./types";

describe("Given a Button component", () => {
  const buttonText = "Click me";

  describe("When it's rendered with children 'Click me'", () => {
    test("Then it should show a button with the text 'Click me' on it", () => {
      render(<Button options={{ variant: "small" }}>{buttonText}</Button>, {
        wrapper: ContextWrapper,
      });

      const button = screen.queryByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it's rendered with an action and user clicks on it", () => {
    test("Then it should invoke the action function", async () => {
      const buttonAction = jest.fn();
      render(
        <Button options={{ variant: "round" }} action={buttonAction}>
          {buttonText}
        </Button>,
        {
          wrapper: ContextWrapper,
        }
      );

      const button = screen.queryByRole("button", { name: buttonText })!;
      await userEvent.click(button);

      expect(buttonAction).toHaveBeenCalled();
    });
  });

  describe("When it's rendered with options as 'a' and href '/'", () => {
    test("Then it should show an anchor element styled as a button", () => {
      const buttonAs = "a";
      render(
        <Button options={{ as: buttonAs, href: "/" }}>{buttonText}</Button>,
        {
          wrapper: ContextWrapper,
        }
      );

      const anchor = screen.queryByRole("link", { name: buttonText });

      expect(anchor).toBeInTheDocument();
    });
  });

  describe("When it's rendered with large variant", () => {
    test("Then it should show a button with width 100%", () => {
      const buttonVariant: ButtonStyledProps = { variant: "large" };
      const expectedStyle = "width: 100%";
      render(<Button options={buttonVariant}>{buttonText}</Button>, {
        wrapper: ContextWrapper,
      });

      const button = screen.queryByRole("button", { name: buttonText });

      expect(button).toHaveStyle(expectedStyle);
    });
  });

  describe("When it's rendered with small variant", () => {
    test("Then it should show a button with padding 10px", () => {
      const buttonVariant: ButtonStyledProps = { variant: "small" };
      const expectedStyle = "padding: 10px";
      render(<Button options={buttonVariant}>{buttonText}</Button>, {
        wrapper: ContextWrapper,
      });

      const button = screen.queryByRole("button", { name: buttonText });

      expect(button).toHaveStyle(expectedStyle);
    });
  });

  describe("When it's rendered with round variant", () => {
    test("Then it should show a button with border-radius 50%", () => {
      const buttonVariant: ButtonStyledProps = { variant: "round" };
      const expectedStyle = "border-radius: 50%";
      render(<Button options={buttonVariant}>{buttonText}</Button>, {
        wrapper: ContextWrapper,
      });

      const button = screen.queryByRole("button", { name: buttonText });

      expect(button).toHaveStyle(expectedStyle);
    });
  });

  describe("When it's rendered with mixed variant", () => {
    test("Then it should show a button with display flex", () => {
      const buttonVariant: ButtonStyledProps = { variant: "mixed" };
      const expectedStyle = "display: flex";
      render(<Button options={buttonVariant}>{buttonText}</Button>, {
        wrapper: ContextWrapper,
      });

      const button = screen.queryByRole("button", { name: buttonText });

      expect(button).toHaveStyle(expectedStyle);
    });
  });
});
