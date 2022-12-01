import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import { recipesInitialState } from "../../redux/features/recipesSlice/recipesSlice";
import { uiInitialState } from "../../redux/features/uiSlice/uiSlice";
import Pagination from "./Pagination";

const mockLoadRecipes = jest.fn();
jest.mock("../../hooks/useRecipes/useRecipes", () => {
  return () => ({
    loadRecipes: mockLoadRecipes,
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Given a Pagintation component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a Button with aria label 'Ir a la página anterior'", async () => {
      const previousButtonText = /ir a la página anterior/i;

      renderWithProviders(<Pagination />, {
        preloadedState: {
          ui: {
            ...uiInitialState,
            pagination: {
              previousPage: "/?page=10",
              nextPage: null,
              currentPage: 11,
              totalPages: 11,
            },
          },
          recipes: recipesInitialState,
        },
      });
      const previousButton = screen.queryByRole("button", {
        name: previousButtonText,
      }) as HTMLButtonElement;
      await userEvent.click(previousButton);

      expect(previousButton).toBeInTheDocument();
    });
  });

  describe("When it's rendered with next page state '/?page=3' and user clicks on next page button", () => {
    test("Then it should call loadRecipes with '/?page=3'", async () => {
      const nextButtonText = /ir a la siguiente página/i;
      const expectedPath = "/?page=3";

      renderWithProviders(<Pagination />, {
        preloadedState: {
          ui: {
            ...uiInitialState,
            pagination: {
              previousPage: null,
              nextPage: expectedPath,
              currentPage: 1,
              totalPages: 3,
            },
          },
          recipes: recipesInitialState,
        },
      });
      const nextButton = screen.queryByRole("button", {
        name: nextButtonText,
      }) as HTMLButtonElement;
      await userEvent.click(nextButton);

      expect(mockLoadRecipes).toHaveBeenCalledWith(expectedPath);
    });
  });
});
