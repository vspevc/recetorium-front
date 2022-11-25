import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContextWrapper from "../../mocks/ContextWrapper";
import InputSet from "./InputSet";

describe("Given an InputSet component", () => {
  const inputId = "name";
  const labelText = "Name";

  describe("When it's rendered with id 'name', labelText 'Name' and captionText 'Wait to use'", () => {
    test("Then it should show an input with a label with text 'name'", () => {
      const handleValue = () => {};
      const captionText = "Wait to use";

      render(
        <InputSet
          id={inputId}
          labelText={labelText}
          captionText={captionText}
          handleValue={handleValue}
          options={{ isDisabled: true, isError: true }}
        />,
        { wrapper: ContextWrapper }
      );
      const input = screen.queryByLabelText(labelText);
      const caption = screen.queryByText(captionText);

      expect(input).toBeInTheDocument();
      expect(input).toBeInstanceOf(HTMLInputElement);
      expect(caption).toBeInTheDocument();
    });
  });

  describe("When it's rendered with handleValue and user change input value with 'hi'", () => {
    test("Then it should invoke handleValue function two times", async () => {
      const handleValue = jest.fn();
      const userInputText = "hi";

      render(
        <InputSet
          id={inputId}
          labelText={labelText}
          handleValue={handleValue}
        />,
        { wrapper: ContextWrapper }
      );
      const input = screen.queryByLabelText(labelText) as HTMLInputElement;
      await userEvent.type(input, userInputText);

      expect(handleValue).toHaveBeenCalledTimes(userInputText.length);
    });
  });
});
