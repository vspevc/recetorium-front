import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "@fontsource/alegreya-sans";
import "@fontsource/cinzel-decorative";
import "normalize.css";
import { ThemeProvider } from "styled-components";
import { store } from "./redux/store";
import App from "./App";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
