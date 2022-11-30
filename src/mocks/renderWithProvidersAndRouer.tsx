import { configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { render, RenderOptions } from "@testing-library/react";
import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { RootState, store } from "../redux/store";
import { uiReducer } from "../redux/features/uiSlice/uiSlice";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";
import { recipesReducer } from "../redux/features/recipesSlice/recipesSlice";
import { BrowserRouter } from "react-router-dom";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: typeof store;
}

export const renderWithProvidersAndRouter = (
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        ui: uiReducer,
        recipes: recipesReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    );
  };
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
