import styled from "styled-components";

const MainNavigationStyled = styled.nav`
  flex-grow: 0;

  .main-menu__button {
    display: block;

    &:focus {
      border-color: ${(props) => props.theme.color.secondaryColor.darkest};
    }
  }

  .main-navigation__icon {
    font-size: ${(props) => props.theme.font.mediumFontSize};
  }

  .main-navigation__links {
    position: absolute;
    display: none;
    top: 100%;
    left: 0;
    z-index: 1;
    width: 100%;
    background-color: ${(props) => props.theme.color.backgroundColor.dark};
    text-align: right;

    .active {
      font-weight: ${(props) => props.theme.font.boldFontWeight};
    }
  }

  .main-navigation--show {
    display: block;
  }

  .main-navigation__link {
    display: block;
    width: 100%;
    padding: 16px 30px;
  }

  @media screen and (min-width: 900px) {
    flex-grow: 2;

    .main-menu__button {
      display: none;
    }

    .main-navigation__links {
      position: static;
      display: flex;
      justify-content: flex-end;
      gap: ${(props) => props.theme.sizes.gap};
      background-color: inherit;
    }

    .main-navigation__link {
      padding: 0;
    }
  }
`;

export default MainNavigationStyled;
