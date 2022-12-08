import { screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { renderWithProvidersAndRouter } from "../../mocks/renderWithProvidersAndRouer";
import { ModalStructure } from "../../redux/features/uiSlice/types";
import { uiInitialState } from "../../redux/features/uiSlice/uiSlice";
import { store } from "../../redux/store";
import GlobalStyle from "../../styles/GlobalStyle";
import theme from "../../styles/theme";
import paths from "../../utils/paths/paths";
import App from "./App";

describe("Given an App component", () => {
  describe("When it's rendered and ui state modal isOpen with title 'Well done'", () => {
    test("Then it should show a modal with title 'Well done'", () => {
      const expectedHeadingTitle = "Well done";
      const expectedHeadingLevel = 2;
      const modalIsOpen: ModalStructure = {
        isOpen: true,
        type: "success",
        title: "Well done",
      };

      renderWithProvidersAndRouter(<App />, {
        preloadedState: {
          ui: { ...uiInitialState, modal: modalIsOpen },
          recipes: { recipes: [] },
        },
      });
      const expectedModalHeading = screen.queryByRole("heading", {
        name: expectedHeadingTitle,
        level: expectedHeadingLevel,
      });

      expect(expectedModalHeading).toBeInTheDocument();
    });
  });

  describe("When it's rendered and ui state loading true", () => {
    test("Then it should show a loading screen with label 'Cargando, por favor espere.'", () => {
      const expectedLabel = /cargando, por favor espere./i;
      const isLoading = true;

      renderWithProvidersAndRouter(<App />, {
        preloadedState: {
          ui: { ...uiInitialState, isLoading },
          recipes: { recipes: [] },
        },
      });
      const expectedLoading = screen.queryByLabelText(expectedLabel);

      expect(expectedLoading).toBeInTheDocument();
    });
  });

  describe("When is rendered with path '/usuario/registro'", () => {
    test("Then it should show the Loading before RegisterPage", () => {
      const expectedApp = TestRenderer.create(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <MemoryRouter initialEntries={[paths.registerUser]}>
              <App />
            </MemoryRouter>
          </ThemeProvider>
        </Provider>
      );

      expect(expectedApp).toMatchSnapshot();
    });
  });
});
