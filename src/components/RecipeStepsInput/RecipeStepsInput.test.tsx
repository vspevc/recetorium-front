import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import { Step } from "../../redux/features/recipesSlice/types";
import RecipeStepsInput from "./RecipeStepsInput";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given a RecipeStepsInput component", () => {
  const stepText = "Chop vegetables";
  const stepOrder = 1;
  const initialSteps: Step[] = [{ step: stepText, order: stepOrder }];
  const callback = jest.fn();
  const textareaLabel = /describe el paso a realizar/i;

  describe("When it's rendered", () => {
    test("Then it should show a heading level 3 with 'Paso a paso'", async () => {
      const expectedHeadingText = /paso a paso/i;
      const expectedHeadingLevel = 2;
      const addStepButtonText = /añadir paso/i;

      renderWithProviders(<RecipeStepsInput steps={[]} callback={callback} />);
      const expectedHeading = screen.queryByRole("heading", {
        name: expectedHeadingText,
        level: expectedHeadingLevel,
      });
      const addStepButton = screen.queryByRole("button", {
        name: addStepButtonText,
      }) as HTMLButtonElement;
      await userEvent.click(addStepButton);

      expect(expectedHeading).toBeInTheDocument();
    });
  });

  describe("When it's rendered without steps with callback and user inserts 'Chop vegetables'", () => {
    test("Then it should call callback with step 'Chop vegetables' and order 1", async () => {
      const expectedSteps: Step[] = [{ step: stepText, order: stepOrder }];
      const addStepButtonText = /añadir paso/i;
      renderWithProviders(<RecipeStepsInput steps={[]} callback={callback} />);

      const stepTextarea = screen.queryByRole("textbox", {
        name: textareaLabel,
      }) as HTMLTextAreaElement;
      const addStepButton = screen.queryByRole("button", {
        name: addStepButtonText,
      }) as HTMLButtonElement;
      await userEvent.type(stepTextarea, stepText);
      await userEvent.click(addStepButton);

      expect(callback).toHaveBeenCalledWith(expectedSteps);
    });
  });

  describe("When it's rendered with step 'Chop vegetables' order 1, step 'Boil water' order 2 and user click 'Boil water' delete button", () => {
    test("Then it should call callback with step 'Chop vegetables' order 1", async () => {
      const boilWaterStep: Step = { step: "Boil water", order: 2 };
      const steps = [...initialSteps, boilWaterStep];
      const deleteButtonText = /eliminar/i;
      renderWithProviders(
        <RecipeStepsInput steps={steps} callback={callback} />
      );

      const deleteButton = screen.queryAllByRole("button", {
        name: deleteButtonText,
      }) as HTMLButtonElement[];
      await userEvent.click(deleteButton[1]);

      expect(callback).toHaveBeenCalledWith(initialSteps);
    });
  });

  describe("When it's rendered with step 'Chop vegetables' order 1, user click it's edit button and update step", () => {
    test("Then it should call callback with step 'Chop vegetables and boil water' and order 1", async () => {
      const stepAdition = " and boil water";
      const expectedSteps: Step[] = [
        { step: `${stepText}${stepAdition}`, order: stepOrder },
      ];
      const editButtonText = /^editar/i;
      const updateButtonText = /editar paso/i;
      renderWithProviders(
        <RecipeStepsInput steps={initialSteps} callback={callback} />
      );

      const editButton = screen.queryByRole("button", {
        name: editButtonText,
      }) as HTMLButtonElement;
      await userEvent.click(editButton);
      const stepTextarea = screen.queryByRole("textbox", {
        name: textareaLabel,
      }) as HTMLTextAreaElement;
      const updateButton = screen.queryByRole("button", {
        name: updateButtonText,
      }) as HTMLButtonElement;
      await userEvent.type(stepTextarea, stepAdition);
      await userEvent.click(updateButton);

      expect(callback).toHaveBeenCalledWith(expectedSteps);
    });
  });
});
