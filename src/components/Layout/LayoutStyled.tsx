import styled from "styled-components";

const LayoutStyled = styled.div`
  main {
    margin: 0 auto;
    padding: ${(props) =>
      `${props.theme.sizes.mainElementVerticalPadding} ${props.theme.sizes.mobileHorizontalPadding}`};
    max-width: ${(props) => props.theme.sizes.maxWidth};

    @media screen and (min-width: 900px) {
      padding: ${(props) =>
        `${props.theme.sizes.mainElementVerticalPadding} ${props.theme.sizes.desktopHorizontalPadding}`};
    }
  }
`;

export default LayoutStyled;
