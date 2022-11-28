import { useLocation } from "react-router-dom";
import MainNavigation from "../MainNavigation/MainNavigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const { pathname } = useLocation();
  const DynamicTitle =
    pathname === "/"
      ? ("h1" as keyof JSX.IntrinsicElements)
      : ("span" as keyof JSX.IntrinsicElements);

  return (
    <HeaderStyled>
      <div className="header__content">
        <DynamicTitle className="header__title">Recetorium</DynamicTitle>
        <MainNavigation />
      </div>
    </HeaderStyled>
  );
};

export default Header;
