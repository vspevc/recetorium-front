import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100vh;
  }

  body {
    font-family: ${(props) => props.theme.font.mainFontFamily};
    font-size: ${(props) => props.theme.font.mainFontSize};
    color: ${(props) => props.theme.color.inkColor.base}
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    margin-bottom: 30px;
    border-bottom: 1px solid ${(props) => props.theme.color.primaryColor.base};
  }

  h1 {
    font-size: ${(props) => props.theme.font.largeFontSize};
  }

  h2 {
    font-size: ${(props) => props.theme.font.mediumFontSize};
  }

  a {
    font-weight: ${(props) => props.theme.font.mediumFontWeight};
    text-decoration: none;
    color: ${(props) => props.theme.color.primaryColor.darkest};

    &:hover {
      text-decoration: underline;
    }
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button,
  input {
    padding: ${(props) => props.theme.sizes.smallElementPadding.vertical} ${(
  props
) => props.theme.sizes.smallElementPadding.horizontal};
    font-family: inherit;
    font-size: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  input[type="file"] {
    display: none;
  }

  label {
    font-weight: ${(props) => props.theme.font.mediumFontWeight};
  }
`;

export default GlobalStyle;
