import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";

interface ContextWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const ContextWrapper = ({ children }: ContextWrapperProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ContextWrapper;
