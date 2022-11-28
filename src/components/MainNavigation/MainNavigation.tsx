import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import paths from "../../utils/paths/paths";
import Button from "../Button/Button";
import MainNavigationStyled from "./MainNavigationStyled";

const MainNavigation = (): JSX.Element => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  };
  const mainMenuButtonClassName = isOpenMobileMenu
    ? " main-navigation--show"
    : "";

  return (
    <MainNavigationStyled>
      <Button
        className="main-menu__button"
        action={toggleMenu}
        options={{ variant: "small" }}
        ariaLabel="Abrir menú principal"
      >
        <FontAwesomeIcon
          className="main-navigation__icon"
          icon={solid("bars")}
        />
      </Button>

      <ul className={`main-navigation__links${mainMenuButtonClassName}`}>
        <li>
          <NavLink to={paths.root} className="main-navigation__link">
            Página principal
          </NavLink>
        </li>
        <li>
          <NavLink to={paths.root} className="main-navigation__link">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to={paths.registerUser} className="main-navigation__link">
            Regístrate
          </NavLink>
        </li>
      </ul>
    </MainNavigationStyled>
  );
};

export default MainNavigation;
