import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: ${(props) => props.theme.color.backgroundColor.light};
  .header__content {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${(props) => props.theme.sizes.mobileHorizontalPadding};
    margin: 0 auto;
    width: 100%;
    max-width: ${(props) => props.theme.sizes.maxWidth};
    height: 60px;

    @media screen and (min-width: 900px) {
      padding: 0 ${(props) => props.theme.sizes.desktopHorizontalPadding};
    }
  }

  .header__title {
    flex-grow: 1;
    margin: 0;
    border: none;
    font-family: ${(props) => props.theme.font.accentFontFamily};
    font-size: ${(props) => props.theme.font.largeFontSize};
    font-weight: ${(props) => props.theme.font.boldFontWeight};
    color: ${(props) => props.theme.color.primaryColor.base};
  }
`;

export default HeaderStyled;
