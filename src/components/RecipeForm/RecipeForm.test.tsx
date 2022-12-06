import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { recipeTomatoSoup } from "../../factories/recipeFactory/recipeFactory";
import RecipeFormData from "../../hooks/useRecipes/types";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import RecipeForm from "./RecipeForm";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given a RecipeForm component", () => {
  const { name, author, types, ingredients, steps, elaborationTime } =
    recipeTomatoSoup;
  const formType = "create";
  const recipeData: RecipeFormData = {
    name: "",
    author: "",
    types: [],
    ingredients: [],
    steps: [],
    elaborationTime: "",
  };
  const sendFormData = jest.fn();

  describe("When it's rendered with type create", () => {
    test("Then it should show a submit button with text 'Crear Receta'", () => {
      const createButtonText = /crear receta/i;

      renderWithProviders(
        <RecipeForm
          type={formType}
          recipeData={recipeData}
          sendFormData={sendFormData}
        />
      );
      const createButton = screen.queryByRole("button", {
        name: createButtonText,
      });

      expect(createButton).toBeInTheDocument();
    });
  });

  describe("When it's rendered with sendFormData function and user create a new 'Tomato soup' recipe", () => {
    test("Then it should call sendFormData with 'Tomato soup' recipe data", async () => {
      const recipeData: RecipeFormData = {
        name,
        author,
        types,
        ingredients,
        steps,
        elaborationTime,
      };
      const createButtonText = /crear receta/i;
      renderWithProviders(
        <RecipeForm
          type={formType}
          recipeData={recipeData}
          sendFormData={sendFormData}
        />
      );

      const createButton = screen.queryByRole("button", {
        name: createButtonText,
      }) as HTMLInputElement;
      await userEvent.click(createButton);

      expect(sendFormData).toHaveBeenCalledWith(recipeData);
    });
  });

  describe("When it's rendered and user try to update a recipe without name", () => {
    test("Then it should call dispatch with modal error action", async () => {
      const formType = "update";
      const recipeData: RecipeFormData = {
        name: "",
        author,
        types,
        ingredients,
        steps,
        elaborationTime,
      };
      const updateButtonText = /modificar receta/i;
      renderWithProviders(
        <RecipeForm
          type={formType}
          recipeData={recipeData}
          sendFormData={sendFormData}
        />
      );

      const updateButton = screen.queryByRole("button", {
        name: updateButtonText,
      }) as HTMLInputElement;
      await userEvent.click(updateButton);

      expect(sendFormData).not.toHaveBeenCalled();
    });
  });

  describe("When it's rendered and user upload an image", () => {
    test("Then it should load", async () => {
      global.URL.createObjectURL = jest.fn();
      const fileImageName = "tomato-soup.jpg";
      const file = new File(["(⌐□_□)"], fileImageName, {
        type: "image/jpeg",
      });
      const uploadImageInputLabel = /seleccionar imagen/i;
      const nameInputLabel = /nombre de la receta/i;
      renderWithProviders(
        <RecipeForm
          type={formType}
          recipeData={recipeData}
          sendFormData={sendFormData}
        />
      );

      const nameInput = screen.queryByRole("textbox", {
        name: nameInputLabel,
      }) as HTMLInputElement;
      const uploadImageInput = screen.queryByLabelText(
        uploadImageInputLabel
      ) as HTMLInputElement;
      await userEvent.type(nameInput, fileImageName);
      await userEvent.upload(uploadImageInput, file);
      const inputFiles = uploadImageInput.files as FileList;

      expect(inputFiles[0].name).toBe(fileImageName);
    });
  });
});
