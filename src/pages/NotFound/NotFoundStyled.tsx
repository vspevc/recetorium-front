import styled from "styled-components";

const NotFoundStyled = styled.div`
  .not-found__text {
    display: flex;
    flex-direction: column;
    align-items: center;

    .not-found__title {
      order: 2;
      border: none;
      font-size: ${(props) => props.theme.font.largeFontSize};
      font-weight: ${(props) => props.theme.font.mediumFontWeight};
    }

    .not-found__code {
      order: 1;
      font-family: ${(props) => props.theme.font.accentFontFamily};
      font-size: ${(props) => props.theme.font.largestFontSize};
      font-weight: ${(props) => props.theme.font.boldFontWeight};
    }
  }
`;

export default NotFoundStyled;
