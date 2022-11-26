import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import FeedbackModal from "./FeedbackModal";

describe("Given a FeedbackModal component", () => {
  const titleText = "Well done";
  const contentText = "You make a great work.";

  describe("When it's rendered with title 'Well done'", () => {
    test("Then it should show a heading level 2 with 'Well done'", () => {
      renderWithProviders(
        <FeedbackModal
          title={titleText}
          content={contentText}
          closeAction={() => {}}
        />
      );
      const expectedTitle = screen.queryByRole("heading", {
        name: titleText,
        level: 2,
      });

      expect(expectedTitle).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a closeAction and user clicks on button 'Salir'", () => {
    test("Then it should call the closeAction function", async () => {
      const buttonText = /salir/i;
      const closeAction = jest.fn();
      renderWithProviders(
        <FeedbackModal
          title={titleText}
          content={contentText}
          closeAction={closeAction}
          isError={true}
        />
      );

      const expectedButton = screen.queryByRole("button", {
        name: buttonText,
      }) as HTMLButtonElement;
      await userEvent.click(expectedButton);

      expect(closeAction).toHaveBeenCalled();
    });
  });
});
