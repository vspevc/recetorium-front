import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import RecipeInputCard from "./RecipeInputCard";

describe("Given a RecipeInputCard component", () => {
  const prefix = "1 kg";
  const body = "tomato";
  const index = 1;
  const editData = jest.fn();
  const deleteData = jest.fn();

  describe("When it's rendered with prefix '1 kg' and body 'tomato'", () => {
    test("Then it should show the text '1 kg' and text 'tomato'", () => {
      renderWithProviders(
        <RecipeInputCard
          prefix={prefix}
          body={body}
          index={index}
          editData={editData}
          deleteData={deleteData}
        />
      );

      const expectedPrefix = screen.queryByText(prefix);
      const expectedBody = screen.queryByText(body);

      expect(expectedPrefix).toBeInTheDocument();
      expect(expectedBody).toBeInTheDocument();
    });
  });

  describe("When it's rendered with index 1, editData function and user clicks on edit button", () => {
    test("Then it should call editData with 1", async () => {
      const editButtonLabel = /editar/i;
      renderWithProviders(
        <RecipeInputCard
          prefix={prefix}
          body={body}
          index={index}
          editData={editData}
          deleteData={deleteData}
        />
      );

      const editButton = screen.queryByLabelText(
        editButtonLabel
      ) as HTMLButtonElement;
      await userEvent.click(editButton);

      expect(editData).toHaveBeenCalledWith(index);
    });
  });

  describe("When it's rendered with index 1, deleteData function and user clicks on edit button", () => {
    test("Then it should call deleteData with 1", async () => {
      const deleteButtonLabel = /eliminar/i;
      renderWithProviders(
        <RecipeInputCard
          prefix={prefix}
          body={body}
          index={index}
          editData={editData}
          deleteData={deleteData}
        />
      );

      const deleteButton = screen.queryByLabelText(
        deleteButtonLabel
      ) as HTMLButtonElement;
      await userEvent.click(deleteButton);

      expect(deleteData).toHaveBeenCalledWith(index);
    });
  });
});
