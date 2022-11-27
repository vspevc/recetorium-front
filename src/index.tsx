import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "normalize.css";
import "@fontsource/alegreya-sans/400.css";
import "@fontsource/alegreya-sans/500.css";
import "@fontsource/alegreya-sans/700.css";
import "@fontsource/alegreya-sans/900.css";
import "@fontsource/cinzel-decorative/400.css";
import "@fontsource/cinzel-decorative/900.css";
import { ThemeProvider } from "styled-components";
import { store } from "./redux/store";
import App from "./components/App/App";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
