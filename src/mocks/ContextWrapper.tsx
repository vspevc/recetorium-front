import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { store } from "../redux/store";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";

interface ContextWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const ContextWrapper = ({ children }: ContextWrapperProps): JSX.Element => {
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

export default ContextWrapper;
